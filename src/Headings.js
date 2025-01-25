import React from 'react'
import './Headings.css'
import Img1 from '../src/head1.png'
import Img2 from '../src/head2.png'
import Img3 from '../src/head3.png'

const Headings = () => {
  return (
    <section className="heading-section">
      <div className="cards">
        <div className="card">
        <a href="/solar"><img src={Img1} alt="RoofTop" /></a>
          <h3>Rooftop Solar Installation</h3>
          <p>Rooftop solar installation provides clean energy for your home or business, cutting electricity costs and promoting sustainability.</p>
        </div>
        <div className="card">
        <a href="/solar"><img src={Img2} alt="Ground" /></a>
          <h3>Ground Mounted Solar Installation</h3>
          <p>Ground-mounted solar installation offers efficient, clean energy for your property and reducing electricity costs sustainably.</p>
        </div>
        <div className="card">
        <a href="/construction"><img src={Img3} alt="Construction" /></a>
          <h3>Building Constructions</h3>
          <p>Building construction services deliver quality, durable structures tailored to your needs, ensuring safety, and lasting value.</p>
        </div>
      </div>
    </section>
  )
}

export default Headings