import styles from '../css/team.module.css';
import Header  from '../images/teamHeader.svg';
import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import Email from '../images/email.png';

import Aishwarya from '../images/team/aishwarya.jpg';
import Nihita from '../images/team/nihita.jpg';
import Dheeptha from '../images/team/dheeptha.jpg';
import Esha from '../images/team/esha.jpg';
import Julia from '../images/team/julia.jpg';
import Aarya from '../images/team/aarya.jpg';
import Waverly from '../images/team/waverly.jpg';
import Nandini from '../images/team/nandini.jpg';
import Adeline from '../images/team/adeline.jpg';
import Khyati from '../images/team/khyati.jpg';
import Sameera from '../images/team/sameera.jpg';


function Team() {
    const team = [
        {
            name: "Aishwarya Sudarshan",
            position: "President",
            image: Aishwarya,
            github: "https://github.com/AishwaryaSudarshan",
            linkedin: "https://linkedin.com/in/aishwarya-sudarshan",
            email: "mailto:aishwaryasudarshan18@gmail.com",
        },
        {
            name: "Dheeptha Kadiam",
            position: "Vice President",
            image: Dheeptha,
            github: "https://github.com/dheepsk",
            linkedin: "https://linkedin.com/in/dheeptha-kadiam",
            email: "mailto:dheeps0702@gmail.com",
        },
        {
            name: "Waverly Souvannachack",
            position: "Marketing",
            image: Waverly,
            github: "",
            linkedin: "https://linkedin.com/in/wsouvannachack",
            email: "mailto:waverly.souvannachack@gmail.com",
        },
        {
            name: "Nihita Soma",
            position: "Secretary",
            image: Nihita,
            github: "",
            linkedin: "https://linkedin.com/in/nihitasoma",
            email: "mailto:",
        },
        {
            name: "Julia Marie Bacud",
            position: "Backend Developer",
            image: Julia,
            github: "https://github.com/waactics",
            linkedin: "https://linkedin.com/in/julia-marie-bacud-a16b70241",
            email: "mailto:juliabacudswe@gmail.com",
        },
        {
            name: "Aaryaa Moharir",
            position: "Event Planner",
            image: Aarya,
            github: "aaryaamoharir",
            linkedin: "https://linkedin.com/in/aaryaamoharir",
            email: "mailto:aaryaamoharir@gmail.com",
        },
        {
            name: "Adeline Nenzou",
            position: "Event Planner",
            image: Adeline,
            github: "",
            linkedin: "https://linkedin.com/in/adelinenenzou",
            email: "mailto:",
        },
        {
            name: "Esha Gupta",
            position: "Treasurer",
            image: Esha,
            github: "https://google.com",
            linkedin: "https://linkedin.com/in/eshagupta825",
            email: "mailto:eshalagupta@gmail.com",
        },
        {
            name: "Khyati Chandra",
            position: "Designer",
            image: Khyati,
            github: "",
            linkedin: "",
            email: "mailto:",
        },
        {
            name: "Nandini Paidesetty",
            position: "Photographer",
            image: Nandini,
            github: "",
            linkedin: "https://linkedin.com/in/nandini-paidesetty-9b997220a",
            email: "mailto:",
        },
        {
            name: "Sameera Kandalgaonkar",
            position: "UX Designer",
            image: Sameera,
            github: "",
            linkedin: "",
            email: "mailto:sameeraagk883@gmail.com",
        },
    ]; //team array ends here

    return (
        <>
            <div className={styles.header2}>
                <div className={styles.headerType1}>
                    <div className={styles.topLine}></div>
                    <div className={styles.scrollText}>Meet the WWC Team</div>
                    <div className={styles.bottomLine}></div>
                </div>
                <div className={styles.headerType2}>
                    <div className={styles.topLine2}></div>
                    <div className={styles.scrollText2}>Meet the WWC Team</div>
                    <div className={styles.bottomLine2}></div>
                </div>
            </div>

            <div className={styles.position}>

                {/*first grid container*/}
                <div className={styles.gridContainer}>
                    {team.map((officer, index) => (
                        <div key={index} className={styles.row}>
                            <div className={styles.person}>
                                <div className={styles.left}>
                                    <div className={styles.cell}>
                                        <img src={officer.image} alt={officer.name}/>
                                    </div>
                                </div>
                                <div className={styles.iconContainer}>
                                    <a href={officer.github || "#"} target="_blank" rel="noopener noreferrer">
                                        <img src={Github} className={styles.github} alt="github"/>
                                    </a>
                                    <a href={officer.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                                        <img src={Linkedin} className={styles.linkedin} alt="linkedin"/>
                                    </a>
                                    <a href={officer.email || "#"} target="_blank" rel="noopener noreferrer">
                                        <img src={Email} className={styles.email} alt="email"/>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.name}>{officer.name}</div>
                                <div className={styles.title}>{officer.position}</div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/*second grid container*/}
                <div className={styles.gridContainer2}>
                    {team.map((officer, index) => (
                        <div key={index} className={styles.row2}>
                            <div className={styles.person}>
                                <div className={styles.left}>
                                    <div className={styles.cell}>
                                        <img src={officer.image} alt={officer.name}/>
                                    </div>
                                </div>
                                <div className={styles.iconContainer}>
                                    <a href={officer.github || "#"} target="_blank" rel="noopener noreferrer">
                                        <img src={Github} className={styles.github} alt="github"/>
                                    </a>
                                    <a href={officer.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                                        <img src={Linkedin} className={styles.linkedin} alt="linkedin"/>
                                    </a>
                                    <a href={officer.email || "#"} target="_blank" rel="noopener noreferrer">
                                        <img src={Email} className={styles.email} alt="email"/>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.name}>{officer.name}</div>
                                <div className={styles.title}>{officer.position}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    ); // return statement ends here

}; // function ends here



/* old:
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
                                <img src={Julia} className={styles.cell} alt='Julia' ></img>
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
                            <div className={styles.name}>Julia Bacud</div>
                            <div className={styles.title}>Backend Developer</div>
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
                            <div className={styles.name}>Dheeptha Kadiam</div>
                            <div className={styles.title}>Vice President</div>
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
                            <a href='https://www.linkedin.com/in/julia-marie-bacud-a16b70241/'>
                                <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                            </a>
                            <a href='google.com'>
                                <img src={Email} className={styles.email} alt='email' />
                            </a>
                        </div>
                    </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Aarya Moharir</div>
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
                                <img src={Adeline} className={styles.cell} alt='Adeline' ></img>
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
                            <div className={styles.name}>Adeline Nenzou</div>
                            <div className={styles.title}>Event Planner</div>
                        </div>
                </div>
                 <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Khyati} className={styles.cell} alt='Khyati' ></img>
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
                            <div className={styles.name}>Khyati Chandra</div>
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
                                <div className={styles.title}>President</div>
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
                            <div className={styles.name}>Dheeptha Kadiam</div>
                            <div className={styles.title}>Vice President</div>
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
                            <div className={styles.title}>Event Planner</div>
                        </div>
                </div>
                </div>
                <div className={styles.row2} >
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
                                <a href='google.com'>
                                    <img src={Linkedin} className={styles.linkedin} alt='linkedin' />
                                </a>
                                <a href='google.com'>
                                    <img src={Email} className={styles.email} alt='email' />
                                </a>
                            </div>
                        </div>
                            <div className={styles.content}>
                                <div className={styles.name}>Julia Bacud</div>
                                <div className={styles.title}>Backend Developer</div>
                            </div>
                    </div>
                 <div>
                    <div className={styles.person}>
                        <div className={styles.left} >
                            <div>
                                <img src={Adeline} className={styles.cell} alt='Adeline' ></img>
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
                            <div className={styles.name}>Adeline Nenzou</div>
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
                                <img src={Khyati} className={styles.cell} alt='Khyati' ></img>
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
                            <div className={styles.name}>Khyati Chandra</div>
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
*/
  
  export default Team;
  