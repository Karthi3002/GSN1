import React, { useEffect } from 'react';
import './App.css';
import './styles/global.css';
import About from './components/AboutUs';
import Features from './components/Features';
import ComingSoon from './components/ComingSoon';
import Testimonial from './components/Testimonial';
import Stats from './components/Stats';
import Services from './components/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
    once: true, // Animate only once
    offset: 120,
    duration: 800,
    easing: 'ease-in-out',    // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="App">
      <About />
      <Features />
      <ComingSoon />
      <Testimonial />
      <Stats />
      <Services />
    </div>
  );
}

export default App;
