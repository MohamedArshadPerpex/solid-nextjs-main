"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import Image from "next/image";
import { gsap, Expo } from "gsap";

const Hero = () => {
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("");
  const [loadingComplete, setLoadingComplete] = useState(false);
  const followRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter(prevCounter =>
        prevCounter < 100 ? prevCounter + 1 : (clearInterval(count), setCounter(100))
      );
    }, 25);

    return () => clearInterval(count);
  }, []);

  useEffect(() => {
    if (counter === 100) {
      reveal();
    }
  }, [counter]);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        setLoadingComplete(true);
        console.log("Animation completed");
      },
    });

    t1.to(followRef.current, {
      width: "105%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".Loading .hide", { opacity: 0, duration: 0.3 })
      .to(".Loading .hide", { display: "none", duration: 0.3 })
      .to(followRef.current, {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".Content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".Title", { display: "block", duration: 0.1 })
      .to(".Title", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here (Example: Logging email)
    console.log("Form submitted with email:", email);
    // Optionally reset form after submission
    setEmail("");
  };

  return (
    <div className="AppContainer">
      {!loadingComplete && (
        <div className="Loading">
          <div className="Follow" ref={followRef}></div>
          <div
            className="ProgressBar"
            style={{ width: `${counter}%` }}
            ref={progressBarRef}
          ></div>
          <p className="Count">{counter}%</p>
        </div>
      )}

      {/* Content Section */}
      <div className={`mx-auto max-w-7xl px-4 md:px-8 2xl:px-0 Content ${loadingComplete ? 'show' : ''}`}>
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5" style={{
          marginLeft:'100px',
          width:'100%'
        }}>
          <div className="md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium">
              A Corporate Training?
            </h4>
            <h1 className="mb-5 pr-16 text-3xl font-bold xl:text-5xl">
              Are You Looking For {" "}
              <span className="relative before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                A SalesTeam?
              </span>
            </h1>
            <h4 className="mb-4.5 text-lg font-medium">
              5000 Salary?
            </h4>
            <div className="mt-10">
              <form className="flex flex-wrap gap-5" onSubmit={handleSubmit}>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter your email address"
                  className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                />
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Get Started
                </button>
              </form>

              <p className="mt-5 text-base">
                Try for free no credit card required.
              </p>
            </div>
          </div>

          <div className="animate_right hidden md:w-1/2 lg:block">
            <div className="relative 2xl:-mr-7.5">
              <video
                muted
                autoPlay
                className="shadow-solid-l"
                src="/images/hero/hero-light.mp4" // Replace with your video URL
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
