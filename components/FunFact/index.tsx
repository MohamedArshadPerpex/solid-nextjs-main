// Import necessary libraries and styles
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./Funfact.css"; // Adjust path as per your project structure

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5" style={{ marginTop: '12px' }}>
          {/* Images for decorative elements */}
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          {/* Conditional rendering of dotted shapes based on theme */}
          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          {/* Animated text section */}
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
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
            style={{
              marginLeft: '20px'

            }}
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3" style={{ marginTop: '18px' }}>
              Our Client Collaboration Network
            </h2>
            {/* Example paragraph or text */}
            <p className="text-base text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed ac
              dolor sit amet lorem bibendum laoreet. Nulla facilisi. Suspendisse
              potenti.
            </p>
          </motion.div>

          {/* Vertical carousels */}
          <div className="content" style={{
            marginTop: '-282px',
            marginLeft: '662px',
            width: '599px',
            overflow: 'hidden',
            border: '2px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            height: '351px'
          }}>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5" style={{ marginTop: '95px' }}>
              {/* Left-side images */}
              <div className="wrapper carouselverticalone verticalcolumnone">
                <div className="itemLeft item1">
                  <img src="/images/funfact/20.png" alt="" />
                </div>
                <div className="itemLeft item2">
                  <img src="/images/funfact/21.png" alt="" />
                </div>
                <div className="itemLeft item3">
                  <img src="/images/funfact/22.png" alt="" />
                </div>
                <div className="itemLeft item4">
                  <img src="/images/funfact/23.png" alt="" />
                </div>
                <div className="itemLeft item5">
                  <img src="/images/funfact/24.png" alt="" />
                </div>
                <div className="itemLeft item6">
                  <img src="/images/funfact/28.png" alt="" />
                </div>
                <div className="itemLeft item7">
                  <img src="/images/funfact/102.png" alt="" />
                </div>
                <div className="itemLeft item8">
                  <img src="/images/funfact/35.png" alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5" style={{ marginTop: '-305px' }}>
              {/* Right-side images */}
              <div className="wrapper carouselverticaltwo verticalcolumntwo">
                <div className="itemRight item1">
                  <img src="/images/funfact/49.png" alt="" />
                </div>
                <div className="itemRight item2">
                  <img src="/images/funfact/56.png" alt="" />
                </div>
                <div className="itemRight item3">
                  <img src="/images/funfact/90.png" alt="" />
                </div>
                <div className="itemRight item4">
                  <img src="/images/funfact/91.png" alt="" />
                </div>
                <div className="itemRight item5">
                  <img src="/images/funfact/92.png" alt="" />
                </div>
                <div className="itemRight item6">
                  <img src="/images/funfact/93.png" alt="" />
                </div>
                <div className="itemRight item7">
                  <img src="/images/funfact/94.png" alt="" />
                </div>
                <div className="itemRight item8">
                  <img src="/images/funfact/95.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5" style={{ marginTop: '-1467px',marginLeft:'-172px' }}>
              {/* Left-side images */}
              <div className="wrapper carouselverticalfour verticalcolumnfour">
                <div className="itemLeft item1">
                  <img src="/images/funfact/20.png" alt="" />
                </div>
                <div className="itemLeft item2">
                  <img src="/images/funfact/21.png" alt="" />
                </div>
                <div className="itemLeft item3">
                  <img src="/images/funfact/22.png" alt="" />
                </div>
                <div className="itemLeft item4">
                  <img src="/images/funfact/23.png" alt="" />
                </div>
                <div className="itemLeft item5">
                  <img src="/images/funfact/24.png" alt="" />
                </div>
                <div className="itemLeft item6">
                  <img src="/images/funfact/28.png" alt="" />
                </div>
                <div className="itemLeft item7">
                  <img src="/images/funfact/102.png" alt="" />
                </div>
                <div className="itemLeft item8">
                  <img src="/images/funfact/35.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5" style={{ marginTop: '-505px' }}>
              <div className="wrapper carouselverticalthree verticalcolumnthree">
                <div className="itemLeft item1">
                  <img src="/images/funfact/96.png" alt="" />
                </div>
                <div className="itemLeft item2">
                  <img src="/images/funfact/97.png" alt="" />
                </div>
                <div className="itemLeft item3">
                  <img src="/images/funfact/98.png" alt="" />
                </div>
                <div className="itemLeft item4">
                  <img src="/images/funfact/99.png" alt="" />
                </div>
                <div className="itemLeft item5">
                  <img src="/images/funfact/101.png" alt="" />
                </div>
                <div className="itemLeft item6">
                  <img src="/images/funfact/28.png" alt="" />
                </div>
                <div className="itemLeft item7">
                  <img src="/images/funfact/102.png" alt="" />
                </div>
                <div className="itemLeft item8">
                  <img src="/images/funfact/35.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
