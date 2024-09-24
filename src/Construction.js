import React from "react";
import "./Construction.css";
import Con1 from "./con1.jpg";
import Con2 from "./con2.jpg";
import Con3 from "./con3.jpg";
import Img1 from "./article4.jpg";
import Img2 from "./article5.jpg";
import Img3 from "./article6.jpg";
import Img4 from "../src/HP.png";
import Img5 from "../src/AR.png";
import Img6 from "../src/ID.png";
import Img7 from "../src/BP.png";
import Img8 from "../src/BC.png";

const Construction = () => {
  return (
    <div className="construction-page">
      <div className="construction-header">
        <h2 className="post-title">
          <span>Ferentix</span> Construction
        </h2>
        <p className="subheading">
          At Ferentix Construction , we specialize in transforming your vision
          into reality through our comprehensive construction services. From the
          initial stages of house planning and architectural design to detailed
          interior designing, we ensure every aspect of your project is
          meticulously crafted. Our expert team excels in building planning,
          ensuring structural integrity and functionality, while our experienced
          builders bring these plans to reality with precision and quality.
          Whether you're envisioning a new home or a renovation, we provide
          end-to-end solutions to create spaces that are both engaging and
          enduring.
        </p>
      </div>

      <div className="solar-gallery">
        <div className="gallery-image">
          <img src={Con1} alt="Solar Image 1" />
        </div>
        <div className="gallery-image">
          <img src={Con2} alt="Solar Image 2" />
        </div>
        <div className="gallery-image">
          <img src={Con3} alt="Solar Image 3" />
        </div>
      </div>
      <br />
      <br />

      <div className="sub-heading-2">
        <p>
          In addition to our comprehensive offerings, Ferentix Construction also
          prides itself on delivering sustainable and innovative solutions for
          both residential and commercial projects. Our team stays at the
          forefront of construction technology, ensuring the use of
          energy-efficient materials and modern techniques that contribute to a
          greener future. With a focus on client collaboration, we tailor our
          services to meet individual project requirements, maintaining open
          communication and transparency throughout. From initial consultation
          to final handover, our goal is to exceed expectations, providing
          long-lasting value and ensuring complete client satisfaction with
          every build.
        </p>
      </div>
      <br />

      <div className="cons-section">
        <div className="cons-cards">
          <div className="cons-card">
            <img src={Img4} alt="RoofTop" />
            <h3>House Planning</h3>
            <p>
              Expertly designed house plans, ensuring optimal space utilization
              and a seamless blend of style, functionality, and sustainability.
            </p>
          </div>
          <div className="cons-card">
            <img src={Img5} alt="Ground" />
            <h3>Architecting</h3>
            <p>
              Innovative architectural solutions, blending aesthetics with
              structural integrity to create functional and visually stunning
              buildings.
            </p>
          </div>
          <div className="cons-card">
            <img src={Img6} alt="Construction" />
            <h3>Interior Designing</h3>
            <p>
              Tailored interior designs that reflect your personal style,
              maximizing comfort and enhancing the ambiance of every space.
            </p>
          </div>
          <div className="cons-card">
            <img src={Img7} alt="Construction" />
            <h3>Building Planning</h3>
            <p>
              Comprehensive building plans that prioritize structural soundness,
              energy efficiency, and adherence to all regulatory requirements.
            </p>
          </div>
          <div className="cons-card">
            <img src={Img8} alt="Construction" />
            <h3>Building Construction</h3>
            <p>
              High-quality construction services, delivering durable structures
              that meet both safety standards and your specific project goals.
            </p>
          </div>
        </div>
      </div>

      <div className="related-articles">
        <h2>Related Articles or Posts</h2>
        <div className="articles">
          <div className="article">
            <h3>Construction Costs Decrease for First time after 10 Years</h3>
            <img
              src={Img1}
              alt="Con1"
              className="article-image"
            />
            <p>
            Construction costs in July saw a slight decrease, 
            which has been unheard of over the past decade. With 
            pandemic-related issues being a contributing factor, 
            some construction materials have also seen a slight decline 
            in price, playing a part in the overall decrease of 
            construction costs.
            </p>
          </div>
          <div className="article">
            <h3>Will the Skyscrapers of the Future be made out of Wood</h3>
            <img
              src={Img2}
              alt="Con2"
              className="article-image"
            />
            <p>
            Wood for skyscrapers in 2020? Who would've thought? 
            National Geographic not only highlights the gained interest 
            in wood for constructing high rises, but they also help us 
            understand that the need for these materials relies on a 
            controlled growth in trees.
            </p>
          </div>
          <div className="article">
            <h3>Unemployment in Construction Industry</h3>
            <img
              src={Img3}
              alt="Con3"
              className="article-image"
            />
            <p>
            As with many industries, construction has been hit by the 
            affects of COVID-19, impacting it's current employment rates. 
            In April, unemployment rates tripled from the start of the 
            year. But, with an ease in restrictions and implementation 
            of health it may start to reduce the employment rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;
