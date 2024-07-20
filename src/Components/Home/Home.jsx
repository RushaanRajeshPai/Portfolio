// SentenceChanger.jsx
import React, { useState, useEffect } from 'react';
import './Home.css';
import banner from '../Assets/banner.png'
import linkedin from '../Assets/linkedin.png'
import ig from '../Assets/ig.png'
import github from '../Assets/github.png'

const sentences = [
    "I am a Front-end Web Developer.",
    "I am also a ML Developer.",
    "Let's create something amazing together !!!"
];

const Home = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fading out
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
                setFade(true); // Start fading in
            }, 500); // Match the CSS transition duration
        }, 3000); // Interval duration for sentence change

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="home" className="section">
            <div className='homemain1'>
                <div className='homeleft'>
                    <h2 id='homeh2'>Hey, It's me</h2>
                    <h1 id='homeh1'>Rushaan Pai</h1>
                    <p id='homeh3'>Based in Mumbai</p>
                    <div className="homesocial">
                        <a href="https://in.linkedin.com/in/rushaan-pai-93aa55265" target="_blank" rel="noopener noreferrer">
                            <div><img src={linkedin} alt="LinkedIn" className="social-icon" id='linkedin'/></div>
                        </a>
                        <a href="https://github.com/RushaanRajeshPai" target="_blank" rel="noopener noreferrer">
                            <div><img src={github} alt="GitHub" className="social-icon" id='github'/></div>
                        </a>
                        <a href="https://www.instagram.com/rushaannn_?igsh=MXA0aWZuMThnejdvag==" target="_blank" rel="noopener noreferrer">
                            <div><img src={ig} alt="Instagram" className="social-icon" id='ig'/></div>
                        </a>
                    </div>
                    <a href="/assets/RESUME.pdf">
                        <button id='homebtndownload'><strong>Download CV</strong></button>
                    </a>
                </div>
                <div className='homeright'>
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className={`sentence ${fade ? 'fade-in' : 'fade-out'}`}>
                {sentences[index]}
            </div>
        </div>
    );
};

export default Home;

