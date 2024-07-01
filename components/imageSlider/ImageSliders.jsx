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
        'Learn from seasoned professionals in sales, entrepreneurship, and business management through engaging sessions offering insights and practical wisdom for success in the field.',
        heading:'Funtamentals of Business Development'
    },
    {
      image: '/images/about/placement.jpg',
      description:
        'Collaborate with peers to share experiences, insights, and best practices, fostering a dynamic learning environment where collective knowledge enhances individual growth.',
         heading:'Outbound Training for Immediate Placement'
    },
    {
      image: '/images/about/Ent.jpg',
      description:
        'Master sales techniques, client management, and lead generation strategies through expert-led sessions and immersive practical exercises, equipping you with the skills needed for effective salesmanship.',
         heading:'Business Development and Entrepreneurship'
    },
    {
      image: '/images/about/startup.png',
      description:
        'Experience practical application of theories with interactive modules covering sales, communication, project management, and financial planning, ensuring hands-on skill development for real-world scenarios.',
         heading:'Foundational Kit for Startup founders'
    },
    {
      image: '/images/about/campustoc.png',
      description:
        'Gain invaluable real-world experience and mentorship during a month-long internship, where you ll apply learned skills in actualbusiness settings, solidifying your understanding and preparing you for professional success.',
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
                <p>Show Details</p>
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
