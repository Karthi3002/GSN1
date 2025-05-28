import React from "react";
import "../styles/AboutUs.css"; // Assuming you have a CSS file for styling
import { BsCheckCircleFill, BsTelephoneFill } from "react-icons/bs";
import aboutMainImg from "../assets/img/about-5.webp";
import aboutSmallImg from "../assets/img/about-2.webp";
import ceoImg from "../assets/img/avatar-1.webp";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
            <span className="about-meta">MORE ABOUT US</span>
            <h2 className="about-title">
              Empowering Businesses Through AI & Conscious Networking
            </h2>
            <p className="about-description">
              At Global Success Network (GSN), we blend the power of artificial intelligence with a spirit of conscious
              collaboration. Our mission is to create a unique business ecosystem where innovation meets intention.
              Through smart matchmaking, spiritual grounding, and futuristic tools, we aim to elevate both business
              outcomes and personal growth.
            </p>

            <div className="row feature-list-wrapper">
              <div className="col-md-6">
                <ul className="feature-list">
                  <li><BsCheckCircleFill /> AI-powered business matchmaking</li>
                  <li><BsCheckCircleFill /> Spiritual and conscious collaboration model</li>
                  <li><BsCheckCircleFill /> Exclusive member meetups and events</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list">
                  <li><BsCheckCircleFill /> Smart referral and growth dashboards</li>
                  <li><BsCheckCircleFill /> Real-world project opportunities</li>
                  <li><BsCheckCircleFill /> A future-forward business ecosystem</li>
                </ul>
              </div>
            </div>

            <div className="info-wrapper">
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="profile d-flex align-items-center gap-3">
                    <div className="profile-image-wrapper">
                      <img src={ceoImg} alt="CEO Profile" className="profile-image" />
                    </div>
                    <div>
                      <h4 className="profile-name">Mohanarao DV</h4>
                      <p className="profile-position">CEO &amp; Founder</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-info d-flex align-items-center gap-2">
                    <BsTelephoneFill />
                    <div>
                      <p className="contact-label">Call us anytime</p>
                      <p className="contact-number">+123 456-789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
            <div className="image-wrapper">
              <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                <img src={aboutMainImg} alt="Business Meeting" className="img-fluid main-image rounded-4" />
                <img src={aboutSmallImg} alt="Team Discussion" className="img-fluid small-image rounded-4" />
              </div>
              <div className="experience-badge floating">
                <h3>10+ <span>Years</span></h3>
                <p>Of experience in business service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
