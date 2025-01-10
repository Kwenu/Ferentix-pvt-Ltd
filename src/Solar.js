import React from "react";
import "./Solar.css";
import Image4 from "./solar4.png";
import Image8 from "./solar9.gif";
import Img1 from "../src/ongrid.png";
import Img2 from "../src/head2.png";
import Img3 from "../src/Hybrid.png";
import Logo1 from "../src/logocom1.png";
import Logo2 from "../src/logocom2.png";
import Logo3 from "../src/logocom3.png";
import Logo4 from "../src/logocom4.png";
import Logo5 from "../src/logocom5.png";
import Logo6 from "../src/logocom6.png";

const Solar = () => {
  return (
    <div className="solar-page">
      <div className="solar-header">
        <h2 className="post-title">
          <span>Ferentix</span> Solar
        </h2>
        <p className="subheading">
          At Ferentix Solar, we are committed to delivering sustainable energy
          solutions tailored to your needs. We offer a range of solar energy
          systems with high-quality products and the latest technology,
          including on-grid, off-grid, and hybrid systems, designed to maximize
          efficiency and reliability.
        </p>
      </div>

      <div className="solar-gallery">
        <div className="gallery-image">
          <img src={Image8} alt="Solar Image 1" />
        </div>
        <div className="gallery-text">
          <p className="content-heading">Why Go Solar?</p>
          <p className="content-text">
            <ul>
              <li>
                <b>Cost Savings:</b> With solar power, you can significantly
                reduce your energy bills. The savings start immediately after
                installation and last for decades.
              </li>
              <li>
                <b>Eco-Friendly:</b> Solar power is a renewable, clean source of
                energy that reduces your carbon footprint and helps combat
                climate change.
              </li>
              <li>
                <b>Energy Independence:</b> With solar panels, you generate your
                own power, protecting yourself from energy price fluctuations
                and power outages.
              </li>
              <li>
                <b>Increased Property Value:</b> Properties with solar
                installations typically see a rise in value, making it a
                long-term investment for homeowners and businesses alike.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="solar-content">
        <p>
          At Ferentix Solar, we are dedicated to delivering sustainable energy
          solutions uniquely tailored to meet your specific needs. Our
          comprehensive range of solar energy systems is built using only the
          highest quality products and the latest innovations in solar
          technology. Whether you're seeking on-grid, off-grid, or hybrid
          systems, we design each to maximize both efficiency and reliability.
          Our on-grid systems integrate seamlessly with existing power grids,
          significantly reducing energy costs while supporting environmental
          sustainability efforts.
        </p>
      </div>

      <div className="solar-gallery">
        <div className="gallery-text-1">
          <p className="content-heading">Our Solar Services</p>
          <p className="content-text">
            <ul>
              <li>
                <b>Solar Panel Installation:</b> Whether it’s rooftop solar for
                homes or large-scale solar systems for businesses, our expert
                team ensures a seamless installation process.
              </li>
              <li>
                <b>System Design:</b> We assess your energy needs and design a
                solar system that maximizes efficiency and returns on
                investment.
              </li>
              <li>
                <b>Maintenance & Monitoring:</b> Ferentix offers ongoing
                maintenance and system monitoring to ensure that your solar
                panels operate at peak performance year-round.
              </li>
              <li>
                <b>Financing Options:</b> We provide flexible financing plans to
                make the switch to solar affordable and hassle-free for
                everyone.
              </li>
            </ul>
          </p>
        </div>
        <div className="gallery-image-1">
          <img src={Image4} alt="Solar Image 4" />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="heading-section">
        <div className="cards">
          <div className="card">
            <img src={Img1} alt="RoofTop" />
            <h3>On grid Solar System</h3>
            <p>
              Rooftop solar installation provides clean energy for your home or
              business, cutting electricity costs and promoting sustainability.
            </p>
          </div>
          <div className="card">
            <img src={Img2} alt="Ground" />
            <h3>Off grid Solar System</h3>
            <p>
              Ground-mounted solar installation offers efficient, clean energy
              for your property and reducing electricity costs sustainably.
            </p>
          </div>
          <div className="card">
            <img src={Img3} alt="Construction" />
            <h3>Hybrid Solar System</h3>
            <p>
              Building construction services deliver quality, durable structures
              tailored to your needs, ensuring safety, and lasting value.
            </p>
          </div>
        </div>
      </div>

      <div className="related-articles">
        <h2>Our Packages</h2>
        <div className="articles">
          <div style={{backgroundColor: "#B9F2FF"}} className="article">
            <h3>Diamond Package</h3><br />
            <img src={Logo1} alt="LogoCom1" />
            <div className="article-details">
              <p>
                Solar energy is a renewable and sustainable source of power that
                offers numerous benefits for the environment and your wallet.
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#E5E4E2"}} className="article">
            <h3>Platinum Package</h3><br />
            <img src={Logo2} alt="LogoCom2" />
            <div className="article-details">
              <p>
                Solar panels convert sunlight into electricity through the
                photovoltaic effect, providing clean and efficient energy for
                your home or business.
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#FFD700"}} className="article">
            <h3>Gold Package</h3><br />
            <img src={Logo3} alt="LogoCom3" />
            <div className="article-details">
              <p>
                Discover the top solar panel brands that offer high-quality
                products, reliability, and performance for your solar energy
                system.
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#C0C0C0"}} className="article">
            <h3>Silver Package</h3><br />
            <img src={Logo4} alt="LogoCom3" />
            <div className="article-details">
              <p>
                Discover the top solar panel brands that offer high-quality
                products, reliability, and performance for your solar energy
                system.
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#CD7F32"}} className="article">
            <h3>Bronze Package</h3><br />
            <img src={Logo5} alt="LogoCom3" />
            <div className="article-details">
              <p>
                Discover the top solar panel brands that offer high-quality
                products, reliability, and performance for your solar energy
                system.
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#b5a642"}} className="article">
            <h3>Brass Package</h3>
            <img src={Logo6} alt="LogoCom3" />
            <div className="article-details">
              <p>
                Discover the top solar panel brands that offer high-quality
                products, reliability, and performance for your solar energy
                system.
              </p>
            </div>
          </div>
        </div>
      </div><br />
    </div>
  );
};

export default Solar;
