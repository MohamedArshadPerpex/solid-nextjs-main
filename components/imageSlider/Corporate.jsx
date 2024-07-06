import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import Link from 'next/link';

import './ImageSliders.css';

const Corporate = () => {
  const slides = [
    {
      image: '/images/about/sales.jpg',
      description:
        'PerpeX streamlines your recruitment process, helping you meet staffing needs efficiently. Our solution utilizes automation to identify top talent, optimize candidate interactions, and land the perfect fit for your open positions. We guide candidates seamlessly through the application process, ensuring a positive experience and faster hiring times.',
      heading: 'Meet Your Staffing Needs',
      points: [
        'Reduced Time-to-Hire: Attract and assess qualified candidates quickly, filling open positions faster.',
        'Improved Candidate Experience: Streamline communication and engagement, creating a positive employer brand.',
        'Cost-Effective Hiring: Reduce wasted resources and focus efforts on attracting top talent.'
      ]
    },
    {
      image: '/images/about/14.png',
      description:
        'PerpeX empowers you to switch to organic marketing, a strategic approach for attracting customers naturally. We guide you in developing compelling content, fostering brand loyalty, and building a thriving online presence. Our data-driven strategies help you identify target audiences, optimize content for search engines, and cultivate long-term customer engagement.',
      heading: 'Lets Crack the  CAC',
      points: [
        'Reduced Customer Acquisition Cost: By focusing on qualified leads, you spend less time and resources on chasing the wrong prospects.',
        'Increased Conversion Rates: Nurtured leads are more likely to convert into paying customers, boosting your ROI.',
        'Improved Sales Efficiency: Your sales team spends less time qualifying leads and more time closing deals.'
      ]
    },
    {
      image: '/images/about/15.png',
      description:
        'PerpeX equips your sales team with the skills and knowledge they need to excel. Our data-driven training programs combine proven strategies with practical application to boost individual and team performance. We customize programs to your specific industry and sales goals, ensuring your team is equipped to navigate the modern sales landscape.',
      heading: 'Ignite Your Sales Engine',
      points: [
        'Increased Sales Performance: Confident and skilled salespeople drive higher revenue.',
        'Improved Win Rates: A strategic approach leads to more closed deals.',
        'Enhanced Customer Relationships: Build stronger connections that foster long-term loyalty.'
      ]
    },
    {
      image: '/images/about/16.png',
      description:
        'Stop Wasting Resources on Unqualified Leads! PerpeX unveils strategies to dramatically reduce your Customer Acquisition Cost (CAC). Discover how to leverage a winning combination of Customer Relationship Management (CRM) and Interactive Voice Response (IVR) systems to effectively manage your leads and convert them into loyal customers.',
      heading: 'Redesign Your Sales Funnel',
      points: [
        'Increased Conversion Rates: A frictionless sales funnel leads to more qualified leads converting into customers.',
        'Improved Sales Efficiency: Your team spends less time chasing leads and more time closing deals.',
        'Measurable ROI: Track results and make data-driven decisions to continuously refine your sales funnel.'
      ]
    },
    {
      image: '/images/about/18.png',
      description:
        'PerpeX helps you redesign your sales funnel for maximum efficiency. Discover a data-driven approach to identify leaks, optimize touchpoints, and convert more leads into paying customers. We guides prospects effortlessly from awareness to purchase through a customized Automated workflow suitable for your Business Model.',
      heading: 'Build Your Parallel Sales Team',
      points: [
        'Increased Sales Volume: Reach a wider audience and generate more qualified leads, driving significant sales growth.',
        'Enhanced Team Efficiency: Free up your team\'s time from repetitive tasks, focusing on closing deals and exceeding quotas.',
        'Scalability and Flexibility: Adapt your sales force to meet market demands and scale your operations effortlessly.'
      ]
    },
    {
      image: '/images/about/19.png',
      description:
        'PerpeX empowers you to build a Parallel Sales Team, a robust network that expands your reach and accelerates closing rates. This innovative system leverages automation to empower team members, streamline workflows, and generate qualified leads simultaneously. We provide the tools and insights needed to amplify your sales efforts and maximize revenue.',
      heading: 'Switch To Organic Marketing',
      points: [
        'Sustainable Growth: Attract and retain customers organically, building a loyal brand following.',
        'Cost-Effective Marketing: Reduce reliance on paid advertising and maximize return on investment.',
        'Brand Authenticity: Connect with customers on a deeper level, fostering trust and brand loyalty.'
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
            <div className="slide-content">
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

export default Corporate;
