import React from 'react'
import './testimonals.css'
import AVTR1 from '../../assets/Bavatar.jpg'
import AVTR2 from '../../assets/Kavatar.jpg'
import AVTR3 from '../../assets/Pavatar.jpg'
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
    name: 'Brandon Fernandez Creed',
      review: ' I have had the pleasure of seeing Alan grow as a developer. He has such a passion for programming which is clearly seen through his ability to persevere on challenging problems. It is evident he has a natural talent for this field which he supplements with hard work to create complex applications. He would make a great addition to any team in need of a talented software developer.'
},
{
  avatar: AVTR2,
    name: 'Karla Cuevas',
      review: ' Alan is a hard-working person who can tackle any problem with ease. During the bootcamp he was a dedicated student who always seemed eager to learn more. I highly recommend him to anyone looking for a full-stack developer.'
},
{
  avatar: AVTR3,
    name: ' Paola Sanchez ',
      review: ' Seeing Alan grow as an aspiring developer in the 4Geeks academy software developer course to becoming a software developer made me think about how dedicated and passionate he is for evolving his craft & skills to the next level. He has a passion for programming and fixing issues in his code & coding all of it from scratch. His portfolio website is an example of how great his skills has evolved and how designing a world class website portfolio is key for showing off his skills he acquired during his bootcamp & having a portfolio to show off his work he has done over the months. I highly recommend Alan to be an addition to any team in need of a talented software developer. '
},
{
  avatar: AVTR4,
    name: 'Nicholas Sisneros',
      review: 'Alan is a creative guy with an eye for design and art. During the class we often worked together on projects and solving algorithm problems. He always worked hard and had interesting solutions to our problems!'
},
]





const testimonials = () => {
  return (
    <section id='testimonials'>
      {/* <h5>Reviews from mentors & classmates</h5> */}
      <h2>Testimonials</h2>

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
              <img alt='' src={avatar}/>
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

export default testimonials