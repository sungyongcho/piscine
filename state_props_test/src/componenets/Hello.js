import React from 'react';
import World from './World';
import styles from './Hello.module.css';

export default function Hello() {
  return (
    <div>
      <h1>Hello!</h1>
      <World />
      <div className={styles.box}>ssup</div>
    </div>
  );
}
