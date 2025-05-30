import React, { useState } from 'react';
import '../styles/FAQ.css'; // Create if you want to apply styles separately

const faqData = [
  {
    question: 'What is GSN and who can join?',
    answer:
      'GSN (Global Spiritual Network) is a platform where entrepreneurs, professionals, and visionaries connect through the fusion of business growth, innovation, and spirituality. Anyone passionate about personal and professional development is welcome to join.',
  },
  {
    question: 'Is GSN only for spiritual people?',
    answer:
      "Not at all. While GSN integrates spiritual awareness into its values, it's open to professionals from all backgrounds. The goal is holistic growth—business-wise, personally, and spiritually—regardless of your faith or belief system.",
  },
  {
    question: 'How can I collaborate with GSN?',
    answer:
      'You can collaborate with GSN by co-hosting events, becoming a mentor or speaker, sponsoring initiatives, or partnering for workshops and community projects. Just reach out through our “Join Us” section to explore opportunities.',
  },
  {
    question: 'Are there regular events or meetups?',
    answer:
      'Yes, GSN hosts regular chapter-based meetings, online webinars, workshops, and national-level summits where members share ideas, present innovations, and engage in spiritual and professional dialogue.',
  },
  {
    question: 'Can I contribute as a volunteer?',
    answer:
      'Absolutely! We welcome volunteers to support events, content creation, community engagement, and more. Volunteering is a great way to contribute, learn, and connect deeply with like-minded individuals.',
  },
  {
    question: 'What kind of support does GSN provide?',
    answer:
      'GSN offers networking opportunities, collaboration platforms, exposure through events, and access to a vibrant ecosystem that supports your personal growth and business expansion.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section light-background" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-5" data-aos="fade-up">
            <h2 className="faq-title">Have a question? Check out the FAQ</h2>
            <p className="faq-description">
              Here are answers to some of the most common questions about GSN and how you can get involved, connect, and grow with us.
            </p>
            <div className="faq-arrow d-none d-lg-block" data-aos="fade-up" data-aos-delay="200">
              {/* You can place your SVG here */}
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
            <div className="faq-container">
              {faqData.map((item, index) => (
                <div
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  key={index}
                >
                  <h3 onClick={() => toggleFAQ(index)}>{item.question}</h3>
                  <div className="faq-content">
                    {activeIndex === index && <p>{item.answer}</p>}
                  </div>
                  <i
                    className={`faq-toggle bi ${
                      activeIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'
                    }`}
                    onClick={() => toggleFAQ(index)}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
