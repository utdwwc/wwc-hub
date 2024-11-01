import styles from '../css/footer.module.css';
import FooterPic from '../images/footers.svg'

function Footer() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }      
      }; 
      const recipient = 'utdwwc@gmail.com';
      const mailtoLink = `mailto:${recipient}`;
      return (
      <section className={styles.bottomBar} >
        <div className={styles.bigContain}>
            <a href={mailtoLink} className={styles.contact} >
                <p className={styles.contactText}>Contact Us</p>
            </a>
            <a href={mailtoLink} className={styles.contact2} >
                <p className={styles.contactText2}>Contact Us</p>
            </a>
            <div className={styles.textField} >
            <nav className={styles.sectionContainer} >
                <button onClick={() => scrollToSection('header')} className={styles.section}>
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
            </div>
        </div>
        <img src={FooterPic} className={styles.backImage} alt='footer_back' />
      </section>
    );
  }
  
  export default Footer;
  