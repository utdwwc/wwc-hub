import styles from '../css/events.module.css';
import backPic from '../images/eventsBack.svg';
import CardCarousel from '../components/carousel';

//Pictures
import s25Kickoff from '../images/events/s25Kickoff.png';
import s25HubspotAssessment from '../images/events/s25HubspotAssessment.png';
import s25MicrosoftDiaries from '../images/events/s25MicrosoftDiaries.png';
import s25ResumeWkshp from '../images/events/s25ResumeWkshp.png';
import s25SpeedMentoring from '../images/events/s25SpeedMentoring.png';
import s25SpringSocial from '../images/events/s25SpringSocial.png';
import s25CapitalOneCasing from '../images/events/s25CapitalOneCasing.png';

//most recent events at top
const cardData = [
    {
        title:'Casing with Capital One',
        date: '2025-03-26',
        subtitle:'7:00 PM @ SCI 3.320',
        picture: s25CapitalOneCasing,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 3.320',
    },
    {
        title:'Spring 2025 Social',
        date: '2025-03-11',
        subtitle:'7:00 PM @ SCI 2.230',
        picture: s25SpringSocial,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 2.230',
    },
    {
        title:'Speed Mentoring',
        date: '2025-03-05',
        subtitle:'7:00 PM @ Callier',
        picture: s25SpeedMentoring,
        startTime:'19:00',
        endTime:'20:30',
        location:'Callier',
    },
    {
        title:'Resume + Application Workshop',
        date: '2025-02-25',
        subtitle:'7:00 PM @ SCI 3.260',
        picture: s25ResumeWkshp,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 3.260',
    },
    {
        title:'Microsoft PM Diaries: From Ideas to Impact',
        date: '2025-02-19',
        subtitle:'7:00 PM @ SLC 2.302',
        picture: s25MicrosoftDiaries,
        startTime:'19:00',
        endTime:'20:00',
        location:'SLC 2.302',
    },
    {
        title:'Crushing Your Coding Assessment with Hubspot',
        date: '2025-02-11',
        subtitle:'7:00 PM @ SCI 3.260',
        picture: s25HubspotAssessment,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 3.260',
    },
    {
        title:'Spring 2025 Kickoff',
        date: '2025-02-04',
        subtitle:'7:15 PM @ SCI 2.230',
        picture: s25Kickoff,
        startTime:'19:15',
        endTime:'20:15',
        location:'SCI 2.230',
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
  