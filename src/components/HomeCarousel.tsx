import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import zenkitchen1 from '../assets/sliding1.png';
import zenkitchen2 from '../assets/sliding2.png';
import zenkitchen3 from '../assets/sliding3.png';
import zenkitchen4 from '../assets/sliding4.png';

export default function HomeCarousel() {
  const slides = [
    {
      image: zenkitchen1,
      title: "Modern Glass Solutions",
      subtitle: "Transform your space with elegant glass installations"
    },
    {
      image: zenkitchen2,
      title: "Premium Aluminum Works",
      subtitle: "Quality craftsmanship for lasting beauty"
    },
    {
      image: zenkitchen3,
      title: "Innovative Designs",
      subtitle: "Where creativity meets functionality"
    },
    {
      image: zenkitchen4,
      title: "Innovative Designs",
      subtitle: "Where creativity meets functionality"
    }
  ];

  return (
    <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop={true}
    className="w-full h-auto sm:h-screen pt-20 sm:pt-24"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-auto">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-auto sm:h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  
  
  );
}