import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Footer from './Footer';
import Brands from './Brands';
import ImageSlider from './imageSlider/ImageSlider';
import FeaturesTab from './FeaturesTab';
import FunFact from './FunFact';
import Contact from './Contact';
import './Scroll.css'

function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionsCount = 5; // Adjust this value based on the number of sections
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${sectionsCount * 100}vw`,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: `+=${sectionsCount * 1000}`,
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill(); // Kill the animation on component unmount
    };
  }, []);

  return (
    <div className="scroll-container">
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section">
            <Brands />
            </div>
            <div className="scroll-section">
            <ImageSlider />
            </div>
            <div className="scroll-section">
            <FeaturesTab />
            </div>
            <div className="scroll-section">
            <FunFact />
            </div>
            <div className="scroll-section">
            <Contact />
            </div>
            <div className="scroll-section">
            <Footer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HorizontalScroll;