import styles from '../css/header.module.css';


function Header() {
    return (
      <>
      <section className={styles.headerContainer} >
      <div className={styles.leftSection} >
        <div className={styles.titleHead} >
            Empowering the Future of Tech
        </div>
        <div className={styles.titleSubHead} >
            At Women Who Compute, we are dedicated to the empowerment and advancement of women in engineering and computer science.
        </div>
        <button className={styles.sectionButton}>
            <p className={styles.sectionText}>Get Started</p>
        </button>
      </div>
        <div className={styles.mascotBack} >
            <img src='mascotBack.svg' alt='mascot background' className={styles.mascotFront}></img>
        </div>
      </section>
      </>
    );
  }
  
  export default Header;