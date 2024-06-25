"use client";
import React, { useState, useEffect } from "react";
import "./Hero.css";
import { gsap, Expo } from "gsap";

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
    "Parallel Sales Team?",
    "Business Development Solutions?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000); 

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
      
      {/* Content Section */}
      <div className={`mx-auto max-w-7xl px-4 md:px-8 2xl:px-0 Content`}>
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5" style={{
          marginLeft: '100px',
          width: '100%'
        }}>
          <div className="md:w-1/2">
            <h1 className="mb-5 pr-16 text-3xl font-bold xl:text-5xl">
              Are You Looking For {" "}
              <span className="relative before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark text-blue-500">
                {textOptions[currentTextIndex]}
              </span>
            </h1>
            <div className="mt-10">
              <form className="flex flex-wrap gap-5" onSubmit={handleSubmit}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter your email address"
                  className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                />
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration:300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Get Started
                </button>
              </form>

              <p className="mt-5 text-base">
                Try for free no credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
