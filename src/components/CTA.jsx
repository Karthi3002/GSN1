/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/CTA.css"; // Optional: Add styles as needed

const CTA = () => {
  return (
    <section id="call-to-action-2" className="call-to-action-2 section dark-background">
      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Join the Global Spiritual Network</h3>
              <p>
                Be part of a thriving community where business innovation meets spiritual growth. Connect with
                like-minded professionals, attend transformative events, and unlock opportunities for personal and
                professional advancement.
              </p>
              <a className="cta-btn" href="#">
                Join Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
