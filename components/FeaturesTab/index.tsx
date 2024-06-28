import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ImageSliders from '../imageSlider/ImageSliders';
import Image from 'next/image';
import Corporate from '../imageSlider/Corporate';
import './Feature.css';

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState<string>(''); // Explicitly set type to string
  const [showPopup, setShowPopup] = useState<boolean>(false); // Explicitly set type to boolean
  const sectionRef = useRef<HTMLDivElement>(null); // Specify useRef type as HTMLDivElement

  const handleTabClick = (tab: string) => {
    setCurrentTab(tab);
  };

  const closePopup = () => {
    setCurrentTab('');
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative pb-20 pt-18.5 lg:pb-22.5" ref={sectionRef}>
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0" style={{ marginTop: '169px' }}>
          <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
            <h1 className="Heading">so why are you here?</h1>
            <Image fill className="dark:hidden" src="/images/shape/shape-dotted-light.svg" alt="Dotted Shape" />
            <Image fill className="hidden dark:block" src="/images/shape/shape-dotted-dark.svg" alt="Dotted Shape" />
          </div>

          {/* Tab Menus */}
          {!currentTab && (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top mb-15 flex flex-col items-start gap-4 rounded-[10px] border border-stroke bg-white p-4 shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6"
            >
              <button
                onClick={() => handleTabClick('tabOne')}
                className="relative flex w-full cursor-pointer items-center gap-4 px-6 py-2"
              >
                <div>
                  <p className="text-sm font-medium text-black dark:text-white xl:text-regular">Looking to Upskill My Career →</p>
                </div>
              </button>

              <button
                onClick={() => handleTabClick('tabTwo')}
                className="relative flex w-full cursor-pointer items-center gap-4 px-6 py-2"
              >
                <div>
                  <p className="text-sm font-medium text-black dark:text-white xl:text-regular">Looking to Organize My Business →</p>
                </div>
              </button>
            </motion.div>
          )}

          {/* Tab Content with Slider */}
          {currentTab && (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top mx-auto max-w-c-1154"
              style={{ marginTop: '-165px' }}
            >
              {currentTab === 'tabOne' && (
                <div>
                  <span className="close-popups" onClick={closePopup}>
                    &times;
                  </span>
                  <ImageSliders />
                  <a
                    href="#"
                    className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    <span className="duration-300 group-hover:pr-2">Enquiry Now</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              )}

              {currentTab === 'tabTwo' && (
                <div>
                  <span className="close-popups" onClick={closePopup}>
                    &times;
                  </span>
                  <Corporate />
                  <a
                    href="#"
                    className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    <span className="duration-300 group-hover:pr-2">Enquiry Now</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturesTab;
