import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowToTop } from 'react-icons/bi';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">

            {/* Brand & Contact */}
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="#hero" className="logo d-flex align-items-center">
                <span className="sitename">GSN</span>
              </a>
              <div className="footer-contact pt-3">
                <p>Marriot Courtyard Hotel</p>
                <p>564, Anna Salai, Teynampet</p>
                <p>Chennai, Tamil Nadu 600018</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+91 95000 78674</span></p>
                <p><strong>Email:</strong> <span>dcvmrao@gmail.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* Footer Menus */}
            <FooterLinks
              title="Quick Links"
              links={[
                { name: 'Home', href: '#hero' },
                { name: 'About Us', href: '#about' },
                { name: 'Features', href: '#features' },
                { name: 'Services', href: '#services' },
                { name: 'Join GSN', href: '#joinus' }
              ]}
            />

            <FooterLinks
              title="Explore"
              links={[
                { name: 'Blog', href: '#blog' },
                { name: 'Contact', href: '#contact' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'FAQs', href: '#faq' }
              ]}
            />

            <FooterLinks
              title="Legal"
              links={[
                { name: 'Terms of Service', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Cookie Policy', href: '#' },
                { name: 'Code of Conduct', href: '#' }
              ]}
            />
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">GSN</strong>. All Rights Reserved</p>
        </div>
      </footer>

      <button
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
        onClick={scrollToTop}
      >
        <BiArrowToTop size={24} />
      </button>
    </>
  );
};

const FooterLinks = ({ title, links }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="col-lg-2 col-md-4 footer-links">
      <h4>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              onClick={(e) => link.href.startsWith('#') && handleAnchorClick(e, link.href)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
