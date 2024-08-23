import React from 'react';
import './ServiceSection.css';
import Img1 from '../src/head1.png'
import Img2 from '../src/head2.png'
import Img3 from '../src/head3.png'

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>OUR SERVICES</h2>
      <div className="services-cards">
        <div className="service-card">
          <img src={Img1} alt="RoofTop" />
          <h3>Rooftop Solar Insulation</h3>
          <p>
          Rooftop solar installation provides clean energy for your home or business, cutting electricity costs and promoting sustainability.</p>
        </div>
        <div className="service-card">
          <img src={Img2} alt="Ground" />
          <h3>Ground Mounted Solar Insulation</h3>
          <p>Ground-mounted solar installation offers efficient, clean energy for your property and reducing electricity costs sustainably.</p>
        </div>
        <div className="service-card">
          <img src={Img3} alt="Construction" />
          <h3>Building Constructions</h3>
          <p>Building construction services deliver quality, durable structures tailored to your needs, ensuring safety, and lasting value.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
