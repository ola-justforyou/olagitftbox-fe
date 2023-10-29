import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../SwiperCards/style.css';

// import required modules
import { EffectCards } from 'swiper/modules';
const SwiperCards = (props) => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'
        style={{
          position: 'fixed',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '999',
          width: '330px',
          height: '240px',
        }}
      >
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '18px',
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '18px',
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '18px',
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '18px',
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Slide 4
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '18px',
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Slide 5
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '18px',
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Slide 6
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '18px',
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Slide 7
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '18px',
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Slide 8
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '18px',
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Slide 9
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCards;
