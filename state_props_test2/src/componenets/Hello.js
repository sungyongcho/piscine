import React from 'react';

export default function Hello() {
  function showName() {
    console.log('mike');
  }

  function showAge(age) {
    console.log(age);
  }

  // 1.
  // function showText(e) {
  //   // 이벤트 객체의 타겟의 값
  //   console.log(e.target.value);
  // }

  // 3.
  function showText(txt) {
    console.log(txt);
  }

  return (
    <div>
      <h1>Hello!</h1>
      <form>
        {/* <button onClick={showName} type="button">
          함수 뒤에 반환값이 없으면 실행만,
          있으면 반환값을 돌려줌
         */}
        <button onClick={showName()} type="button">
          Show name
        </button>
        {/*
          아래의 경우 arrow 함수로 반환값을 바로 사용할 수 있음
          <button
          onClick={() => {
            console.log(30);
          }}
          type="button"
        > */}
        <button
          onClick={() => {
            showAge(10);
          }}
          type="button"
        >
          Show age
        </button>
        {/* 1. <input type="text" onChange={showText} /> */}
        {/*
          2 .
          <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        /> */}
        {/* 3. */}
        <input
          type="text"
          onChange={(e) => {
            const txt = e.target.value;
            showText(txt);
          }}
        />
      </form>
    </div>
  );
}
