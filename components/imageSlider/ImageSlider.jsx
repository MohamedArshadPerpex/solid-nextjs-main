import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import './ImageSlider.css';

const ImageSlider = () => {
    return (
        <div className="container">
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
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_containers"
            >
                <SwiperSlide style={{
                    width:'300px',
                    width:'300px'
                }} className='swiper-slides'>
                    <img src="/images/about/campus.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide  style={{
                    width:'300px',width:'300px'
                }}  className='swiper-slides'>
                    <img src="/images/about/campus01.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide  style={{
                    width:'300px',width:'300px'
                }}  className='swiper-slides'>
                    <img src="/images/about/campus02.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide  style={{
                    width:'300px',width:'300px'
                }}  className='swiper-slides'>
                    <img src="/images/about/campus01.jpg" alt="slide_image" />  
                </SwiperSlide>
                <SwiperSlide  style={{
                    width:'300px',width:'300px'
                }}  className='swiper-slides'>
                    <img src="/images/about/campus02.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide  style={{
                    width:'300px',width:'300px'
                }}  className='swiper-slides'>
                    <img src="/images/about/campus03.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide  style={{
                    width:'300px',width:'300px'
                }} className='swiper-slides'>
                    <img src="/images/about/campus04.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide  style={{
                    width:'300px',width:'300px'
                }}  className='swiper-slides'>
                    <img src="/images/about/upskill01.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide  style={{
                    width:'300px',width:'300px'
                }}  className='swiper-slides'>
                    <img src="/images/about/upskill02.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide  style={{
                    width:'300px',width:'300px'
                }}  className='swiper-slides'>
                    <img src="/images/about/upskill03.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide  style={{
                    width:'300px',width:'300px'
                }}  className='swiper-slides'>
                    <img src="/images/about/upskill04.jpg" alt="slide_image" />
                </SwiperSlide>
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
        </div>
    );
};

export default ImageSlider;
