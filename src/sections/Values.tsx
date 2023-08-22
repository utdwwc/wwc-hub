import styles from '../css/values.module.css';
import Value from '../images/valuesBack.svg';

function Values() {
    return (
        <>
        <section className={styles.valuesContainer}>
            <div className={styles.heading} >
                What We Offer
            </div>
            <div className={styles.subHeading} >
                Our services are centered around mentorship, personal and professional growth.
            </div>
            <img src={Value} alt='valuesVector' className={styles.vector} />
        </section>
    </>
    );
  }
  
  export default Values;
  