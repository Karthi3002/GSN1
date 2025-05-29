import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Testimonial.css'; // Optional for any custom styling

import img1 from '../assets/img/testimonials/testimonials-1.jpg';
import img2 from '../assets/img/testimonials/testimonials-2.jpg';
import img3 from '../assets/img/testimonials/testimonials-3.jpg';
import img4 from '../assets/img/testimonials/testimonials-4.jpg';

const testimonials = [
  {
    img: img1,
    name: 'Saul Goodman',
    title: 'Ceo & Founder',
    delay: 100,
    quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.'
  },
  {
    img: img2,
    name: 'Sara Wilsson',
    title: 'Designer',
    delay: 200,
    quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid.'
  },
  {
    img: img3,
    name: 'Jena Karlis',
    title: 'Store Owner',
    delay: 300,
    quote: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem.'
  },
  {
    img: img4,
    name: 'Matt Brandon',
    title: 'Freelancer',
    delay: 400,
    quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim.'
  }
];



const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row g-5">
          {testimonials.map((testimonial, index) => (
            <div
              className="col-lg-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={testimonial.delay}
            >
              <div className="testimonial-item">
                <img src={testimonial.img} className="testimonial-img" alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.title}</h4>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
