import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import Link from 'next/link';

import './ImageSliders.css';
import './ImageSlider.css';

const ImageSlider = () => {
  const slides = [
    {
      image: '/images/about/campus.jpg',
      
    },
    {
      image: '/images/about/campus01.jpg',
      
    },
    {
      image: '/images/about/campus02.jpg',
      
    },
    {
      image: '/images/about/campus01.jpg',
      
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]); // Re-run effect when slides.length changes

  return (
    <div className="containers">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_containers"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        initialSlide={activeIndex}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={index === activeIndex ? 'active' : ''}>
            <div className="slide-contents">
              <img src={slide.image} alt={`slide_images_${index}`} />
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrows">
            <IoIosArrowDropleftCircle />
          </div>
          <div className="swiper-button-next slider-arrows">
            <IoIosArrowDroprightCircle />
          </div>
        </div>
      </Swiper>
      
    </div>
  );
};

export default ImageSlider;
