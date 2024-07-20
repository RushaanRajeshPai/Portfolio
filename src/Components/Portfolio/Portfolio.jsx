import React from 'react'
import './Portfolio.css'
import line from '../Assets/line.png'
import coffee from '../Assets/coffee.png'
import digi from '../Assets/digi.png'
import gig from '../Assets/gig.png'
import fin from '../Assets/fin.png'
import dash from '../Assets/dash.png'
import str from '../Assets/str.png'
import webb from '../Assets/webb.png'

const Portfolio = () => {
  return (
    <div id='portfolio' className='section'>
      <h1 id='porth1'><span>PORTFOLIO</span></h1>
      <div id='line1'><img src={line} alt="" /></div>
      <h2 id='porth2'>NOTEWORTHY <span>PROJECTS</span></h2>
      <div className='projects'>
        <div className='projrow1'>
          <div className='proj1'>
            <div><img src={gig} alt="" id='gig'/></div>
            <h2 id='projh2'>GIGNATION</h2>
            <h4 id='projh4'>A company that connects freelancers with <br />diverse and flexible projects</h4>
          </div>
          <div className='proj1'>
            <div><img src={digi} alt="" id='gig'/></div>
            <h2 id='projh2'>DIGITAL AGENCY</h2>
            <h4 id='projh4'>A digital agency company specializing in innovative <br /> marketing, design, and development solutions</h4>
          </div>
          <div className='proj1'>
            <div><img src={fin} alt="" id='fin' /></div>
            <h2 id='projh2'>FINANCY</h2> 
            <h4 id='projh4'>A fintech company revolutionizing financial services <br /> with cutting-edge technology solutions</h4>
          </div>
        </div>
        <div className='projrow2'>
          <div className='proj1'>
            <div><img src={webb} alt="" id='gig' /></div>
            <h2 id='projh2'>TRIPLOIN</h2>
            <h4 id='projh4'>A company pioneering innovative AI tools for <br />next-generation technology solutions</h4>
          </div>
          <div className='proj1'>
            <div><img src={dash} alt="" id='gig' /></div>
            <h2 id='projh2'>ADMIN DASHBOARD</h2> 
            <h4 id='projh4'>An admin dashboard streamlining data manage- <br />ment and system monitoring efficiently</h4>
          </div>
          <div className='proj1'>
            <div><img src={coffee} alt="" id='gig' /></div>
            <h2 id='projh2'>BEAN BLISS CAFE</h2>           
            <h4 id='projh4'>A coffee shop website showcasing menu, <br />locations, and online ordering.</h4>
          </div>
        </div>
      </div>
      <h2 id='porth2a'>TECH <span>EXPERIENCE</span></h2>
      <div className='experience'>
        <div className='exp1'>
          <h1 id='exph1'><span>1.5</span></h1>
          <h2 id='exph2'>Years of Experience</h2>
        </div>
        <div><img src={str} alt="" id='str'/></div>
        <div className='exp1'>
          <h1 id='exph1'><span>5+</span></h1>
          <h2 id='exph2'>Websites</h2>
        </div>
        <div><img src={str} alt=""id='str' /></div>
        <div className='exp1'>
          <h1 id='exph1'><span>2</span></h1>
          <h2 id='exph2'>Hackathons</h2>
        </div>
        <div><img src={str} alt="" id='str'/></div>
        <div className='exp1'>
          <h1 id='exph1'><span>2</span></h1>
          <h2 id='exph2'>Internships</h2>
        </div>
      </div>
    </div>
  )
}

export default Portfolio