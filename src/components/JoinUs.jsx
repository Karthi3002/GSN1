/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/JoinUs.css'; // Optional: use your own CSS

const JoinUs = () => {
  return (
    <section id="joinus" className="pricing section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Join Us</h2>
        <p>
          Be a part of GSN and contribute to a powerful network driven by growth, innovation, and purpose.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 justify-content-center">
          {/* Collaborate */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing-card">
              <h3>Collaborate With Us</h3>
              <p className="description">
                Partner with GSN to co-host events, develop innovative programs, and create meaningful business connections.
              </p>
              <ul className="features-list">
                <li><i className="bi bi-check-circle-fill"></i> Event co-hosting opportunities</li>
                <li><i className="bi bi-check-circle-fill"></i> Joint venture proposals</li>
                <li><i className="bi bi-check-circle-fill"></i> Cross-promotion support</li>
              </ul>
              <a href="#" className="btn btn-primary">
                Collaborate Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Become a Speaker */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="pricing-card popular">
              <div className="popular-badge">Inspire Others</div>
              <h3>Become a Speaker</h3>
              <p className="description">
                Share your knowledge and expertise by speaking at GSN events and inspiring professionals across industries.
              </p>
              <ul className="features-list">
                <li><i className="bi bi-check-circle-fill"></i> Speak at global events</li>
                <li><i className="bi bi-check-circle-fill"></i> Get featured on our platform</li>
                <li><i className="bi bi-check-circle-fill"></i> Inspire the next generation</li>
              </ul>
              <a href="#" className="btn btn-light">
                Apply to Speak <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Volunteer */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="pricing-card">
              <h3>Join as a Volunteer</h3>
              <p className="description">
                Support our mission by contributing your time and skills to help organize events and manage GSN initiatives.
              </p>
              <ul className="features-list">
                <li><i className="bi bi-check-circle-fill"></i> Be part of the organizing team</li>
                <li><i className="bi bi-check-circle-fill"></i> Learn through action</li>
                <li><i className="bi bi-check-circle-fill"></i> Receive official recognition</li>
              </ul>
              <a href="#" className="btn btn-primary">
                Volunteer Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
