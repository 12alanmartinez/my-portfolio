import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonals'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
// import Loadingscreen from '../src/components/loadingWindow/loadingwindow'

const app = () => {
  return (
    <>
      {/* <Loadingscreen /> */}
      <Nav />
      <Header />
      <About />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
};

export default app;