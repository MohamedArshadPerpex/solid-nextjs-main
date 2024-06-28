import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import Link from 'next/link';

import './ImageSliders.css';

const ImageSliders = () => {
  const slides = [
    {
      image: '/images/about/development.jpg',
      description:
        'PerpeX streamlines your recruitment process, helping you meet staffing needs efficiently. Our solution utilizes automation to identify top talent, optimize candidate interactions, and land the perfect fit for your open positions. We guide candidates seamlessly through the application process, ensuring a positive experience and faster hiring times.',
        heading:'Funtamentals of Business Development'
    },
    {
      image: '/images/about/placement.jpg',
      description:
        'PerpeX empowers you to switch to organic marketing, a strategic approach for attracting customers naturally. We guide you in developing compelling content, fostering brand loyalty, and building a thriving online presence. Our data-driven strategies help you identify target audiences, optimize content for search engines, and cultivate long-term customer engagement.',
         heading:'Outbound Training for Immediate Placement'
    },
    {
      image: '/images/about/Ent.jpg',
      description:
        'PerpeX equips your sales team with the skills and knowledge they need to excel. Our data-driven training programs combine proven strategies with practical application to boost individual and team performance. We customize programs to your specific industry and sales goals, ensuring your team is equipped to navigate the modern sales landscape.',
         heading:'Business Development and Entrepreneurship'
    },
    {
      image: '/images/about/startup.png',
      description:
        'Stop Wasting Resources on Unqualified Leads! PerpeX unveils strategies to dramatically reduce your Customer Acquisition Cost (CAC). Discover how to leverage a winning combination of Customer Relationship Management (CRM) and Interactive Voice Response (IVR) systems to effectively manage your leads and convert them into loyal customers.',
         heading:'Foundational Kit for Startup founders'
    },
    {
      image: '/images/about/campustoc.png',
      description:
        'PerpeX helps you redesign your sales funnel for maximum efficiency. Discover a data-driven approach to identify leaks, optimize touchpoints, and convert more leads into paying customers. We guides prospects effortlessly from awareness to purchase through a customized Automated workflow suitable for your Business Model.',
         heading:'LevelUP : Campus to Corporate'
    },

  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]); // Re-run effect when slides.length changes

  const handlePopup = (description) => {
    setPopupContent(description);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
        Job Ready Programme
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
        className="swiper_container"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        initialSlide={activeIndex}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={index === activeIndex ? 'active' : ''}>
            <div className="slide-content">
              <img src={slide.image} alt={`slide_image_${index}`} />
              <div className={`overlay ${index === activeIndex ? 'active' : ''}`} onClick={() => handlePopup(slide.description)}>
                <p>{slide.description}</p>
              </div>
              <Link href="/support">
                <button className="enquiry-button">
                  Enquiry Now
                </button>
              </Link>
              <p className='headings'>{slide.heading}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <IoIosArrowDropleftCircle />
          </div>
          <div className="swiper-button-next slider-arrow">
            <IoIosArrowDroprightCircle />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-popup" onClick={closePopup}>
              &times;
            </span>
            <div className="popup-description">
              <p>{popupContent}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSliders;
