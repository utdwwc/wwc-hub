import styles from '../css/events.module.css';
import backPic from '../images/eventsBack.svg';
import CardCarousel from '../components/carousel';

//Pictures
import s25Kickoff from '../images/events/s25Kickoff.png';

const cardData = [
    {
        title:'Spring 2025 Kickoff',
        date: '2025-02-04',
        subtitle:'7:15 PM @ SCI 2.230',
        picture: s25Kickoff,
        startTime:'19:15',
        endTime:'20:15',
        location:'SCI 2.230',
    }
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
  