import React from 'react'
import './Projects.css'
import '../style.css'
import '../media.css'
import project1 from '../../assets/project-1.png'
import arrow from '../../assets/arrow.png'
import ProjectCard from '../cards/ProjectCard'

import {project_data} from '../../data/projectData'



const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          
           
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='#contact'}
      />

      <div className='row'>

      {project_data.map((project) => (
        <div className='col-lg-6 col-md-6 col-sm-12 mb-5 d-flex justify-content-center align-items-center'>

          <ProjectCard image = {project.image} git={project.github} live={project.live}/>
        </div>
      ))}
      </div>

    </section>
  )
}

export default Projects