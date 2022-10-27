import React from 'react'
import './testimonals.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
{
  avatar: AVTR1,
    name: 'mark tewee',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet minima eligendi,'
},
{
  avatar: AVTR2,
    name: 'tina snow',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet minima eligendi,'
},
{
  avatar: AVTR3,
    name: 'jordan carter',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet minima eligendi,'
},
{
  avatar: AVTR4,
    name: 'chris lee',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet minima eligendi,'
},
]




const testimonals = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonals</h2>

      <Swiper className="container testimonals__container" // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.map(({avatar,name,review}, {index}) => {
          return(
            <SwiperSlide key={index} className="testimonal">
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">
              {review}
            </small>
          </SwiperSlide>
          )
        })
       }
       
      </Swiper>
    </section>
  )
}

export default testimonals