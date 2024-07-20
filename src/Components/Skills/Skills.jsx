import React from 'react'
import './Skills.css'
import line from '../Assets/line.png'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import js from '../Assets/js.png'
import reactjs from '../Assets/reactjs.png'
import ml from '../Assets/ml.png'
import figma from '../Assets/figma.png'
import c from '../Assets/c.png'
import py from '../Assets/py.png'
import java from '../Assets/java.png'

const Skills = () => {
    return (
        <div id='skills' className='section'>
            <h1 id='skillsh1'><span>SKILLS</span></h1>
            <div id='line1'><img src={line} alt="" /></div>
            <h2 id='porth2'>DEVELOPMENT <span>SKILLS</span></h2>
            <div className='dev'>
                <div className='devr1'>
                    <div className='dev1'>
                        <div><img src={html} alt="" id='html' /></div>
                        <h2 id='devh2'>HTML</h2>
                    </div>
                    <div className='dev1'>
                        <div><img src={css} alt="" id='html' /></div>
                        <h2 id='devh2'>CSS</h2>
                    </div>
                    <div className='dev1'>
                        <div><img src={js} alt="" id='html' /></div>
                        <h2 id='devh2'>JavaScript</h2>
                    </div>
                </div>
                <div className='devr2'>
                    <div className='dev1'>
                        <div><img src={reactjs} alt="" id='html' /></div>
                        <h2 id='devh2'>React</h2>
                    </div>
                    <div className='dev1'>
                        <div><img src={ml} alt="" id='ml' /></div>
                        <h2 id='devh2'>ML</h2>
                    </div>
                    <div className='dev1'>
                        <div><img src={figma} alt="" id='figma' /></div>
                        <h2 id='devh2'>Figma</h2>
                    </div>
                </div>
            </div>
            <h2 id='porth2a'>PROGRAMMING <span>LANGUAGES</span></h2>
            <div className='corer1'>
                <div className='dev2'>
                    <div><img src={c} alt="" id='c' /></div>
                    <h2 id='x'>C++</h2>
                </div>
                <div className='dev2'>
                    <div><img src={java} alt="" id='c' /></div>
                    <h2 id='x'>Java</h2>
                </div>
                <div className='dev2'>
                    <div><img src={py} alt="" id='c' /></div>
                    <h2 id='x'>Python</h2>
                </div>
            </div>
        </div>
    )
}

export default Skills