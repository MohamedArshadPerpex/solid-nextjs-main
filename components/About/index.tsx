"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import "./About.css";
import img1 from '../../public/images/about/campus.jpg';
import img2 from '../../public/images/about/campus01.jpg';
import img3 from '../../public/images/about/campus02.jpg';
import img4 from '../../public/images/about/campus03.jpg';
import img5 from '../../public/images/about/campus04.jpg';

const About = () => {
  const programmeItems = [
    {
      image: img1,
      name: 'Switzerland',
      category: 'Campus To Corporate',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      image: img2,
      name: 'Finland',
      category: 'Campus To Corporate',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      image: img3,
      name: 'Iceland',
      category: 'Campus To Corporate',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      image: img4,
      name: 'Iceland',
      category: 'Campus To Corporate',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    },
    {
      image: img5,
      name: 'Iceland',
      category: 'Campus To Corporate',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
    }
  ];

  const control = useAnimation();
  const [ref, inView] = useInView();
  const [currentImage, setCurrentImage] = useState(img1);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const handleCardClick = (image) => {
    setCurrentImage(image);
  };

  useEffect(() => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const carouselDom = document.querySelector('.carousel');
    const sliderDom = carouselDom ? carouselDom.querySelector('.list') : null;
    const thumbnailBorderDom = document.querySelector('.thumbnail');

    if (!carouselDom || !sliderDom || !thumbnailBorderDom) {
      console.error('One of the required DOM elements is not found');
      return;
    }

    const showSlider = (type) => {
      const sliderItemsDom = document.querySelectorAll('.carousel .item');
      const thumbnailItemsDom = document.querySelectorAll('.thumbnail .item');

      if (type === 'next') {
        const firstSliderItem = sliderItemsDom[0];
        const firstThumbnailItem = thumbnailItemsDom[0];
        if (firstSliderItem && firstThumbnailItem) {
          sliderDom.appendChild(firstSliderItem);
          thumbnailBorderDom.appendChild(firstThumbnailItem);
          carouselDom.classList.add('next');
        }
      } else {
        const lastSliderItem = sliderItemsDom[sliderItemsDom.length - 1];
        const lastThumbnailItem = thumbnailItemsDom[thumbnailItemsDom.length - 1];
        if (lastSliderItem && lastThumbnailItem) {
          sliderDom.prepend(lastSliderItem);
          thumbnailBorderDom.prepend(lastThumbnailItem);
          carouselDom.classList.add('prev');
        }
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, 300);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        if (nextButton) nextButton.click();
      }, 7000);
    };

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        showSlider('next');
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        showSlider('prev');
      });
    }

    // Initial setup
    thumbnailBorderDom.appendChild(thumbnailBorderDom.firstElementChild);
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      if (nextButton) nextButton.click();
    }, 7000);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div className="app__feature">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="feature__container"
      >
        <motion.div className="right__feature">
          <div className="right__text">
            <div className="container">
              <div className="carousel">
                <div className="list">
                  {programmeItems.map((item, index) => (
                    <div className="item" key={index}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="content">
                        <div className="author">{item.name}</div>
                        <div className="title">{item.category}</div>
                        <div className="des">{item.description}</div>
                        <div className="buttons">
                          <button onClick={() => handleCardClick(item.image)}>SEE MORE</button>
                          <button>SUBSCRIBE</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="thumbnail">
                  {programmeItems.map((item, index) => (
                    <div className="item" key={index}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="arrows">
                  <button id="prev">&lt;</button>
                  <button id="next">&gt;</button>
                </div>
                <div className="time"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
