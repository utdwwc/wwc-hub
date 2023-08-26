import styles from '../css/events.module.css';
import backPic from '../images/eventsBack.svg';
import CardCarousel from '../components/carousel';
import fillerInsta from '../images/fillerInsta.svg';


const cardData = [
    {
        
        title:'Pulling an All Nighter',
        date: '2023-14-08',
        subtitle:'9 PM @ ECSW',
        picture: fillerInsta,
        startTime:'12:00',
        endTime:'13:00',
        location:'ECSW',
    },
    {
       
        title:'Pulling an All Nighter',
        date: '2023-15-08',
        subtitle:'10 PM @ ECSW',
        picture: fillerInsta,
        startTime:'13:00',
        endTime:'14:00',
        location:'ECSS',
    },
    {
        
        title:'Pulling an All Nighter',
        date: '2023-16-08',
        subtitle:'11 PM @ ECSW',
        picture: fillerInsta,
        startTime:'11:00',
        endTime:'14:00',
        location:'ECSN',
    },
    {
   
        title:'Pulling an All Nighter',
        date: '2023-16-08',
        subtitle:'12 PM @ ECSW',
        picture: fillerInsta,
        startTime:'12:00',
        endTime:'14:00',
        location:'ECSN',
    },
];

function Events() {
    return (
        <>
            <div className={styles.eventPosition} >
                <div>
                    <div className={styles.headerTitle}>Our Upcoming Events</div>
                    <div className={styles.headerSubtitle}>
                        Check out all of our upcoming events
                    </div>
                    <div className={styles.carousel} >
                        <div className={styles.actionCarousel} >
                            <CardCarousel cards={cardData} />
                        </div>
                    </div>
                </div>
                <img className={styles.backBlur} src={backPic} alt="Back" />
            </div>
        </>
    );
}
  export default Events;
  