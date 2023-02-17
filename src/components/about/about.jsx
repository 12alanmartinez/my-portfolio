import React from 'react'
import './about.css'
import ME from '../../assets/ME.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiences</h5>
              <small>9 Months</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Testimonials</h5>
              <small>4 poeple</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>projects</h5>
              <small>20 completed projects</small>
            </article>
          </div>
          <p>Hi, my name is Alan and I am a software developer from Arlington, Texas. My favorite coding languages are react.js, CSS, three.js, and python. The Languages, frameworks, and technologies I have more expertise in are HTML5, CSS, Javascript, Python, React.js, Flask, APIS, SQLAlchemy, SQL, and Bootstrap. I have built multiple web-based, multi-threaded, front-end, and back-end applications while using the latest coding web application languages. With the completion of a Full-Stack web developer certification course, I am an eager and passionate software developer for creating interactive web and app designs that eliminate end-user frustrations, I'm excited to expand my knowledge base, curiosity, and test the limits of the programming skills I've accrued over the past year, currently, I am building a personalized Spotify visual data app & copywriting my portfolio website.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about