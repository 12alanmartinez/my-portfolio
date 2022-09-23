import React from 'react'
import './about.css'
import ME from '../../assets/ME.jpg'
import{FaAward} from "react-icons/fa"

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="about image"/>
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiences</h5>
              <small>3+ Years Work</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiences</h5>
              <small>3+ Years Work</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiences</h5>
              <small>3+ Years Work</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about