import styles from '../css/team.module.css';
import Header  from '../images/teamHeader.svg';
import Aishwarya from '../images/team/aishwarya.png';
function Team() {
    return (
      <>
        <div className={styles.position} >
        <div className={styles.gridContainer}>
            <div className={styles.row} >
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='logo' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Name</div>
                        <div>Position</div>
                    </div>
                </div>
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='logo' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Name</div>
                        <div>Position</div>
                    </div>
                </div>
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='logo' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Name</div>
                        <div>Position</div>
                    </div>
                </div>
            </div>
            <div className={styles.row} >
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='logo' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Name</div>
                        <div>Position</div>
                    </div>
                </div>
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='logo' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Name</div>
                        <div>Position</div>
                    </div>
                </div>
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='logo' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Name</div>
                        <div>Position</div>
                    </div>
                </div>
            </div>
            <div className={styles.row} >
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='logo' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Name</div>
                        <div>Position</div>
                    </div>
                </div>
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='logo' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Name</div>
                        <div>Position</div>
                    </div>
                </div>
                <div>
                    <img src={Aishwarya} className={styles.cell} alt='logo' ></img>
                    <div className={styles.content}>
                        <div className={styles.name}>Name</div>
                        <div>Position</div>
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
  