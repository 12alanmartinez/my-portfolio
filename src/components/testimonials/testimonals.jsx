import React from 'react'
import './testimonals.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const testimonals = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonals</h2>

      <div className="container testimonals__container">
        <article className="testimonal">
          <div className="client__avatar">
            <img src={AVTR1} alt='avatar one' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet minima eligendi,
          </small>
        </article>
        <article className="testimonal">
          <div className="client__avatar">
            <img src={AVTR1} alt='avatar one' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet minima eligendi,
          </small>
        </article>
        <article className="testimonal">
          <div className="client__avatar">
            <img src={AVTR1} alt='avatar one' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet minima eligendi,
          </small>
        </article>
        <article className="testimonal">
          <div className="client__avatar">
            <img src={AVTR1} alt='avatar one' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet minima eligendi,
          </small>
        </article>
      </div>
    </section>
  )
}

export default testimonals