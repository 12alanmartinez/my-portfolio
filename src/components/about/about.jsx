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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus,
            aliquid iste eos fugit vero nemo voluptatibus repellendus nihil quo quos
            repellat, deserunt, unde quasi placeat voluptas ipsum eaque? Nulla, harum!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about