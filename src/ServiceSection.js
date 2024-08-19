import React from 'react';
import './ServiceSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>OUR SERVICES</h2>
      <div className="services-cards">
        <div className="service-card">
          <h3>Subheading</h3>
          <p>Body text for whatever you'd like to suggest.</p>
        </div>
        <div className="service-card">
          <h3>Subheading</h3>
          <p>Body text for whatever you'd like to suggest.</p>
        </div>
        <div className="service-card">
          <h3>Subheading</h3>
          <p>Body text for whatever you'd like to suggest.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
