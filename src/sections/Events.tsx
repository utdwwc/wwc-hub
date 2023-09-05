import styles from '../css/events.module.css';
import backPic from '../images/eventsBack.svg';
import CardCarousel from '../components/carousel';

//Pictures
import kickOffPost from '../images/events/kickoffPost.jpeg';
import goldmanSachs from '../images/events/goldmanSachs.png';

const cardData = [
    {
        title:'2023 Fall Kickoff',
        date: '2023-15-09',
        subtitle:'7 PM @ SLC 2.304',
        picture: goldmanSachs,
        startTime:'15:00',
        endTime:'16:00',
        location:'SLC 2.304',
    },
    {
        title:'2023 Fall Kickoff',
        date: '2023-15-09',
        subtitle:'7 PM @ SLC 2.304',
        picture: kickOffPost,
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
  