import styles from './css/values.module.css';

function Values() {
    return (
        <>
        <div className={styles.valuesContainer}>
            <div className={styles.heading} >
                What We Offer
            </div>
            <div className={styles.subHeading} >
                Our services are centered around mentorship, personal and professional growth.
            </div>
            <img src='valuesBack.svg' alt='valuesVector' className={styles.vector} />
        </div>
    </>
    );
  }
  
  export default Values;
  