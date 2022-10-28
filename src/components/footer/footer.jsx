import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import { useState } from 'react'


const footer = () => {
  
  return (
    <footer>
      <a href='#' className='footer__logo'>ALAN</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials' >Testimonials</a></li>
        <li><a href='#contact' >Contact</a></li>
      </ul>
     
      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/alan-martinez-871202228/'> <AiFillLinkedin/> </a>
        <a href='https://github.com/Cozylillowcas'> <AiFillGithub/> </a>
        <a href='https://twitter.com/AlanLovesToCode'> <AiOutlineTwitter/> </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Alan Martinez. ALL rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer