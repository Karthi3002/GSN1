import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import '../styles/Stats.css';

const statsData = [
  { end: 200, label: 'Registered Members' },
  { end: 35, label: 'Business Categories' },
  { end: 1200, label: 'Connections Made' },
  { end: 12, label: 'Chapters Formed' },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      {
        threshold: 0.3, // Trigger when 40% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="stats"
      className="stats section"
      data-aos="fade-up"
      data-aos-delay="100"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row gy-4">
          {statsData.map((stat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stats-item text-center w-100 h-100">
                <span className="stat-number">
  {startCount ? (
    <span className="countup">
      <CountUp start={0} end={stat.end} duration={2} separator="," />
    </span>
  ) : (
    0
  )}
</span>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
