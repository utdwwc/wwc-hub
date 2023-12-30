import React, { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Header from './sections/Header';
import Values from './sections/Values';
import Events from './sections/Events';
import Partners from './sections/Partners';
import Footer from './sections/Footer';
import Team from './sections/Team';
import { useState } from 'react';


  const App = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;

    if (cursor) {
      cursor.style.left = `${cursorPosition.x}px`;
      cursor.style.top = `${cursorPosition.y}px`;
    }
  }, [cursorPosition]);

  
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <div className="App" onMouseMove={handleMouseMove}>
    <div className="custom-cursor"></div>
        < Navbar />
        <div id="about">
          < Header />
        </div>
        <div id="values">
          < Values />
        </div>
        <div id="events">
          < Events />
        </div>
        <div id="officers">
          < Team />
        </div>
        <div id="partners">
          < Partners />
        </div> 
         < Footer />
    </div>
    </>
  );
}

export default App;
