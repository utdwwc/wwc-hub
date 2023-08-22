import styles from '../css/footer.module.css';

function Footer() {
    return (
      <section className={styles.bottomBar} >
        <img src='footers.svg' className={styles.backImage} alt='footer_back' />
        <div className={styles.textField} >
        <nav className={styles.sectionContainer} >
            <a href='about' className={styles.section}>
                <h3>About</h3>
            </a>
            <a href='values' className={styles.section}>
                <h3>Values</h3>
            </a>
            <a href='events' className={styles.section}>
                <h3>Events</h3>
            </a>
            <a href='officers' className={styles.section}>
                <h3>Officers</h3>
            </a>
            <a href='partners' className={styles.section}>
                <h3>Partners</h3>
            </a>
        </nav>
        </div>
      </section>
    );
  }
  
  export default Footer;
  