import styles from '../css/header.module.css';
import Mascot from '../images/mascotBack.svg';
import Mascot2 from '../images/mascotBackSmall.svg';

function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }      
  };   
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
        <button onClick={() => scrollToSection('values')} className={styles.sectionButton}>
            <p className={styles.sectionText}>Get Started</p>
        </button>
      </div>
        <div className={styles.mascotContainer} >
            <img src={Mascot} alt='mascot background' className={styles.mascotFront}></img>
            <img src={Mascot2} alt='mascot background' className={styles.mascotFront2}></img>
        </div>
      </section>
      </>
    );
  }
  
  export default Header;