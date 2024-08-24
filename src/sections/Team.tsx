import styles from '../css/team.module.css';
import Header  from '../images/teamHeader.svg';
import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import Email from '../images/email.png';

import Aishwarya from '../images/team/aishwarya.png';
import Nihita from '../images/team/nihita.png';
import Anjana from '../images/team/anjana.png';
// import Laasya from '../images/team/laasya.png';
// import Alekhyaa from '../images/team/alekhyaa.png';
// import Saanya from '../images/team/saanya.png';
// import Hilary from '../images/team/hilary.png';
// import Deeptha from '../images/team/deeptha.jpg';
import Dheeptha from '../images/team/dheeptha.png';
import Fatima from '../images/team/fatima.png';
import Esha from '../images/team/esha.png';
import Julia from '../images/team/julia.png';
import Aarya from '../images/team/aarya.png';
import Waverly from '../images/team/waverly.png';

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
                            <div className={styles.title}>President</div>
                        </div>
                </div>
                 <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Esha} className={styles.cell} alt='Esha' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='https://www.linkedin.com/in/eshagupta825/'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Esha Gupta</div>
                            <div className={styles.title}>Treasurer</div>
                        </div>
                </div>
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Aarya} className={styles.cell} alt='Aarya' ></img>
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
                            <div className={styles.name}>Aarya Moharir</div>
                            <div className={styles.title}>Backend Developer</div>
                        </div>
                </div>
            </div>
            <div className={styles.row} >
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Aishwarya} className={styles.cell} alt='Aishwarya' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='https://github.com/AishwaryaSudarshan'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='https://www.linkedin.com/in/aishwarya-sudarshan/'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='mailto:aishwaryasudarshan18@gmail.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Aishwarya Sudarshan</div>
                            <div className={styles.title}>Vice President</div>
                        </div>
                </div>
                 <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Julia} className={styles.cell} alt='Julia' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='https://www.linkedin.com/in/julia-marie-bacud-a16b70241/'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Julia Bacud</div>
                            <div className={styles.title}>Event Planner</div>
                        </div>
                </div>
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Nihita} className={styles.cell} alt='Nihita' ></img>
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
                            <div className={styles.name}>Nihita Soma</div>
                            <div className={styles.title}>Secretary</div>
                        </div>
                </div>
            </div>
            <div className={styles.row} >
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Dheeptha} className={styles.cell} alt='Dheeptha' ></img>
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
                            <div className={styles.name}>Dheeptha Kadiam</div>
                            <div className={styles.title}>Event Planner</div>
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
                                <img src={Waverly} className={styles.cell} alt='Waverly' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='https://www.linkedin.com/in/wsouvannachack'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Waverly Souvannachack</div>
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
                                <div className={styles.title}>President</div>
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
                            <a href='https://github.com/AishwaryaSudarshan'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='https://www.linkedin.com/in/aishwarya-sudarshan/'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='mailto:aishwaryasudarshan18@gmail.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Aishwarya Sudarshan</div>
                            <div className={styles.title}>Vice President</div>
                        </div>
                    </div>
                    <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Dheeptha} className={styles.cell} alt='Dheeptha' ></img>
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
                            <div className={styles.name}>Dheeptha Kadiam</div>
                            <div className={styles.title}>Event Planner</div>
                        </div>
                </div>
                </div>
                <div className={styles.row2} >
                <div>
                        <div className={styles.person}>
                            <div className={styles.left} >
                                <div>
                                    <img src={Aarya} className={styles.cell} alt='Aarya' ></img>
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
                                <div className={styles.name}>Aarya Moharir</div>
                                <div className={styles.title}>Backend Developer</div>
                            </div>
                    </div>
                 <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Julia} className={styles.cell} alt='Julia' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='https://www.linkedin.com/in/julia-marie-bacud-a16b70241/'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Julia Bacud</div>
                            <div className={styles.title}>Event Planner</div>
                        </div>
                </div>
                <div>
                        <div className={styles.person}>
                            <div className={styles.left} >
                                <div>
                                    <img src={Esha} className={styles.cell} alt='Esha' ></img>
                                </div>
                            </div>
                            <div className={styles.iconContainer} >
                                <a href='google.com'>
                                    <img src={Github} className={styles.github} alt='github' />
                                </a>
                                <a href='https://www.linkedin.com/in/eshagupta825/'>
                                    <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                                </a>
                                <a href='google.com'>
                                    <img src={Email} className={styles.email} alt='email' />
                                </a>
                            </div>
                        </div>
                            <div className={styles.content}>
                                <div className={styles.name}>Esha Gupta</div>
                                <div className={styles.title}>Treasurer</div>
                            </div>
                    </div>
                </div>
                <div className={styles.row2} >
                <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Nihita} className={styles.cell} alt='Nihita' ></img>
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
                            <div className={styles.name}>Nihita Soma</div>
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
                                <img src={Waverly} className={styles.cell} alt='Waverly' ></img>
                            </div>
                        </div>
                        <div className={styles.iconContainer} >
                            <a href='google.com'>
                                <img src={Github} className={styles.github} alt='github' />
                            </a>
                            <a href='https://www.linkedin.com/in/wsouvannachack'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Waverly Souvannachack</div>
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
  