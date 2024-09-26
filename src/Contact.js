import "./Contact.css";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import Solar from "../src/contact2.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });


  // Create a reference for the "Get in Touch" section
  const getInTouchRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs
      .send(
        "service_i99pc6l",
        "template_8uo6xis",
        formData,
        "rKdHuAp0OLEwOdcor"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send the message.");
      });
  };

  // Function to scroll to the "Get in Touch" section
  const scrollToGetInTouch = () => {
    getInTouchRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="contact-page-container">
      <div className="contact-us-container">
        {/* Left Section */}
        <div className="contact-left">
          <div className="contact-overlay">
            <h1 className="contact-title">Contact Us</h1>
            <p className="subheading">
              Have a project in mind? Get in touch, and let's bring your vision
              to life.
            </p>
            <button className="send-message-btn" onClick={scrollToGetInTouch}>
              SEND MESSAGE
            </button>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className="contact-right">
          <h2>Contact Info</h2>
          <div className="contact-info">
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Our Office</h4>
                <p>52/10, Steel Road, Dangedara, Galle</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaClock className="contact-icon" />
              <div>
                <h4>Open Office Hours</h4>
                <p>
                  Mon-Fri: 8am - 5pm
                  <br />
                  Sat-Sun: 10am - 5pm
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Get in Touch</h4>
                <p>
                  ferntixsolar@gmail.com
                  <br />
                  +94 77 749 1007
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-details">
        <div className="contact-call">
          <h3>Call: (+94) 77 749 1007</h3>
          <p>We Can't Wait to Make Your Ideas a Reality</p>
        </div>

        <div className="contact-social">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-tiktok"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="new-2"></hr>

      <div className="get-in-touch-container" ref={getInTouchRef}>
        <div className="form-container">
          <h2>Get in Touch</h2>
          <div className="underline"></div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Jane"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Smitherton"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@domain.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="image-container">
          <img src={Solar} alt="Solar Family" />
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d704.860629401443!2d80.22015467013871!3d6.048772059332659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17300597bff47%3A0x40bd68c7ecbc0a31!2sFerentix%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1727334412878!5m2!1sen!2slk"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Company Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
