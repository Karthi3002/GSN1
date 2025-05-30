/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/Footer.css'; // optional for styles if you're using custom CSS

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <>
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="/" className="logo d-flex align-items-center">
                <span className="sitename">GSN</span>
              </a>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                <p><strong>Email:</strong> <span>info@example.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <div className="social-links d-flex mt-4">
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>

            {/** Footer Links */}
            <FooterLinks
              title="Useful Links"
              links={['Home', 'About us', 'Services', 'Terms of service', 'Privacy policy']}
            />
            <FooterLinks
              title="Our Services"
              links={['Web Design', 'Web Development', 'Product Management', 'Marketing', 'Graphic Design']}
            />
            <FooterLinks
              title="Hic solutasetp"
              links={['Molestiae accusamus iure', 'Excepturi dignissimos', 'Suscipit distinctio', 'Dilecta', 'Sit quas consectetur']}
            />
            <FooterLinks
              title="Nobis illum"
              links={['Ipsam', 'Laudantium dolorum', 'Dinera', 'Trodelas', 'Flexo']}
            />
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">iLanding</strong> <span>All Rights Reserved</span></p>
          <div className="credits">
          </div>
        </div>
      </footer>

      <button
        href="#"
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
        onClick={scrollToTop}
      >
        <BiArrowToTop size={24} />
      </button>
    </>
  );
};

const FooterLinks = ({ title, links }) => (
  <div className="col-lg-2 col-md-3 footer-links">
    <h4>{title}</h4>
    <ul>
      {links.map((link, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <li key={index}><a href="#">{link}</a></li>
      ))}
    </ul>
  </div>
);

export default Footer;
