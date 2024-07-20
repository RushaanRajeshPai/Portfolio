import React from 'react'
import './About.css'
import profile from '../Assets/profile.jpg'
import line from '../Assets/line.png'

const About = () => {
    return (
        <div id="about" className="section">
            <div className='abouthead'>
                <h1 id='abouth1'>About <span>Me</span></h1>
                <div id='line'><img src={line} alt=""  /></div>
            </div>
            <div className='aboutcontent'>
                <div className='aboutleft'>
                <img src={profile} alt="" id='profile' />
                </div>
                <div className='aboutright'>
                    <h1 id='abrh1'>Web Developer <span>and</span> ML Enthusiast</h1>
                    <p id='abrp'>I am a passionate Web Developer and Machine Learning enthusiast, dedicated to creating <br />innovative web solutions and exploring the vast possibilities of artificial intelligence. With <br /> a strong foundation in front-end development, I enjoy building static, user-friendly applications <br />by using technologies like <span>HTML, CSS, JavaScript, ReactJS</span>. My journey in Machine Learning <br /> enhances my problem-solving skills, allowing me to develop intelligent systems that improve <br /> user experience and drive technological advancement.</p>
                    <p id='abrp'>Thus my expertise in these fields drives my passion for creating impactful, user-centric solutions <br /> that harness technology to solve complex problems and enhance digital experiences.</p>
                </div>
            </div>
        </div>
    )
}

export default About