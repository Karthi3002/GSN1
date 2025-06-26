import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogData from '../data/blogData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/AllBlogs.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const categories = [
  "All",
  "Referral Strategies",
  "Member Success Stories",
  "Leadership & Mind-set",
  "AI Revolution in Networking",
  "GSN Culture & Values"
];

const AllBlogsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const latestBlogs = [...blogData].slice(0, 3);
  const filteredBlogs = selectedCategory === "All"
    ? blogData
    : blogData.filter((blog) => blog.category === selectedCategory);

  return (
    <>
      <Navigation />
      <section className="all-blogs-section section light-background">
        {/* Hero Slider */}
        <div className="container" data-aos="fade-up">
          <h4 className="vibrant-title text-center mb-4">Latest Blogs</h4>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="hero-swiper"
          >
            {latestBlogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="hero-slide-card">
                  <img src={blog.image} alt={blog.title} className="hero-slide-image" />
                  <div className="hero-slide-content">
                    <h4>{blog.title}</h4>
                    <p>{blog.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Filter Buttons (with existing styles) */}
        <div className="container text-center mt-5" data-aos="fade-up" data-aos-delay="200">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="container mt-5" data-aos="fade-up" data-aos-delay="300">
          <div className="row g-4">
            {filteredBlogs.map((blog) => (
              <div className="col-lg-4 col-md-6" key={blog.id}>
                <div className="blog-card">
                  <img src={blog.image} alt={blog.title} className="blog-image" />
                  <div className="blog-content">
                    <h5>{blog.title}</h5>
                    <p>{blog.description}</p>
                    <button
                      className="read-more-btn"
                      onClick={() => navigate(`/blog/${blog.slug}`)}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="container text-center mt-5" data-aos="fade-up" data-aos-delay="400">
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllBlogsPage;
