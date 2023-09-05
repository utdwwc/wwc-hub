import styles from '../css/team.module.css';
import Header  from '../images/teamHeader.svg';
import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import Email from '../images/email.png';

import Muskaan from '../images/team/muskaan.png';
import Anjana from '../images/team/anjana.png';
import Laasya from '../images/team/laasya.png';
import Alekhyaa from '../images/team/alekhyaa.png';
import Saanya from '../images/team/saanya.png';
import Aishwarya from '../images/team/aishwarya.png';
import Hilary from '../images/team/hilary.png';
import Deeptha from '../images/team/deeptha.jpg';
import Fatima from '../images/team/fatima.png';


function Team() {
    return (
      <>
        <div className={styles.header2}>
            <div className={styles.headerType1} >
                <div className={styles.topLine}></div>
                <div className={styles.scrollText} >
                    Meet The WWC Team
                </div>
                <div className={styles.bottomLine}></div>
            </div>
            <div className={styles.headerType2} >
                <div className={styles.topLine2}></div>
                <div className={styles.scrollText2} >
                    Meet The WWC Team 
                </div>
                <div className={styles.bottomLine2}></div>
            </div>
        <div className={styles.position} >
        <div className={styles.gridContainer}>
            <div className={styles.row} >
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Muskaan} className={styles.cell} alt='Muskaan' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Muskaan Bansal</div>
                            <div className={styles.title}>President</div>
                        </div>
                </div>
                 <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Alekhyaa} className={styles.cell} alt='Alekhyaa' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Alekhyaa Reddy</div>
                            <div className={styles.title}>Treasurer</div>
                        </div>
                </div>
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Hilary} className={styles.cell} alt='Hilary' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='https://hilarynguyen.vercel.app/'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='https://www.linkedin.com/in/hilary-nguyen/'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='mailto:nguyenhilary0907@gmail.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Hilary Nguyen</div>
                            <div className={styles.title}>Marketing Designer</div>
                        </div>
                </div>
            </div>
            <div className={styles.row} >
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Anjana} className={styles.cell} alt='Anjana' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Anjana Bharadwaj</div>
                            <div className={styles.title}>Vice President</div>
                        </div>
                </div>
                 <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Saanya} className={styles.cell} alt='Sanya' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Sanya Vashishth</div>
                            <div className={styles.title}>Event Planner</div>
                        </div>
                </div>
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Aishwarya} className={styles.cell} alt='Aishwarya' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Aishwarya Sudarshan</div>
                            <div className={styles.title}>Web Developer</div>
                        </div>
                </div>
            </div>
            <div className={styles.row} >
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Laasya} className={styles.cell} alt='Lasya' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Lasya Reddy</div>
                            <div className={styles.title}>Secretary</div>
                        </div>
                </div>
                 <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Fatima} className={styles.cell} alt='Fatima' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Fatima Khalid</div>
                            <div className={styles.title}>Designer</div>
                        </div>
                </div>
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Deeptha} className={styles.cell} alt='Deeptha' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Deeptha Kadiam</div>
                            <div className={styles.title}>Marketing Chair</div>
                        </div>
                </div>
            </div>
        </div>
        <div className={styles.gridContainer2}>
                <div className={styles.row2} >
                    <div>
                        <div className={styles.person}>
                            <div className={styles.left} >
                                <div>
                                    <img src={Muskaan} className={styles.cell} alt='Muskaan' ></img>
                                </div>
                            </div>
                            <div className={styles.iconContainer} >
                                <a href='google.com'>
                                    <img src={Github} className={styles.github} alt='github' />
                                </a>
                                <a href='google.com'>
                                    <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                                </a>
                                <a href='google.com'>
                                    <img src={Email} className={styles.email} alt='email' />
                                </a>
                            </div>
                        </div>
                            <div className={styles.content}>
                                <div className={styles.name}>Muskaan Bansal</div>
                                <div className={styles.title}>President</div>
                            </div>
                    </div>
                    <div>
                        <div className={styles.person}>
                            <div className={styles.left} >
                                <div>
                                    <img src={Alekhyaa} className={styles.cell} alt='Alekhyaa' ></img>
                                </div>
                            </div>
                            <div className={styles.iconContainer} >
                                <a href='google.com'>
                                    <img src={Github} className={styles.github} alt='github' />
                                </a>
                                <a href='google.com'>
                                    <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                                </a>
                                <a href='google.com'>
                                    <img src={Email} className={styles.email} alt='email' />
                                </a>
                            </div>
                        </div>
                            <div className={styles.content}>
                                <div className={styles.name}>Alekhyaa Reddy</div>
                                <div className={styles.title}>Treasurer</div>
                            </div>
                    </div>
                    <div>
                        <div className={styles.person}>
                            <div className={styles.left} >
                                <div>
                                    <img src={Hilary} className={styles.cell} alt='Hilary' ></img>
                                </div>
                            </div>
                            <div className={styles.iconContainer} >
                                <a href='https://hilarynguyen.vercel.app/'>
                                    <img src={Github} className={styles.github} alt='github' />
                                </a>
                                <a href='https://www.linkedin.com/in/hilary-nguyen/'>
                                    <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                                </a>
                                <a href='mailto:nguyenhilary0907@gmail.com'>
                                    <img src={Email} className={styles.email} alt='email' />
                                </a>
                            </div>
                        </div>
                            <div className={styles.content}>
                                <div className={styles.name}>Hilary Nguyen</div>
                                <div className={styles.title}>Marketing Designer</div>
                            </div>
                    </div>
                </div>
                <div className={styles.row2} >
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Anjana} className={styles.cell} alt='Anjana' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Anjana Bharadwaj</div>
                            <div className={styles.title}>Vice President</div>
                        </div>
                </div>
                 <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Saanya} className={styles.cell} alt='Sanya' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Sanya Vashishth</div>
                            <div className={styles.title}>Event Planner</div>
                        </div>
                </div>
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Aishwarya} className={styles.cell} alt='Aishwarya' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Aishwarya Sudarshan</div>
                            <div className={styles.title}>Web Developer</div>
                        </div>
                </div>
                </div>
                <div className={styles.row2} >
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Laasya} className={styles.cell} alt='Lasya' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Lasya Reddy</div>
                            <div className={styles.title}>Secretary</div>
                        </div>
                </div>
                 <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Fatima} className={styles.cell} alt='Fatima' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Fatima Khalid</div>
                            <div className={styles.title}>Designer</div>
                        </div>
                </div>
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Deeptha} className={styles.cell} alt='Deeptha' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='google.com'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Deeptha Kadiam</div>
                            <div className={styles.title}>Marketing Chair</div>
                        </div>
                </div>
                </div>
        </div>
        <img src={Header} className={styles.header} alt='header' />
        </div>
      </div>
      </>
    );
  }
  
  export default Team;
  