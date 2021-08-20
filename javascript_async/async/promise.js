// Promise is a JavaScript object for async operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executuor runs automatically.
//
const promise = new Promise((resolve, reject) => {
  // doming something heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumer: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then(
    (num) =>
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      })
  )
  .then((num) => console.log(num));

// 4. Error Handling
// const getHen = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve('닭'), 1000);
//   });

// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} => 달걀`), 1000);
//   });

// const cook = (egg) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} => fried egg`), 1000);
//   });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal))
//   .catch(console);

// same
// getHen().then(getEgg).then(cook).then(console.log);

// same;

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fried egg`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => 'bread')
  .then(cook)
  .then(console.log)
  .catch(console.log);
