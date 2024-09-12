import React from "react";
import "./Solar.css";
import Image1 from "./solar1.jpg";
import Image2 from "./solar2.jpg";
import Image3 from "./solar3.jpg";
import Image4 from "./solar4.jpg";
import Image7 from "./solar7.jpg";
import Image8 from "./solar8.jpg";
import Img1 from "../src/ongrid.png";
import Img2 from "../src/head2.png";
import Img3 from "../src/Hybrid.png";
import Img4 from "../src/article1.jpg";
import Img5 from "../src/article2.jpg";
import Img6 from "../src/article3.png";

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
          efficiency and reliability. Our on-grid systems seamlessly integrate
          with the existing power grid, reducing energy costs and supporting
          sustainability efforts. Off-grid solutions provide complete
          independence from utility networks, perfect for remote locations or
          those seeking full energy autonomy. Hybrid systems combine the
          benefits of both, offering flexibility, enhanced performance, and
          battery backup options for continuous power supply.
        </p>
      </div>

      <div className="solar-gallery">
        <div className="gallery-image">
          <img src={Image1} alt="Solar Image 1" />
        </div>
        <div className="gallery-image">
          <img src={Image2} alt="Solar Image 2" />
        </div>
        <div className="gallery-image">
          <img src={Image3} alt="Solar Image 3" />
        </div>
      </div>

      <div className="solar-content">
        <p>
          Additionally, we specialize in ground-mounted solar farms, ideal for
          large-scale energy production, which are perfect for businesses,
          communities, and agricultural sectors looking to harness the power of
          the sun. All our solar solutions come with an exceptional 25-year
          warranty, ensuring long-term performance, durability, and peace of
          mind. At Ferentix Solar, we also provide comprehensive maintenance and
          monitoring services to ensure optimal system performance throughout
          its lifespan. Trust us to be your partner in achieving a greener, more
          energy-efficient future.
        </p>
      </div>

      <div className="solar-gallery">
        <div className="gallery-image">
          <img src={Image4} alt="Solar Image 4" />
        </div>
        <div className="gallery-image">
          <img src={Image7} alt="Solar Image 5" />
        </div>
        <div className="gallery-image">
          <img src={Image8} alt="Solar Image 6" />
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
        <h2>Related Articles or Posts</h2>
        <div className="articles">
          <div className="article">
            <h3>5 Benefits of Solar Energy</h3>
            <img
              src={Img4}
              alt="Benefits of Solar Energy"
              className="article-image"
            />
            <p>
              Solar energy is a renewable and sustainable source of power that
              offers numerous benefits for the environment and your wallet.
            </p>
          </div>
          <div className="article">
            <h3>How Solar Panels Work</h3>
            <img
              src={Img5}
              alt="How Solar Panels Work"
              className="article-image"
            />
            <p>
              Solar panels convert sunlight into electricity through the
              photovoltaic effect, providing clean and efficient energy for your
              home or business.
            </p>
          </div>
          <div className="article">
            <h3>Top Solar Panel Brands</h3>
            <img
              src={Img6}
              alt="Top Solar Panel Brands"
              className="article-image"
            />
            <p>
              Discover the top solar panel brands that offer high-quality
              products, reliability, and performance for your solar energy
              system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solar;
