import React, { useEffect } from 'react';
import './App.css';
import './styles/global.css';
import About from './components/AboutUs';
import Features from './components/Features';
import ComingSoon from './components/ComingSoon';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="App">
      <About />
      <Features />
      <ComingSoon />
    </div>
  );
}

export default App;
