import React from 'react'
import './about.css'
import ME from '../../assets/ME.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import {useState} from 'react'

const About = () => {
    const [activeTest, setActiveTest] = useState('#testimonals');
    return (
        <section id='about'>
            {/* <h5>Get to know</h5> */}
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME}
                            alt="about image"/>
                    </div>
                </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>9 Months</small>
                        </article>
                        <a id='no-underline' href='#testimonials'
                            onClick={
                                () => setActiveTest('#testimonials')
                            }
                            className={
                                activeTest === '#testimonials' ? 'active' : ''
                        }>

                            <article className='about__card'>
                                <FiUsers className='about__icon'/>
                                <h5>Testimonials</h5>
                                <small>4 poeple</small>
                            </article>
                        </a>
                        <a className='no-underline' href='https://github.com/12alanmartinez?tab=repositories' target="_blank" rel="noreferrer">
                            <article className='about__card'>
                                <VscFolderLibrary className='about__icon'/>
                                <h5>Projects</h5>
                                <small>20+ projects</small>
                            </article>
                        </a>
                    </div>
                    <p>
                        Hi! my name is Alan and I enjoy building, solving complex problems, and creating things that live on the internet. My interest in web development started in early 2022 when I used the inspector tool to see how a Nike landing page was built and taught myself a few HTML, CSS, and JavaScript before I started my education at the 4Geeks Academy Boot Camp.
                        <br></br>
                        <br></br>
                        Now a Graduate of the Full-Stack Web Development program, at 4Geeks Academy I have learned the latest software Even with my limited experience, I've gained substantial hands-on experience by completing various projects using the latest software engineering technologies and methodologies.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About
