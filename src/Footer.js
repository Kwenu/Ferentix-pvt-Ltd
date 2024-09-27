import React from "react";
import "./Footer.css";
import Lingo from "../src/Lingo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section site-name">
          <h4>Ferentix (pvt) Ltd</h4>
          <p>Make Your Vision Into Realities</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61564302045778">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/solar">Solar</a>
            </li>
            <li>
              <a href="/construction">Construction</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-us">
          <h4>Contact Us</h4>
          <p>
            <i className="fas fa-envelope"></i>ferentixsolar@gmail.com
          </p>
          <p>
            <i className="fas fa-phone"></i>+94 77 749 1007
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>Dangedara, Galle
          </p>
        </div>
      </div>

      <div className="alrights"><br />
        <p className="copyright">© Copyright 2024, Ferentix (pvt) Ltd. All Right Reserved.</p>
        <p className="developer">Design and Developed by :-
          <a href="https://api.whatsapp.com/message/ND63BU4PRWSDD1?autoload=1&app_absent=0"><br />
            <img src={Lingo} alt="lingo" className="lingo"/>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
