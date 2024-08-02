import React from 'react'
import './NavBar.css'
import '../style.css'
import '../media.css'

const NavBar = () => {
  const toggleMenu = () => {
    document.querySelector(".menu-links").classList.toggle("active");
  };

  return (
    <>
        <nav id="desktop-nav">
        <div className="logo">Sooraj Lal M</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Sooraj Lal M</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar