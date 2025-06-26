import React from "react";
import '../styles/Features.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from '../assets/img/SM.png';
import img2 from '../assets/img/SS.png';
import img3 from '../assets/img/BGT.png';
import img4 from '../assets/img/GSN - App (1).png';

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Unlock the Power of Conscious Networking and AI-Driven Collaboration</p>
        </div>

        <div className="container">
          <div className="d-flex justify-content-center">
            <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            <li className="nav-item">
                <button
                type="button"
                className="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-1"
                >
                <h4>Smart Matchmaking</h4>
                </button>
            </li>
            <li className="nav-item">
                <button
                type="button"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-2"
                >
                <h4>Spiritual Synergy</h4>
                </button>
            </li>
            <li className="nav-item">
                <button
                type="button"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-3"
                >
                <h4>Business Growth Tools</h4>
                </button>
            </li>
            </ul>
          </div>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div className="tab-pane fade active show" id="features-tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>AI-Enhanced Business Connections</h3>
                  <p className="fst-italic">
                    GSN's smart matchmaking connects you with the most relevant members based on
                    industry, goals, and values.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>AI-powered suggestions to expand your business circle</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Personalized intros for meaningful collaboration</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Save time and build real value-driven relationships</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src= {img1} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="features-tab-2">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Conscious Collaboration Culture</h3>
                  <p className="fst-italic">
                    We believe growth should align with values. GSN integrates mindfulness and
                    spiritual principles into networking.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>Monthly meditation and wellness meetups</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Encourages trust, empathy, and integrity</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Collaborate with like-minded individuals and businesses</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Balance professional success with inner clarity</span></li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src= {img2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="features-tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Tools to Scale Your Business</h3>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>Referral tracking and analytics dashboard</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Event management, attendance logs, and scheduling</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Resource hub with courses, projects, and templates</span></li>
                  </ul>
                  <p className="fst-italic">
                    Everything you need to grow your network and elevate your business in one
                    intelligent platform.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src= {img3} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section id="features-cards" className="features-cards section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-box orange">
                <i className="bi bi-award"></i>
                <h4>Verified Member Network</h4>
                <p>Connect with trusted professionals from diverse industries, all verified through GSN’s secure onboarding.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-box blue">
                <i className="bi bi-patch-check"></i>
                <h4>Quality Referrals</h4>
                <p>Receive and share high-quality referrals that match your expertise, values, and business goals.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-box green">
                <i className="bi bi-sunrise"></i>
                <h4>Spiritual Networking</h4>
                <p>Participate in mindful sessions and conscious connections that fuel inner clarity and meaningful success.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="feature-box red">
                <i className="bi bi-shield-check"></i>
                <h4>Secure Business Hub</h4>
                <p>Your data, connections, and interactions are protected with end-to-end encrypted communication on GSN.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features 2 Section */}
      <section id="features-2" className="features-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="200">
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Accessible on All Devices</h3>
                    <p>Use GSN seamlessly on mobile, tablet, or desktop, ensuring you're always connected with your network on the go.</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-display"></i>
                  </div>
                </div>
              </div>
              <div className="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="300">
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Personalized Profiles</h3>
                    <p>Highlight your business, skills, and outreach goals with rich profiles that help others connect with you meaningfully.</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-feather"></i>
                  </div>
                </div>
              </div>
              <div className="feature-item text-end" data-aos="fade-right" data-aos-delay="400">
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Crystal Clear Interface</h3>
                    <p>Enjoy a sleek, retina-ready UI built for clarity and ease of use, making your networking experience visually intuitive.</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="phone-mockup text-center">
                <img src= {img4} alt="Phone Mockup" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
        <div class="feature-item mb-5" data-aos="fade-left" data-aos-delay="200">
          <div class="d-flex align-items-center gap-4">
            <div class="feature-icon flex-shrink-0">
              <i class="bi bi-code-square"></i>
            </div>
            <div class="feature-content">
              <h3>Optimized Tech Architecture</h3>
              <p>Built with modern, scalable code to ensure fast performance, data integrity, and smooth onboarding for all users.</p>
            </div>
          </div>
        </div>{/*!-- End .feature-item --*/}

        <div class="feature-item mb-5" data-aos="fade-left" data-aos-delay="300">
          <div class="d-flex align-items-center gap-4">
            <div class="feature-icon flex-shrink-0">
              <i class="bi bi-phone"></i>
            </div>
            <div class="feature-content">
              <h3>Fully Responsive Design</h3>
              <p>The GSN app adapts beautifully to all screen sizes, ensuring uninterrupted experience across platforms and devices.</p>
            </div>
          </div>
        </div>{/*<!-- End .feature-item -->*/}

        <div class="feature-item" data-aos="fade-left" data-aos-delay="400">
          <div class="d-flex align-items-center gap-4">
            <div class="feature-icon flex-shrink-0">
              <i class="bi bi-browser-chrome"></i>
            </div>
            <div class="feature-content">
              <h3>Cross-Browser Support</h3>
              <p>GSN works smoothly across all major browsers so you never face compatibility issues while building your network.</p>
            </div>
          </div>
        </div>{/*<!-- End .feature-item -->*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
