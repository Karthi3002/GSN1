import React from 'react';
import blogData from '../data/blogData';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Blog</h2>
        <p>
          Explore insights, stories, and ideas from our team.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {blogData.map((blog, index) => (
            <div
              className="col-lg-4"
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="blog-card h-100">
                <div className="blog-image-wrapper">
                  <img
                    src={blog.image}
                    className="blog-image"
                    alt={blog.title}
                  />
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-description">{blog.description}</p>
                  <Link to={`/blog/${blog.slug}`} className="blog-btn">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
