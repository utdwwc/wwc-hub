import React from 'react';
import styles from '../css/navbar.module.css';
import logo from '../images/logo.svg';


const Navbar = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }      
      };    
    return (
      <header>
        <div className={styles.logoContainer} >
            <img src={logo} alt="logo" ></img>
        </div>
            <nav className={styles.sectionContainer} >
                <button onClick={() => scrollToSection('about')} className={styles.section}>
                    <h3>About</h3>
                </button>
                <button onClick={() => scrollToSection('values')} className={styles.section}>
                    <h3>Values</h3>
                </button>
                <button onClick={() => scrollToSection('events')} className={styles.section}>
                    <h3>Events</h3>
                </button>
                <button onClick={() => scrollToSection('officers')} className={styles.section}>
                    <h3>Officers</h3>
                </button>
                <button onClick={() => scrollToSection('partners')} className={styles.section}>
                    <h3>Partners</h3>
                </button>
            </nav>
        <div className={styles.line} ></div>
      </header>
    );
  }
  
  export default Navbar;
  