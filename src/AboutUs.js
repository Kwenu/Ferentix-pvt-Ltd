import React from 'react';
import './AboutUs.css';
import company from './img2.jpg'

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-image">
        <img src={company} alt="Construction Site" />
      </div>
      <div className="about-us-content">
        <h2>About Us</h2>
        <h1><span className="highlight">Ferentix&nbsp;</span>(Pvt) Ltd</h1>
        <p>
        Our organization Ferentix (Pvt) Ltd has introduce two services for you. 
        They are Ferentix Solar and Ferentix Construction. <br />
        Ferentix (Pvt) Ltd is one of the best company in Sri Lanka. 
        By contacting us you can build your solar system or your dream 
        building using the latest technology in the world andalso our 
        company offers  exceptional after-service , ensuring that all 
        work is supported with professional care and attention. <br />
        Come join us to build your dream solar energy system, 
        your dream house and as well as your business place and factory!!!!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
