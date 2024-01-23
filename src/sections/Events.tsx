import styles from '../css/events.module.css';
import backPic from '../images/eventsBack.svg';
import CardCarousel from '../components/carousel';

//Pictures
import kickOffPostf23 from '../images/events/kickoffPost.jpeg';
import hubSpotf23 from '../images/events/Hubspot.png';
import SMf23 from '../images/events/SMf23.png';
import CraftC1f23 from '../images/events/CraftC1f23.png';
import gsNetworkf23 from '../images/events/gsNetworkf23.png';
import Crederaf23 from '../images/events/Credera.png';
import s24Kickoff from '../images/events/s24kickoff.png';

const cardData = [
    {
        title:'WWC Kickoff',
        date: '2024-01-23',
        subtitle:'7:00 PM @ SCI 2.230',
        picture: s24Kickoff,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 2.230',
    },
    {
        title:'Case Study Workshop',
        date: '2023-11-08',
        subtitle:'6:45 PM @ ECSW 2.325',
        picture: Crederaf23,
        startTime:'18:45',
        endTime:'20:00',
        location:'ECSW 2.325',
    },
    {
        title:'Terrace Networking Event',
        date: '2023-10-25',
        subtitle:'6:30 PM @ ECSW Goldman Terrace',
        picture: gsNetworkf23,
        startTime:'18:30',
        endTime:'19:30',
        location:'Goldman Sachs Terrace ECSW 2nd Floor',
    },
    {
        title:'Speed Mentoring',
        date: '2023-10-03',
        subtitle:'7 PM @ Blackstone',
        picture: SMf23,
        startTime:'19:00',
        endTime:'20:30',
        location:'Blackstone Launchpad',
    },
    {
        title:'Crafting with Capital One',
        date: '2023-09-27',
        subtitle:'7 PM @ SSA 12.471',
        picture: CraftC1f23,
        startTime:'19:00',
        endTime:'20:30',
        location:'SSA 12.471',
    },
    {
        title:'Build Your Resume',
        date: '2023-09-20',
        subtitle:'7 PM @ Blackstone',
        picture: hubSpotf23,
        startTime:'19:00',
        endTime:'20:00',
        location:'Blackstone Launchpad',
    },
    {
        title:'2023 Fall Kickoff',
        date: '2023-09-07',
        subtitle:'7 PM @ SLC 2.304',
        picture: kickOffPostf23,
        startTime:'15:00',
        endTime:'16:00',
        location:'SLC 2.304',
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
  