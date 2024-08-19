import React from 'react';
import './WelcomeSection.css';
import Solar from './solar.jpg';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-image">
        <img src={Solar} alt="Solar" />
      </div>
      <div className="welcome-content">
        <h3>Where Can We Help You</h3>
        <h2>Welcome To Ferentix (PVT) Ltd</h2>
        <p>
          Our team of experts specializes in designing and constructing commercial and residential spaces that are functional, sustainable, and aesthetically pleasing.
        </p>
        <ul className="features-list">
          <li>Specializes in designing and constructing</li>
          <li>Strong understanding of our clients' needs and goals</li>
          <li>Architectural design, engineering, and construction management</li>
          <li>Environmental impact of our projects</li>
          <li>Sustainable engineering solutions</li>
        </ul>
        <button className="read-more-btn">Read More...</button>
      </div>
    </section>
  );
};

export default WelcomeSection;
