import React from 'react';
import './AboutMe.css';
import ME from './aboutme.png';

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <h2>About Me</h2>
        <h3><span className="highlight">Damindu&nbsp;</span>Nimshara Kumarasiri</h3>
        <p>As the CEO of Ferentix (Pvt) Ltd, Damindu Nimshara Kumarasiri 
          combines innovative thinking with a strategic mindset to drive 
          the company's success. With holding a BSc (Hons) Civil 
          Engineering Degree and over 6 years of experience in the 
          industry, Damindu has led company through significant growth 
          and transformation. Under his leadership, the company has 
          achieved more than 250 projects up to now. He is committed 
          to continuous improvement and is passionate about quality 
          and durability, ensuring that Ferentix (Pvt) Ltd remains at 
          the forefront of the industry. Their vision is to empower 
          Sri Lanka with sustainable solar energy solutions, ensuring 
          our clients' satisfaction while making a meaningful contribution 
          to the country's environmental and economic well-being.</p>
      </div>
      <div className="about-me-image">
        <img src={ME} alt="CEO" className="ceo-image" />
      </div>
    </div>
  );
}

export default AboutMe;
