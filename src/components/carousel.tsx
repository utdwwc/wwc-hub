//import React, { useState } from 'react';
import Card from '../components/card';
import styles from '../css/carousel.module.css';
//import leftArrow from '../images/leftarrow.svg';
//import rightArrow from '../images/rightarrow.svg';



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
  //const [currentIndex, setCurrentIndex] = useState(0);

  // const goToNextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  // };

  // const goToPrevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  // };

  return (
    <>
    <div className={styles.spacing} ></div>
    {/* <div className={styles.arrows}>
        <img src={leftArrow} className={styles.leftArrow} onClick={goToPrevSlide} alt='leftArrow' />
        <img src={rightArrow} className={styles.rightArrow} onClick={goToNextSlide} alt='rightArrow' />
    </div> */}
    <div className={styles.rowContain} >
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
    </> 
    
  );
};

export default Carousel;



// first step: card is done- comment out all the other cards except one and display so that it displays
// make all the card components show in one single row 
//make the arrows functional to sort through the cards



//old: 

// return (
  //   <>
  //   <div className={styles.arrows}>
  //       <img src={leftArrow} className={styles.leftArrow} onClick={goToPrevSlide} alt='leftArrow' />
  //       <img src={rightArrow} className={styles.rightArrow} onClick={goToNextSlide} alt='rightArrow' />
  //   </div>
  //   <div className={styles.carousel}>
  //     <div className={styles.carouselContainer}>
  //       <div
  //         className={styles.carouselSlide}
  //         style={{ transform: `translateX(-${currentIndex * 33}%)` }}
  //       >
  //         {cards.map((card, index) => (
  //           <div key={index} className={styles.card}>
  //             <Card
  //               title={card.title}
  //               date={card.date}
  //               subtitle={card.subtitle}
  //               picture={card.picture}
  //               startTime={card.startTime}
  //               endTime={card.endTime}
  //               location={card.location}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //      </div>
  //    </div>
  //   </> 
  // );