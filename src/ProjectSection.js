import React from 'react'
import './ProjectSection.css'
import Pic1 from '../src/img1.jpg'
import Pic2 from '../src/img2.jpg'
import Pic3 from '../src/img3.jpg'

const ProjectSection = () => {
  return (
    <section className="project-section">
      <h2>OUR PROJECTS</h2>
      <h3>EXPLORE OUR RECENT PROJECTS</h3>
      <div className="project-images">
        <div className="project-cards">
          <a href="/solar"><img src={Pic1} alt="" /></a>
        </div>
        <div className="project-cards">
          <a href="/construction"><img src={Pic2} alt="" /></a>
        </div>
        <div className="project-cards">
          <a href="solar"><img src={Pic3} alt="" /></a>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection