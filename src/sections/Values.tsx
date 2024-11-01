import styles from '../css/values.module.css';
import Value from '../images/valuesBack.svg';
import Mentoring from '../images/values/mentoring.svg';
import Mentoring2 from '../images/values/mentoring2.svg';
import Workshops from '../images/values/workshops.svg';
import Workshops2 from '../images/values/workshops2.svg';
import Career from '../images/values/career.svg';
import Career2 from '../images/values/career2.svg';
import WeHack from '../images/values/wehack.svg';
import WeHack2 from '../images/values/wehack2.svg';

function Values() {
    return (
        <>
        <section className={styles.valuesContainer}>
            <img src={Value} alt='valuesVector' className={styles.vector} />
            <div className={styles.heading} >
                What We Offer
            </div>
            <div className={styles.subHeading} >
                Our services are centered around mentorship, personal, and professional growth.
            </div>
            <div className={styles.cardContainer2} >
                <div className={styles.headingSmall} >
                    What We Offer
                </div>
                <div className={styles.subHeadingSmall} >
                    Our services are centered around mentorship, personal, and professional growth.
                </div>
                <div className={styles.topLeftSmall}>
                        <div className={styles.titleSmall}>
                            Speed Mentoring
                        </div>
                        <div className={styles.descriptionSmall} >
                            Join our networking event armed with your resume, blazer, and elevator pitch to engage with Dallas' top engineers and recruiters for securing high-profile internships and jobs.
                        </div>
                        <img src={Mentoring2} alt='mentoring' />
                </div>
                <div className={styles.bottomLeftSmall}>
                        <div className={styles.titleSmall}>
                            Technical Workshops
                        </div>
                        <div className={styles.descriptionSmall} >
                            Through our technical workshops, led by industry engineers, we enhance students' programming skills for better career prospects.
                        </div>
                        <img src={Workshops2} className={styles.workshops2} alt='workshops' />
                </div>
                <div className={styles.topRightSmall}>
                        <div className={styles.titleSmall}>
                            Career Talks
                        </div>
                        <div className={styles.descriptionSmall} >
                            Explore the corporate engineering world through our career talks and the nature of work in diverse companies.
                        </div>
                        <img src={Career2} className={styles.career2} alt='career' />
                </div>
                <div className={styles.bottomRightSmall}>
                        <div className={styles.titleSmall}>
                            WeHack
                        </div>
                        <div className={styles.descriptionSmall} >
                        WeHack at UTD: Empowering underrepresented tech innovators to build skills and solve complex problems through our women and non-binary focused hackathon.
                        </div>
                        <img src={WeHack2} className={styles.wehack2} alt='WeHack' />
                </div>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.column}>
                    <div className={styles.topLeft}>
                        <div className={styles.title}>
                            Speed Mentoring
                        </div>
                        <div className={styles.description} >
                            Join our networking event armed with your resume, blazer, and elevator pitch to engage with Dallas' top engineers and recruiters for securing high-profile internships and jobs.
                        </div>
                        <img src={Mentoring} alt='mentoring' />
                    </div>
                    <div className={styles.bottomLeft}>
                        <img src={Workshops} className={styles.workshops} alt='workshops' />
                        <div className={styles.title2}>
                            Technical Workshops
                        </div>
                        <div className={styles.description2} >
                            Through our technical workshops, led by industry engineers, we enhance students' programming skills for better career prospects.
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.topRight}>
                        <img src={Career} className={styles.career} alt='career' />
                        <div className={styles.title3}>
                            Career Talks
                        </div>
                        <div className={styles.description3} >
                            Explore the corporate engineering world through our career talks and the nature of work in diverse companies.
                        </div>
                    </div>
                    <div className={styles.bottomRight}>
                        <img src={WeHack} className={styles.hack} alt='WeHack' />
                        <div className={styles.title4}>
                            WeHack
                        </div>
                        <div className={styles.description4} >
                        WeHack at UTD: Empowering underrepresented tech innovators to build skills and solve complex problems through our women and non-binary focused hackathon.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
  }
  
  export default Values;
  