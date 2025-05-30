import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Hero.css"; // Optional for any custom styling

import illustration from "../assets/img/illustration-1.webp";
import avatar1 from "../assets/img/avatar-1.webp";
import avatar2 from "../assets/img/avatar-2.webp";
import avatar3 from "../assets/img/avatar-3.webp";
import avatar4 from "../assets/img/avatar-4.webp";
import avatar5 from "../assets/img/avatar-5.webp";

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
              <div className="company-badge mb-4">
                <i className="bi bi-gear-fill me-2"></i>
                Elevating Business. Empowering Spirit.
              </div>

              <h1 className="mb-4">
                Welcome to<br />
                <span className="gold-text">Global Success Network</span><br />
                <span className="accent-text">Where AI Meets Conscious Collaboration</span>
              </h1>

              <p className="mb-4 mb-md-5">
                GSN blends powerful business networking with AI-driven intelligence and a spiritually aligned vision.
                Unlock smart referrals, purposeful connections, and transformational growth.
              </p>

              <div className="hero-buttons">
                <a href="#about" className="btn btn-primary me-0 me-sm-2 mx-1">Get Started</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image" data-aos="zoom-out" data-aos-delay="300">
              <img src={illustration} alt="Hero" className="img-fluid" />

              <div className="customers-badge">
                <div className="customer-avatars">
                  <img src={avatar1} alt="Customer 1" className="avatar" />
                  <img src={avatar2} alt="Customer 2" className="avatar" />
                  <img src={avatar3} alt="Customer 3" className="avatar" />
                  <img src={avatar4} alt="Customer 4" className="avatar" />
                  <img src={avatar5} alt="Customer 5" className="avatar" />
                  <span className="avatar more">150+</span>
                </div>
                <p className="mb-0 mt-2">150+ empowered businesses growing together with GSN</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row stats-row gy-4 mt-5" data-aos="fade-up" data-aos-delay="500">
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-people"></i>
              </div>
              <div className="stat-content">
                <h4>150+ Members</h4>
                <p className="mb-0">Across multiple industries</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <div className="stat-content">
                <h4>25+ Businesses</h4>
                <p className="mb-0">Actively engaged in GSN</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div className="stat-content">
                <h4>120+ Referrals</h4>
                <p className="mb-0">Exchanged in early weeks</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-lightbulb"></i>
              </div>
              <div className="stat-content">
                <h4>AI-Driven Growth</h4>
                <p className="mb-0">smart matchmaking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
