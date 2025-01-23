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
        <h3 className="capacity" style={{color: '#007bff'}}>- - Capacity : 05.00 kW - -</h3>
        <div className="articles">
          <div style={{backgroundColor: "#B9F2FF"}} className="article">
            <h3>Diamond Package</h3><br />
            <img src={Logo1} alt="LogoCom1" />
            <div className="article-details">
              <p>
                <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 700 - 800 kWh.</li>
                  <li>Total Saving per Month: LKR 18 900 (700 x 27)</li>
                  <li>Annual Saving: LKR 226 800 (18 900 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 41 702.56</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro / Trina Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>SMA 05kW Inverter - Origin in German (Made in China)</p>
                <ul>
                  <li>10 Year Product Warranty (Can Extend up to 25 Years)</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#E5E4E2"}} className="article">
            <h3>Platinum Package</h3><br />
            <img src={Logo2} alt="LogoCom2" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 800 - 900 kWh.</li>
                  <li>Total Saving per Month: LKR 21 600 (800 x 27)</li>
                  <li>Annual Saving: LKR 259 200 (21 600 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 48 369.23</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro / Trina Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>ABB Fimer 05kW Inverter - Made in Italy</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#FFD700"}} className="article">
            <h3>Gold Package</h3><br />
            <img src={Logo3} alt="LogoCom3" />
            <div className="article-details">
            <p>
                <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 450 - 600 kWh.</li>
                  <li>Total Saving per Month: LKR 12 150 (450 x 27)</li>
                  <li>Annual Saving: LKR 157 950 (12 150 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 25 035.90</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solis 05kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#C0C0C0"}} className="article">
            <h3>Silver Package</h3><br />
            <img src={Logo4} alt="LogoCom3" />
            <div className="article-details">
            <p>
             <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 400 - 500kWh.</li>
                  <li>Total Saving per Month: LKR 10 800 (400 x 27)</li>
                  <li>Annual Saving: LKR 129 600 (10 800 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 21 702.56</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solis 05kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#CD7F32"}} className="article">
            <h3>Bronze Package</h3><br />
            <img src={Logo5} alt="LogoCom3" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 400 - 500kWh.</li>
                  <li>Total Saving per Month: LKR 10 800 (400 x 27)</li>
                  <li>Annual Saving: LKR 129 600 (10 800 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 21 702.56</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solax / Deye 05kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#b5a642"}} className="article">
            <h3>Brass Package</h3><br /><br />
            <img src={Logo6} alt="LogoCom3" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 400 - 500kWh.</li>
                  <li>Total Saving per Month: LKR 10 800 (400 x 27)</li>
                  <li>Annual Saving: LKR 129 600 (10 800 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 21 702.56</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Growott / GoodWe 05kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
        </div><br /><br />

        <h3 className="capacity" style={{color: '#007bff'}}>- - Capacity : 10.00 kW - -</h3>
        <div className="articles">
          <div style={{backgroundColor: "#B9F2FF"}} className="article">
            <h3>Diamond Package</h3><br />
            <img src={Logo1} alt="LogoCom1" />
            <div className="article-details">
              <p>
                <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 1400 - 1750 kWh.</li>
                  <li>Total Saving per Month: LKR 37 800 (1400 x 27)</li>
                  <li>Annual Saving: LKR 453 600 (37 800 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 88 369.23</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro / Trina Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>SMA 10kW Inverter - Made in German</p>
                <ul>
                  <li>10 Year Product Warranty (Can Extend up to 25 Years)</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#E5E4E2"}} className="article">
            <h3>Platinum Package</h3><br />
            <img src={Logo2} alt="LogoCom2" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 1400 - 1750 kWh.</li>
                  <li>Total Saving per Month: LKR 37 800 (1400 x 27)</li>
                  <li>Annual Saving: LKR 453 600 (37 800 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 88 369.23</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro / Trina Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>ABB Fimer 10kW Inverter - Made in Italy</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#FFD700"}} className="article">
            <h3>Gold Package</h3><br />
            <img src={Logo3} alt="LogoCom3" />
            <div className="article-details">
            <p>
                <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 1100 - 1200 kWh.</li>
                  <li>Total Saving per Month: LKR 29 700 (1100 x 27)</li>
                  <li>Annual Saving: LKR 356 400 (29 700 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 68 369.23</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solis 10kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#C0C0C0"}} className="article">
            <h3>Silver Package</h3><br />
            <img src={Logo4} alt="LogoCom3" />
            <div className="article-details">
            <p>
             <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 1000 - 1100 kWh.</li>
                  <li>Total Saving per Month: LKR 27 000 (1000 x 27)</li>
                  <li>Annual Saving: LKR 324 000 (27 000 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 61 702.56</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solis 10kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#CD7F32"}} className="article">
            <h3>Bronze Package</h3><br />
            <img src={Logo5} alt="LogoCom3" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 950 - 1050 kWh.</li>
                  <li>Total Saving per Month: LKR 25 650 (950 x 27)</li>
                  <li>Annual Saving: LKR 307 800 (25 650 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 58 369.23</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solax / Deye 10kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#b5a642"}} className="article">
            <h3>Brass Package</h3><br /><br />
            <img src={Logo6} alt="LogoCom3" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 900 - 975 kWh.</li>
                  <li>Total Saving per Month: LKR 24 300 (900 x 27)</li>
                  <li>Annual Saving: LKR 291 600 (24 300 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 55 035.90</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Growott / GoodWe 10kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
        </div><br /><br />

        <h3 className="capacity" style={{color: '#007bff'}}>- - Capacity : 20.00 kW - -</h3>
        <div className="articles">
          <div style={{backgroundColor: "#B9F2FF"}} className="article">
            <h3>Diamond Package</h3><br />
            <img src={Logo1} alt="LogoCom1" />
            <div className="article-details">
              <p>
                <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 3000 - 3500 kWh.</li>
                  <li>Total Saving per Month: LKR 81 000 (3000 x 27)</li>
                  <li>Annual Saving: LKR 972 000 (81 000 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 195 035.90</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro / Trina Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>SMA 20kW Inverter - Made in Germany</p>
                <ul>
                  <li>10 Year Product Warranty (Can Extend up to 25 Years)</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#E5E4E2"}} className="article">
            <h3>Platinum Package</h3><br />
            <img src={Logo2} alt="LogoCom2" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
              <ul>
                  <li>Expect Average Monthly Solar Energy: 3000 - 3500 kWh.</li>
                  <li>Total Saving per Month: LKR 81 000 (3000 x 27)</li>
                  <li>Annual Saving: LKR 972 000 (81 000 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 195 035.90</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro / Trina Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>ABB Fimer 20kW Inverter - Made in Italy</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#FFD700"}} className="article">
            <h3>Gold Package</h3><br />
            <img src={Logo3} alt="LogoCom3" />
            <div className="article-details">
            <p>
                <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 2200 - 2500 kWh.</li>
                  <li>Total Saving per Month: LKR 59 400 (2200 x 27)</li>
                  <li>Annual Saving: LKR 712 800 (59 400 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 141 702.56</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solis/ Huawei 20kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#C0C0C0"}} className="article">
            <h3>Silver Package</h3><br />
            <img src={Logo4} alt="LogoCom3" />
            <div className="article-details">
            <p>
             <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 2000 - 2200 kWh.</li>
                  <li>Total Saving per Month: LKR 54 000 (2000 x 27)</li>
                  <li>Annual Saving: LKR 648 000 (54 000 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 128 369.23</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solis 20kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#CD7F32"}} className="article">
            <h3>Bronze Package</h3><br />
            <img src={Logo5} alt="LogoCom3" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 1900 - 2100 kWh.</li>
                  <li>Total Saving per Month: LKR 51 300 (1900 x 27)</li>
                  <li>Annual Saving: LKR 615 600 (51 300 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 121 702.56</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solax / Deye 20kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#b5a642"}} className="article">
            <h3>Brass Package</h3><br /><br />
            <img src={Logo6} alt="LogoCom3" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 1800 - 2100 kWh.</li>
                  <li>Total Saving per Month: LKR 48 600 (1800 x 27)</li>
                  <li>Annual Saving: LKR 583 200 (48 600 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 115 035.90</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>30 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Growott / GoodWe 20kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
        </div><br /><br />

        <h3 className="capacity" style={{color: '#007bff'}}>- - Capacity : 40.00 kW - -</h3>
        <div className="articles">
          <div style={{backgroundColor: "#B9F2FF"}} className="article">
            <h3>Diamond Package</h3><br />
            <img src={Logo1} alt="LogoCom1" />
            <div className="article-details">
              <p>
                <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 6000 - 6500 kWh.</li>
                  <li>Total Saving per Month: LKR 222 000 (6000 x 37)</li>
                  <li>Annual Saving: LKR 2 664 000 (222 000 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 395 035.90</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro / Trina Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>20 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>SMA 20kW Inverter x 2 - Made in German</p>
                <ul>
                  <li>10 Year Product Warranty (Can Extend up to 25 Years)</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#E5E4E2"}} className="article">
            <h3>Platinum Package</h3><br />
            <img src={Logo2} alt="LogoCom2" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 6000 - 6500 kWh.</li>
                  <li>Total Saving per Month: LKR 222 000 (6000 x 37)</li>
                  <li>Annual Saving: LKR 2 664 000 (222 000 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 395 035.90</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro / Trina Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>20 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>ABB Fimer 20kW Inverter x 2 - Made in Italy</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#FFD700"}} className="article">
            <h3>Gold Package</h3><br />
            <img src={Logo3} alt="LogoCom3" />
            <div className="article-details">
            <p>
                <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 4400 - 4800 kWh.</li>
                  <li>Total Saving per Month: LKR 162 800 (4400 x 37)</li>
                  <li>Annual Saving: LKR 1 953 600 (162 800 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 288 369.23</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>Jinko N Type Neo / Tiger Pro Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>20 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solis 40kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#C0C0C0"}} className="article">
            <h3>Silver Package</h3><br />
            <img src={Logo4} alt="LogoCom3" />
            <div className="article-details">
            <p>
             <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 4000 - 4400 kWh.</li>
                  <li>Total Saving per Month: LKR 148 000 (4000 x 37)</li>
                  <li>Annual Saving: LKR 1 776 000 (148 000 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 261 702.56</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>20 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solis 40kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#CD7F32"}} className="article">
            <h3>Bronze Package</h3><br />
            <img src={Logo5} alt="LogoCom3" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 3800 - 4200 kWh.</li>
                  <li>Total Saving per Month: LKR 70 300 (3800 x 37)</li>
                  <li>Annual Saving: LKR 1 687 200 (140 600 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 248 369.23</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>20 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Solax / Deye 40kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
          <div style={{backgroundColor: "#b5a642"}} className="article">
            <h3>Brass Package</h3><br /><br />
            <img src={Logo6} alt="LogoCom3" />
            <div className="article-details">
            <p>
              <b style={{color: 'Black'}}>Expected Earning First Year :</b>
                <ul>
                  <li>Expect Average Monthly Solar Energy: 3600 - 3900 kWh.</li>
                  <li>Total Saving per Month: LKR 133 200 (3600 x 37)</li>
                  <li>Annual Saving: LKR 1 598 400 (133 200 x 12)</li>
                  <li>Recommend electricity bill covered by our system (Per Month): LKR 235 035.90</li>
                </ul>
                <b style={{color: 'Black'}}>Solar Modules :</b>
                <p>JA Solar Module</p>
                <ul>
                  <li>Manufactured in China</li>
                  <li>12 Year Product Warranty</li>
                  <li>20 Year Performance Guaranty</li>
                </ul>
                <b style={{color: 'Black'}}>Inverter Type :</b>
                <p>Growott / GoodWe 40kW Inverter - Made in China</p>
                <ul>
                  <li>10 Year Product Warranty</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div><br />
    </div>
  );
};

export default Solar;
