import React, { useEffect, useState, useRef } from 'react';
import '../styles/Navigation.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const mobileToggleRef = useRef();

  // Scroll effect to add class to body
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      updateActiveNavLink();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  // Add or remove .scrolled class to body
  useEffect(() => {
    if (isScrolled) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  }, [isScrolled]);

  // Handle scrollspy for active nav link
  const updateActiveNavLink = () => {
    const links = document.querySelectorAll('.navmenu a');
    const scrollPosition = window.scrollY + 200;

    links.forEach(link => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;

      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition <= section.offsetTop + section.offsetHeight
      ) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  };

  // Handle mobile nav toggle
  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
    document.body.classList.toggle('mobile-nav-active');
  };

  // Auto close mobile nav when a link is clicked
  const handleNavLinkClick = () => {
    if (mobileNavActive) {
      toggleMobileNav();
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">GSN</h1>
        </a>

        <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-open' : ''}`}>
          <ul>
            <li><a href="#hero" className="active" onClick={handleNavLinkClick}>Home</a></li>
            <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
            <li><a href="#features" onClick={handleNavLinkClick}>Features</a></li>
            <li><a href="#services" onClick={handleNavLinkClick}>Services</a></li>
            <li><a href="#joinus" onClick={handleNavLinkClick}>Join Us</a></li>
            <li><a href="#blog" onClick={handleNavLinkClick}>Blog</a></li>
            <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
          </ul>

          <i
            ref={mobileToggleRef}
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <a className="btn-getstarted" href="#contact">Get Started</a>
      </div>
    </header>
  );
};

export default Navigation;
