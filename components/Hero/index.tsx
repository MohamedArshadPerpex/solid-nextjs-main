"use client";
import React, { useState, useEffect } from "react";
import "./Hero.css"; // Ensure this CSS file contains necessary styles
import { gsap, Expo } from "gsap";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Array of text options to rotate
  const textOptions = [
    "staffing Solution?",
    "Sales Training?",
    "50,000+ Salary?",
    "On The Job Training Program?",
    "Organic Marketing Strategies?",
    "Parallel Sales Team ",
    "Business Development Solutions?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (Example: Logging email)
    console.log("Form submitted with email:", email);
    // Optionally reset form after submission
    setEmail("");
  };

  return (
    <div className="AppContainer">
      <video autoPlay muted loop className="HeroVideo">
        <source src="/images/hero/Bg.mp4" type="video/mp4" />
      </video>
        <div className={`mx-auto max-w-7xl px-4 md:px-8 2xl:px-0 Content`}>
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5" style={{ marginLeft: '100px', width: '100%' }}>
            <div className="md:w-1/2" style={{
              width:'900px'
            }}>
              <h1 className="mb-5 pr-16 text-3xl font-bold xl:text-5xl are-you">
                Are You Looking For {" "}
                </h1>
                <h1 className="mb-5 pr-16 text-3xl font-bold xl:text-5xl span-h1" style={{
                  marginTop:'-20px'
                }}>
                <span className="relative before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark span-text"
                style={{
                  width:'600px',
                }}>
                  {textOptions[currentTextIndex]}
                </span>
                </h1>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
