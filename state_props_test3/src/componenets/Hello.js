import React, { useState } from 'react';

export default function Hello() {
  // vanilla js 방식
  // state가 아님
  // let name = 'Mike';

  // 구조분해할당, useState에 초기값
  const [name, setName] = useState('Mike');

  // 1.
  // function changeName() {
  //   const newName = name === 'Mike' ? 'Jane' : 'Mike';
  //   // console.log(name);
  //   // vanilla js 방식
  //   // document.getElementById('name').innerText = name;
  //   setName(newName);
  // }

  return (
    <div>
      {/* <h1>state</h1> */}
      {/* vanilla js 방식: <h2 id="name">{name}</h2> */}
      <h2 id="name">{name}</h2>
      <form>
        <button
          type="button"
          onClick={() => {
            // 2
            setName(name === 'Mike' ? 'Jane' : 'Mike');
          }}
        >
          Change
        </button>
      </form>
    </div>
  );
}
