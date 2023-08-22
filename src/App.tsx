import React from 'react';
import './App.css';
import Navbar from './sections/Navbar';
import Header from './sections/Header';
import Values from './sections/Values';
import Events from './sections/Events';
import Partners from './sections/Partners';
import Footer from './sections/Footer';
import Team from './sections/Team';

function App() {
  return (
    <div className="App">
      < Navbar />
      < Header />
      < Values />
      < Events />
      < Team />
      < Partners />
      < Footer />
    </div>
  );
}

export default App;
