import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../../src/assets/me.png'
import HeaderSocials from './HeaderSocials'
import Socialnavbar from './socialnavbar'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <Socialnavbar/>
        <HeaderSocials />
        <h5 >Hello I'm</h5>
        <h1>Alan Martinez</h1>
        <h5 className="text-light">
          Full-stack Web Developer
        </h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header