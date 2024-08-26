import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Welcome to our company! We are committed to delivering quality and excellence.</p>
      </div>

      {/* Company Overview */}
      <section className="company-overview">
        <h2>Who We Are</h2>
        <p>Our company has been a leader in the industry for over a decade...</p>
      </section>

      {/* Our Team */}
      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="path-to-image" alt="Team Member Name" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          {/* Repeat for other team members */}
        </div>
      </section>

      {/* Our Services */}
      <section className="our-services">
        <h2>What We Do</h2>
        <p>We offer a wide range of services including...</p>
      </section>

      {/* Company Achievements/History */}
      <section className="company-history">
        <h2>Our Journey</h2>
        <p>Over the years, we have achieved...</p>
      </section>

      {/* Call to Action */}
      <section className="call-to-action">
        <h2>Get in Touch</h2>
        <p>Contact us to learn more about our services and how we can help you.</p>
      </section>
    </div>
  );
}

export default AboutUs;
