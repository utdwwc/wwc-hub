import styles from '../css/events.module.css';
import backPic from '../images/eventsBack.svg';
import CardCarousel from '../components/carousel';

//Pictures
import kickOffPostf23 from '../images/events/pastEvents/kickoffPost.jpeg';
import hubSpotf23 from '../images/events/pastEvents/Hubspot.png';
import SMf23 from '../images/events/pastEvents/SMf23.png';
import CraftC1f23 from '../images/events/pastEvents/CraftC1f23.png';
import gsNetworkf23 from '../images/events/pastEvents/gsNetworkf23.png';
import Crederaf23 from '../images/events/pastEvents/Credera.png';
import s24Kickoff from '../images/events/pastEvents/s24kickoff.png';
import HubspotEvent from '../images/events/pastEvents/hubspot2.png';
import Epsilon from '../images/events/pastEvents/epsilon.png';
import SMs24 from '../images/events/pastEvents/SMs24.png';
import SWECollab from '../images/events/pastEvents/SWECollab.png';
import c1event from '../images/events/pastEvents/c1event.png';
import JPMCOfficeTour from '../images/events/pastEvents/JPMCOfficeTour.png';
import SFOfficeTour from '../images/events/pastEvents/SFOfficeTour.png';
import FinalSocial from '../images/events/pastEvents/FinalSocial.png';
import f24Kickoff from '../images/events/f24Kickoff.png';
import geico from '../images/events/geico.png';
import headshots from '../images/events/headshots.png';
import SM24 from '../images/events/SM24.png';
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
    },
    {
        title:'Speed Mentoring',
        date: '2024-09-17',
        subtitle:'7:00 PM @ Blackstone',
        picture: SM24,
        startTime:'19:00',
        endTime:'20:00',
        location:'Blackstone Launchpad',
    },
    {
        title:'Professional Headshots',
        date: '2024-08-27',
        subtitle:'7:00 PM @ Blackstone',
        picture: headshots,
        startTime:'19:00',
        endTime:'20:00',
        location:'Blackstone Launchpad',
    },
    {
        title:'Geico Event',
        date: '2024-08-27',
        subtitle:'7:00 PM @ Blackstone',
        picture: geico,
        startTime:'19:00',
        endTime:'20:00',
        location:'Blackstone Launchpad',
    },
    {
        title:'Fall 2024 Kickoff',
        date: '2024-08-27',
        subtitle:'7:00 PM @ Blackstone',
        picture: f24Kickoff,
        startTime:'19:00',
        endTime:'20:00',
        location:'Blackstone Launchpad',
    },
    {
        title:'Final De-Stress Social',
        date: '2024-01-23',
        subtitle:'7:00 PM @ SCI 2.230',
        picture: FinalSocial,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 2.230',
    },
    {
        title:'Salesforce Office Tour',
        date: '2024-01-23',
        subtitle:'2:00 PM @ Salesforce',
        picture: SFOfficeTour,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 2.230',
    },
    {
        title:'JPMC Office Tour',
        date: '2024-01-23',
        subtitle:'2:00 PM @ JPMC',
        picture: JPMCOfficeTour,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 2.230',
    },
    {
        title:'Perfect Your Elevator Pitch',
        date: '2024-01-23',
        subtitle:'7:00 PM @ SCI 3.270',
        picture: c1event,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 2.230',
    },
    {
        title:'Systems Design Prep',
        date: '2024-01-23',
        subtitle:'8:00 PM @ SLC 2.304',
        picture: SWECollab,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 2.230',
    },
    {
        title:'Speed Mentoring',
        date: '2024-01-23',
        subtitle:'7:00 PM @ CRA 12.120',
        picture: SMs24,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 2.230',
    },
    {
        title:'Epsilon and Generative AI',
        date: '2024-01-23',
        subtitle:'7:00 PM @ GR 4.204',
        picture: Epsilon,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 2.230',
    },
    {
        title:'HubSpot Event',
        date: '2024-01-23',
        subtitle:'7:00 PM @ Blackstone',
        picture: HubspotEvent,
        startTime:'19:00',
        endTime:'20:00',
        location:'SCI 2.230',
    },
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
  