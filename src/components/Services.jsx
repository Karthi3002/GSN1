import React from 'react';
import '../styles/Services.css'

const services = [
  {
    icon: 'bi-people',
    title: 'Smart Matchmaking',
    desc: 'AI-powered suggestions to connect with the right professionals based on business interests and categories.',
  },
  {
    icon: 'bi-diagram-3-fill',
    title: 'Chapter Management',
    desc: 'Organize members into chapters with structured communication and clear role definitions.',
  },
  {
    icon: 'bi-calendar-event',
    title: 'Event Calendar & Attendance',
    desc: 'View upcoming events, RSVP, and track your meeting attendance in real-time.',
  },
  {
    icon: 'bi-search',
    title: 'Business Discovery',
    desc: 'Explore and search profiles with advanced filters to find collaborators, partners, and leads.',
  },
  {
    icon: 'bi-chat-dots',
    title: 'Forum & Chat',
    desc: 'Engage in chapter-level and global discussions with secure group and private messaging.',
  },
  {
    icon: 'bi-file-earmark-person',
    title: 'Detailed Member Profiles',
    desc: 'Highlight your expertise, keywords, contact info, and business pitch to stand out in the network.',
  },
  {
    icon: 'bi-bar-chart-line',
    title: 'Performance Reports',
    desc: 'Access analytics on engagement, outreach, and attendance to improve networking outcomes.',
  },
  {
    icon: 'bi-lightbulb',
    title: 'AI Business Insights',
    desc: 'Get personalized AI suggestions to enhance your business visibility and networking strategy.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>GSN Services</h2>
        <p>
          Explore the powerful features that empower smart networking,
          collaboration, and business growth.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-6" key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
