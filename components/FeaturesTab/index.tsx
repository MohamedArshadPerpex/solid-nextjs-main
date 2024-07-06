import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ImageSliders from '../imageSlider/ImageSliders';
import Corporate from '../imageSlider/Corporate';
import './Feature.css';

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState<string>('');
  const sectionRef = useRef<HTMLDivElement>(null);

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
          </div>

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
              className="animate_top mb-15 flex flex-col items-start gap-4 rounded-[10px] border border-stroke bg-white p-4 shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 choices"
            >
              <div className="tab-content">
                <button onClick={() => handleTabClick('tabOne')} className="tab-button">
                  <p className="text-sm font-medium text-black dark:text-white xl:text-regular">Looking to Upskill My Career →</p>
                </button>
              </div>
              <div className="tab-content">
                <button onClick={() => handleTabClick('tabTwo')} className="tab-button">
                  <p className="text-sm font-medium text-black dark:text-white xl:text-regular">Looking to Organize My Business →</p>
                </button>
              </div>
            </motion.div>
          )}

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
              style={{ marginTop: '-186px' }}
            >
              {currentTab === 'tabOne' && (
                <div className="tab-content">
                  <span className="close-popups" onClick={closePopup}>
                    &times;
                  </span>
                  <ImageSliders />
                  
                </div>
              )}

              {currentTab === 'tabTwo' && (
                <div className="tab-content">
                  <span className="close-popups" onClick={closePopup}>
                    &times;
                  </span>
                  <Corporate />
                  
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
