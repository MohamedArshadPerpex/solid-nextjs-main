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
                        <img src="/images/about/sales.jpg" alt="slide_image" />
                        <div className="overlay">
                            <p>PerpeX streamlines your recruitment process, helping you meet staffing needs efficiently. Our solution utilizes automation to identify top talent, optimize candidate interactions, and land the perfect fit for your open positions. We guide candidates seamlessly through the application process, ensuring a positive experience and faster hiring times.</p>
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
                        <img src="/images/about/19.png" alt="slide_image" />
                        <div className="overlay">
                            <p>PerpeX empowers you to switch to organic marketing, a strategic approach for attracting customers naturally. We guide you in developing compelling content, fostering brand loyalty, and building a thriving online presence. Our data-driven strategies help you identify target audiences, optimize content for search engines, and cultivate long-term customer engagement.</p>
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
                        <img src="/images/about/15.png" alt="slide_image" />
                        <div className="overlay">
                            <p>PerpeX equips your sales team with the skills and knowledge they need to excel. Our data-driven training programs combine proven strategies with practical application to boost individual and team performance. We customize programs to your specific industry and sales goals, ensuring your team is equipped to navigate the modern sales landscape.</p>
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
                        <img src="/images/about/14.png" alt="slide_image" />
                        <div className="overlay">
                            <p>Stop Wasting Resources on Unqualified Leads! PerpeX unveils strategies to dramatically reduce your Customer Acquisition Cost (CAC). Discover how to leverage a winning combination of Customer Relationship Management (CRM) and Interactive Voice Response (IVR) systems to effectively manage your leads and convert them into loyal customers.                            </p>
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
                        <img src="/images/about/16.png" alt="slide_image" />
                        <div className="overlay">
                            <p>PerpeX helps you redesign your sales funnel for maximum efficiency. Discover a data-driven approach to identify leaks, optimize touchpoints, and convert more leads into paying customers. We guides prospects effortlessly from awareness to purchase through a customized Automated workflow suitable for your Business Model.</p>
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
                        <img src="/images/about/18.png" alt="slide_image" />
                        <div className="overlay">
                            <p>PerpeX empowers you to build a Parallel Sales Team, a robust network that expands your reach and accelerates closing rates. This innovative system leverages automation to empower team members, streamline workflows, and generate qualified leads simultaneously. We provide the tools and insights needed to amplify your sales efforts and maximize revenue.</p>
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
