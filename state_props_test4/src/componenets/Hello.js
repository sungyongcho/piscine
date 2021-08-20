import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserName from './UserName';

// 함수형 컴포넌트를 만들 때 전달 받은게 아무것도 없는데
// 파라미터로 전달 받는다
// 컴포넌트 내부에서 변경해서 사용할 수 없다

export default function Hello({ age }) {
  const [name, setName] = useState('Mike');
  // 아래 코드는 받아온 넘겨받는 props의 값이 변경 되는게 아니라
  // 아래에서 새로 선언된 age의 값을 가져와서 찍어주는것 밖에 안함..
  // const [newAge, setAge] = useState(age);

  const msg = age > 19 ? '성인 입니다' : '미성년자 입니다.';

  return (
    <div>
      <h2 id="name">
        {name} ({age}세) : {msg}
      </h2>

      <form>
        {/* Hello 컴포넌트 입장에서 name은 state이지만
          UserName 컴포넌트 입장에서는 props */}
        <UserName name={name}> </UserName>
        <button
          type="button"
          onClick={() => {
            // 2
            setName(name === 'Mike' ? 'Jane' : 'Mike');
            // console.log(age);
            // setAge(age + 1);
          }}
        >
          Change
        </button>
      </form>
    </div>
  );
}

Hello.propTypes = {
  age: PropTypes.node.isRequired,
};
