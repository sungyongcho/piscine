import React from 'react';
import styles from './App.module.css';
import Hello from './componenets/Hello';
import Welcome from './componenets/Welcome';

function App() {
  return (
    <div className="App">
      <hihi> </hihi>
      <Hello />
      <Welcome />
      <div className={styles.box}>app Box</div>
    </div>
  );
}

export default App;
