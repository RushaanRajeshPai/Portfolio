import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbarmain'>
      <h2 id='navh2'>RUSHAAN PAI</h2>
      <div className='navtags'>
        <ul>
          <li><Link to="home" smooth={true} duration={500} id='navp'>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} id='navp'>About Me</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} id='navp'>Portfolio</Link></li>
          <li><Link to="skills" smooth={true} duration={500} id='navp'>Skills</Link></li>
          <li><Link to="contact" smooth={true} duration={500} id='navp'>Contact</Link></li>
        </ul>
      </div>
      <button id='navbtn'><strong>Hire Me</strong></button>
    </div>
  )
}

export default Navbar