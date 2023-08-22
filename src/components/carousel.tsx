import React, { useState } from 'react';
import Card from '../components/card';
import styles from '../css/carousel.module.css';

interface CardProps {
  title: string;
  date: string;
  subtitle: string;
  picture: string;
  startTime: string;
  endTime: string;
  location: string;
}

interface CarouselProps {
  cards: CardProps[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <>
    <div className={styles.arrows}>
      <button className={styles.leftArrow} onClick={goToPrevSlide}></button>
      <button className={styles.rightArrow} onClick={goToNextSlide}></button>
    </div>
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselSlide}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <Card
                title={card.title}
                date={card.date}
                subtitle={card.subtitle}
                picture={card.picture}
                startTime={card.startTime}
                endTime={card.endTime}
                location={card.location}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Carousel;
