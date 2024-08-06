import React from 'react'
import './Profile.css'
import '../style.css'
import '../media.css'

import profile from '../../assets/profile-pic.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img  src={profile} alt="Sooraj lal profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sooraj Lal M</h1>
        <p className="section__text__p2">Full-Stack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('./assets/resume-example.pdf')}
          >
            Download CV
          </button>
          <button className="btn btn-color-1 btn-lg" onClick={() => window.location.href='#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.open('https://linkedin.com/', '_blank')}
          />
          <img
            src={github}
            alt="My Github profile"
            className="icon"
            onClick={() => window.open('https://github.com/SOORAJ-006', '_blank')}

          />
        </div>
      </div>
    </section>
  )
}

export default Profile