// app/(site)/page.tsx
"use client"; // Ensure this directive is at the top of your client component

import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "../../components/Cursor";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ImageSlider from '../../components/imageSlider/ImageSlider' 

export default function Home() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionsCount = 13; // Adjust based on the number of sections
    const pin = gsap.to(sectionRef.current, {
      x: () => `-${(sectionsCount - 1) * 100}vw`,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${(sectionsCount - 1) * window.innerWidth}`
      }
    });

    return () => {
      pin.kill(); // Kill the animation on component unmount
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <div ref={triggerRef} className="relative w-full">
        <div ref={sectionRef} className="flex w-[900vw]"> {/* Adjusted for 9 sections */}
          <div className="flex-none w-screen h-screen">
            <Hero />
          </div>
          <div className="flex-none w-screen h-screen">
            <Brands />
          </div>
          <div className="flex-none w-screen h-screen">
            <ImageSlider />
          </div>
          {/* <div className="flex-none w-screen h-screen">
            <Feature />
          </div> */}
          <div className="flex-none w-screen h-screen">
            <FeaturesTab />
          </div>
          <div className="flex-none w-screen h-screen">
            <FunFact />
          </div>
          {/* <div className="flex-none w-screen h-screen">
            <CTA />
          </div> */}
          {/* <div className="flex-none w-screen h-screen">
            <FAQ />
          </div> */}
          <div className="flex-none w-screen h-screen">
            <Contact />
          </div>
          <div className="flex-none w-screen h-screen">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
