import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../data/blogData';
import '../styles/BlogDetail.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => b.slug === slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!blog) {
    return (
      <div className="container py-5">
        <h2 className="text-center">Blog not found.</h2>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <section className="blog-detail-section section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>{blog.title}</h2>
          <p>Read the full story below</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="d-flex justify-content-end mb-3">
            <button className="blog-nav-btn filled" onClick={() => navigate('/all-blogs')}>
              All Blogs →
            </button>
          </div>

          <div className="blog-detail-card">
            <img src={blog.image} alt={blog.title} className="blog-detail-image" />
            <div className="blog-detail-content">
              <p className="blog-detail-text">{blog.fullContent}</p>
            </div>
          </div>

          <div className="d-flex justify-content-start mt-4">
            <button className="blog-nav-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
