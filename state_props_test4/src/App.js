import React from 'react';
import './App.css';
import Hello from './componenets/Hello';

function App() {
  return (
    <div className="App">
      <h3>props: properties</h3>
      {/* 동일한 component라도 state는 각기 관리됨 */}
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;
