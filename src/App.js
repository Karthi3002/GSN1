// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import './App.css';
import './styles/global.css';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/AboutUs';
import Features from './components/Features';
import ComingSoon from './components/ComingSoon';
import Testimonial from './components/Testimonial';
import Stats from './components/Stats';
import Services from './components/Services';
import JoinUs from './components/JoinUs';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Blog from './components/Blog';
import BlogDetailPage from './pages/BlogDetail'; // 👈 Make sure this file exists
import AllBlogsPage from './pages/AllBlogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {
    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: -70
      });
    }
  }, [location]);
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Features />
      <ComingSoon />
      <Testimonial />
      <Stats />
      <Services />
      <JoinUs />
      <FAQ />
      <CTA />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 120,
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router basename="/GSN1"> {/* 👈 Key part for GitHub Pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/all-blogs" element={<AllBlogsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
