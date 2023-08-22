import React from 'react';
import styles from '../css/cards.module.css';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

interface CardProps {
    title: string;
    date: string;
    subtitle: string;
    picture: string;
    startTime: string;
    endTime: string;
    location: string;
  }
  

const Card: React.FC<CardProps> = ({ title, date, subtitle, picture, startTime, endTime, location }) => {
  return (
    <div className={styles.card}>
      <img className={styles.pic} src={picture} alt={title} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardSubtitle}>{subtitle}</p>
      <div className={styles.addCalendar}>
      <AddToCalendarButton 
                name={title}
                startDate={date}
                startTime={startTime}
                endTime={endTime}
                timeZone="America/Chicago"
                location={location}
                organizer="Women Who Compute|utdwwc@gmail.com"
                options="'Google'"
                buttonStyle="round"
                trigger="click"
                hideIconButton
                hideIconList
                hideIconModal
                buttonsList
                size="10"
                lightMode="light"
                pastDateHandling="disable"
        ></AddToCalendarButton>
      
      </div>
    </div>
  );
};

export default Card;
