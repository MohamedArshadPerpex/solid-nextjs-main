"use client";
import React, { useState, useEffect } from "react";
import "./Hero.css"; // Ensure this CSS file contains necessary styles
import { gsap, Expo } from "gsap";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

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
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate loading completion after 3 seconds (Adjust timing as needed)
    const loadingTimeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 6000);

    // Clean up timeout on component unmount or when loading completes early
    return () => clearTimeout(loadingTimeout);
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
      {!loadingComplete && (
        <div className="LoadingContainer">
          <video className="BackgroundVideo" autoPlay loop muted>
            <source src="/images/hero/backround.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="LoadingOverlay"></div>
          <div className="LoadingTextContainer">
            <h2 data-text="loading Perpectual Excellence…">loading Perpectual Excellence…</h2>
          </div>
        </div>
      )}

      {/* Conditional rendering based on loadingComplete */}
      {loadingComplete && (
        <div className={`mx-auto max-w-7xl px-4 md:px-8 2xl:px-0 Content`}>
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5" style={{ marginLeft: '100px', width: '100%' }}>
            <div className="md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold xl:text-5xl">
                Are You Looking For {" "}
                <span className="relative before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark text-blue-500">
                  {textOptions[currentTextIndex]}
                </span>
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
