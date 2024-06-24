import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import './ImageSliders.css';
import Link from 'next/link';

const Corporate = () => {
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
                className="swiper_container"
            >
                <SwiperSlide>
                    <div className="slide-content">
                        <img src="/images/about/campus.jpg" alt="slide_image" />
                        <div className="overlay">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link href="/support">
                                <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
                                    Enquiry Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <img src="/images/about/campus01.jpg" alt="slide_image" />
                        <div className="overlay">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link href="/support">
                                <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
                                    Enquiry Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <img src="/images/about/campus02.jpg" alt="slide_image" />
                        <div className="overlay">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link href="/support">
                                <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
                                    Enquiry Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <img src="/images/about/campus01.jpg" alt="slide_image" />
                        <div className="overlay">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link href="/support">
                                <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
                                    Enquiry Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <img src="/images/about/campus02.jpg" alt="slide_image" />
                        <div className="overlay">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link href="/support">
                                <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
                                    Enquiry Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <img src="/images/about/campus03.jpg" alt="slide_image" />
                        <div className="overlay">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link href="/support">
                                <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
                                    Enquiry Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <img src="/images/about/campus04.jpg" alt="slide_image" />
                        <div className="overlay">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link href="/support">
                                <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
                                    Enquiry Now
                                </button>
                            </Link>
                        </div>
                    </div>
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

export default Corporate;
