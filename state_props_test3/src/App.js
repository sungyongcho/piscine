import React from 'react';
import './App.css';
import Hello from './componenets/Hello';

function App() {
  return (
    <div className="App">
      {/* 동일한 component라도 state는 각기 관리됨 */}
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
