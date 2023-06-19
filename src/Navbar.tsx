import React from 'react';
import styles from './css/navbar.module.css';

function Navbar() {
    return (
      <header>
        <div className={styles.logoContainer} >
            <img src='logo.svg' alt="logo" ></img>
        </div>
        <nav className={styles.sectionContainer} >
            <a href='#about' className={styles.section}>
                <h3>About</h3>
            </a>
            <a href='#values' className={styles.section}>
                <h3>Values</h3>
            </a>
            <a href='#events' className={styles.section}>
                <h3>Events</h3>
            </a>
            <a href='#officers' className={styles.section}>
                <h3>Officers</h3>
            </a>
            <a href='#partners' className={styles.section}>
                <h3>Partners</h3>
            </a>
        </nav>
        <div className={styles.line} ></div>
      </header>
    );
  }
  
  export default Navbar;
  