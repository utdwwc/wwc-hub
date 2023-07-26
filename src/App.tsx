import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './header';
import Values from './Values';
import Events from './Events';
import Partners from './Partners';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      < Navbar />
      < Header />
      < Values />
      < Events />
      < Partners />
      < Footer />
    </div>
  );
}

export default App;
