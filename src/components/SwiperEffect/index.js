import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import '../SwiperEffect/style.css';
import Soto from '../../assets/images/soto.jpeg';
import Seblak from '../../assets/images/seblak.jpeg';
import { EffectCreative, Pagination } from 'swiper/modules';

const SwiperEffect = (props) => {
  const arr = [
    { id: 1, image: <img src={Soto}></img> },
    { id: 2, image: <img src={Seblak}></img> },
    { id: 3, image: <img src={Soto}></img> },
  ];
  return (
    <>
      <Swiper
        pagination={true}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Pagination]}
        className='mySwiper3'
      >
        {arr.map((banner) => (
          <SwiperSlide>{banner.image}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperEffect;
