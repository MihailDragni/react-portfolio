import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: Avt1,
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus error odio, recusandae sapiente molestiae rerum possimus saepe sit iusto eaque ipsum asperiores architecto eveniet ex! Quia labore ea odio!',
  },
  {
    avatar: Avt2,
    name: 'Shata Wale',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero cum aspernatur impedit nemo tenetur?',
  },
  {
    avatar: Avt3,
    name: 'Kwame Despite',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo nisi voluptas quod soluta autem, unde aperiam doloribus expedita, illo, alias ipsum! Quisquam, excepturi illum.',
  },
  {
    avatar: Avt4,
    name: 'Nana Ama McBrown',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus similique recusandae enim eveniet corrupti iusto necessitatibus labore! Natus, cumque distinctio voluptatem eveniet, iusto eligendi cum corporis praesentium exercitationem tempore iste et. Sapiente?',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="testimonials__container container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // autoHeight={false}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials__item client">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
