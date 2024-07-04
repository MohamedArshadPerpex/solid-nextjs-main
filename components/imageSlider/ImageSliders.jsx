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
      image: '/images/about/31.png',
      description:
        'Master the Art of Business Growth: Strategize, Execute, Succeed PerpeX equips you with essential skills in sales, negotiation, and partnership building. Learn to craft winning pitches, handle objections, and analyze risks through expert-led sessions and real-world scenarios. Our blend of online and offline training ensures a comprehensive learning experience.',
        heading:'Funtamentals of Business Development',
        points: [
          'Practical Expertise: Apply learned skills in actual business settings through on-the-job training.',
          'Industry Insights: Learn from seasoned professionals in sales and entrepreneurship.',
          'Career Advancement: Position yourself for executive roles or entrepreneurial success.'
        ]
    },
    {
      image: '/images/about/30.png',
      description:
        'Collaborate with peers to share experiences, insights, and best practices, fostering a dynamic learning environment where collective knowledge enhances individual growth.',
         heading:'Outbound Training for Immediate Placement',
         points: [
          'Reduced Time-to-Hire: Attract and assess qualified candidates quickly, filling open positions faster.',
          'Improved Candidate Experience: Streamline communication and engagement, creating a positive employer brand.',
          'Cost-Effective Hiring: Reduce wasted resources and focus efforts on attracting top talent.'
        ]
    },
    {
      image: '/images/about/33.png',
      description:
        'Transform Your Business Acumen: Innovate, Lead, Thrive PerpeX offers a comprehensive program blending theory with hands-on experience. Develop critical skills in client management, lead generation, and project planning. Our peer-to-peer learning design fosters collaboration and knowledge sharing among diverse professionals.',
         heading:'Professional Certificate in Business Development and Entrepreneurship',
         points: [
          'Holistic Skill Set: Balance theoretical knowledge with practical application through immersive exercises.',
          'Network Building: Collaborate with peers and industry experts to expand your professional connections.',
          'Entrepreneurial Readiness: Gain the confidence and skills to launch and grow your own venture.'
        ]
    },
    {
      image: '/images/about/34.png',
      description:
        'Experience practical application of theories with interactive modules covering sales, communication, project management, and financial planning, ensuring hands-on skill development for real-world scenarios.',
         heading:'Foundational Kit for Startup founders',
         points: [
          'Reduced Time-to-Hire: Attract and assess qualified candidates quickly, filling open positions faster.',
          'Improved Candidate Experience: Streamline communication and engagement, creating a positive employer brand.',
          'Cost-Effective Hiring: Reduce wasted resources and focus efforts on attracting top talent.'
        ]
    },
    {
      image: '/images/about/35.png',
      description:
        'Gain invaluable real-world experience and mentorship during a month-long internship, where you ll apply learned skills in actualbusiness settings, solidifying your understanding and preparing you for professional success.',
         heading:'LevelUP : Campus to Corporate',
         points: [
          'Reduced Time-to-Hire: Attract and assess qualified candidates quickly, filling open positions faster.',
          'Improved Candidate Experience: Streamline communication and engagement, creating a positive employer brand.',
          'Cost-Effective Hiring: Reduce wasted resources and focus efforts on attracting top talent.'
        ]
    },

  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null); // Changed to null initially

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]); // Re-run effect when slides.length changes

  const handlePopup = (slide) => {
    setPopupContent(slide);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="containermain">
      <h1>Business Solutions</h1>
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
            <div className="slide-contents">
              <img src={slide.image} alt={`slide_image_${index}`} onClick={() => handlePopup(slide)} />
              <div className={`overlay ${index === activeIndex ? 'active' : ''}`} onClick={() => handlePopup(slide)}>
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
        <div className="slider-controllers">
          <div className="swiper-button-prev slider-arrow">
            <IoIosArrowDropleftCircle />
          </div>
          <div className="swiper-button-next slider-arrow">
            <IoIosArrowDroprightCircle />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      {showPopup && popupContent && (
        <div className="popups">
          <div className="popup-content">
            <span className="close-popup" onClick={closePopup}>
              &times;
            </span>
            <div className="popup-description">
              <h6>{popupContent.heading}</h6>
              <p>{popupContent.description}</p>
            </div>
            <div className="points">
            <div className="points-shown">
              <h4>The Result?</h4>
              <ul>
                {popupContent.points.map((point, idx) => (
                  <li key={idx} className='main-li'>○{point}</li>
                ))}
              </ul>
            </div>
            <div className="image-left">
              <img src={popupContent.image} alt={`popup_image_${activeIndex}`} className="popup-image" />
              <Link href='/support'><button className='main-button'>join now</button></Link>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSliders;
