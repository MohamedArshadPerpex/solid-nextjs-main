import React, { useEffect } from 'react';

const Backround = () => {
  useEffect(() => {
    const path = document.querySelector('#star-path');
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;

    path.getBoundingClientRect();

    const handleScroll = () => {
      const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      const drawLength = pathLength * scrollPercentage;
      path.style.strokeDashoffset = pathLength - drawLength;

      if (scrollPercentage >= 0.99) {
        path.style.strokeDasharray = "none";
      } else {
        path.style.strokeDasharray = `${pathLength} ${pathLength}`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.6 107.6" id="star-svg">
      <path fill="none" stroke="white" strokeWidth="2" id="star-path" d="M43.7,65.8L19.9,83.3c-2.9,1.9-5.1,3.2-7.9,3.2c-5.7,0-10.5-5.1-10.5-10.8
        c0-4.8,3.8-8.2,7.3-9.8l27.9-12L8.8,41.4c-3.8-1.6-7.3-5.1-7.3-9.8c0-5.7,5.1-10.5,10.8-10.5c2.9,0,4.8,1,7.6,3.2l23.8,17.4
        l-3.2-28.2c-1-6.7,3.5-12,9.8-12c6.3,0,10.8,5.1,9.8,11.7L57,41.8l23.8-17.4c2.9-2.2,5.1-3.2,7.9-3.2c5.7,0,10.5,4.8,10.5,10.5
        c0,5.1-3.5,8.2-7.3,9.8L63.9,53.8l27.9,12c3.8,1.6,7.3,5.1,7.3,10.1c0,5.7-5.1,10.5-10.8,10.5c-2.5,0-4.8-1.3-7.6-3.2L57,65.8
        l3.2,28.2c1,6.7-3.5,12-9.8,12c-6.3,0-10.8-5.1-9.8-11.7L43.7,65.8z"/>
    </svg>
  );
};

export default Backround;
