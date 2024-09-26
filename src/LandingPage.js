import React from 'react';
import './LandingPage.css';
import Con from './bg1.jpg'

const LandingPage = () => {
  return (
    <section className="landing-page" id="home">
      <div className="landing-content">
        <h1>Welcome to <br /> Ferentix (PVT) Ltd </h1>
        <p>Ferentix (Pvt) Ltd is a leading provider of <br /> innovative solar and construction solutions. We are committed to delivering <br /> high-quality services that drive sustainability and infrastructure development, <br /> ensuring a brighter future for our clients and communities.</p>
        <button><a href="/contact">Contact Us</a></button>
      </div>
      <div className="overlay-frame">
        <img src={Con} alt="Construction" className="overlay-image" />
      </div>
    </section>
  );
};

export default LandingPage;
