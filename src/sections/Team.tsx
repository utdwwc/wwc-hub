import styles from '../css/team.module.css';
import Header  from '../images/teamHeader.svg';

import Anjana from '../images/team/anjana.png';
import Laasya from '../images/team/laasya.png';
import Alekhyaa from '../images/team/alekhyaa.png';
import Saanya from '../images/team/saanya.png';
import Aishwarya from '../images/team/aishwarya.png';
import Hilary from '../images/team/hilary.png';
import Deeptha from '../images/team/deeptha.jpg';


function Team() {
    return (
      <>
        <div className={styles.topLine}></div>
        <div className={styles.scrollText} >
            Meet The WWC Team
        </div>
        <div className={styles.bottomLine}></div>
        <div className={styles.position} >
        <div className={styles.gridContainer}>
            <div className={styles.row} >
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='Aishwarya' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Muskaan Bansal</div>
                        <div>President</div>
                    </div>
                </div>
                <div>
                    <img src={Alekhyaa} className={styles.cell} alt='Alekhyaa' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Alekhyaa Reddy</div>
                        <div>Treasurer</div>
                    </div>
                </div>
                <div>
                    <img src={Hilary} className={styles.cell} alt='Hilary' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Hilary Nguyen</div>
                        <div>Marketing Designer</div>
                    </div>
                </div>
            </div>
            <div className={styles.row} >
                <div>
                    <img src={Anjana} className={styles.cell} alt='Anjana' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Anjana Bharadwaj</div>
                        <div>Vice President</div>
                    </div>
                </div>
                <div>
                    <img src={Saanya} className={styles.cell} alt='Sanya' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Sanya Vashishth</div>
                        <div>Event Planner</div>
                    </div>
                </div>
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='Aishwarya' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Aishwarya Sudarshan</div>
                        <div>Web Developer</div>
                    </div>
                </div>
            </div>
            <div className={styles.row} >
                <div>
                    <img src={Laasya} className={styles.cell} alt='Lasya' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Lasya Reddy</div>
                        <div>Secretary</div>
                    </div>
                </div>
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='Fatima' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Fatima Khalid</div>
                        <div>Designer</div>
                    </div>
                </div>
                <div>
                    <img src={Deeptha} className={styles.cell} alt='logo' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Deeptha Kadiam</div>
                        <div>Marketing Chair</div>
                    </div>
                </div>
            </div>
        </div>
        <img src={Header} className={styles.header} alt='header' />
        </div>
      </>
    );
  }
  
  export default Team;
  