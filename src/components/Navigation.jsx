import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Link as ScrollLink, scrollSpy } from 'react-scroll';
import '../styles/Navigation.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const mobileToggleRef = useRef();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    // Initialize scrollSpy (only needed on homepage)
    if (isHome) {
      scrollSpy.update();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, [isHome]);

  useEffect(() => {
    document.body.classList.toggle('scrolled', isScrolled);
  }, [isScrolled]);

  const toggleMobileNav = () => {
    setMobileNavActive(prev => !prev);
    document.body.classList.toggle('mobile-nav-active');
  };

  const handleNavLinkClick = () => {
    if (mobileNavActive) toggleMobileNav();
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'services', label: 'Services' },
    { id: 'joinus', label: 'Join Us' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0" onClick={handleNavLinkClick}>
          <h1 className="sitename">GSN</h1>
        </Link>

        <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-open' : ''}`}>
          <ul>
            {navItems.map(item =>
              isHome ? (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    hashSpy={true}
                    activeClass="active"
                    onClick={handleNavLinkClick}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ) : (
                <li key={item.id}>
                  <Link
                    to="/"
                    state={{ scrollTo: item.id }}
                    onClick={handleNavLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
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
