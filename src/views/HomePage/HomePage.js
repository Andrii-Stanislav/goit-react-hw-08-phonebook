import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={250}
      classNames="fade"
      unmountOnExit
    >
      <div className={styles.homePage}>
        <h1 className={styles.title}>Welcome to the contacts app</h1>
      </div>
    </CSSTransition>
  );
};

export default HomePage;
