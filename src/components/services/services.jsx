import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      {/* <h5>What I Offer</h5> */}
      <h2>Services</h2>

      <div className="container services__container" >
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Website Design.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Mobile app design.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>User experience.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Responsive Design.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Interaction design.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Tailored Design for you.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Visual appealing, polished, and professional.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Web Design.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Web Development Support and Maintenance.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Web Programming.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>web hosting.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Web Optimization.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/}

        <article className='service'>
          <div className="service__head">
            <h3>Photography</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Editorial Photography.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Advertising Photography.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Portait Photography.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Event Photography.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Family Photography.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Baby Photography.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Landscape Photography.</p>
            </li>
          </ul>
        </article>
        {/* END OF photography */}
      </div>
    </section>
  )
}

export default services