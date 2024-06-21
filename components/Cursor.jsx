'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const textElements = document.querySelectorAll('span, h1, h2, h3, h4 ,h5 ,h6 , p , a , button'); // Adjust selectors as needed

        const onMouseMove = (event) => {
            const { clientX, clientY } = event;
            gsap.to(cursor, { x: clientX, y: clientY });
        };

        const onMouseEnterText = (event) => {
            const hoveredText = event.target.textContent.trim(); // Get text content and trim whitespace
            cursor.textContent = hoveredText; // Set cursor text content
            gsap.to(cursor, { scale: 2, backgroundColor:'black' });
            gsap.to(cursor, { width: 'auto', height: 'auto', duration: 0.1 }); // Adjust duration as needed
        };

        const onMouseLeaveText = (event) => {
            cursor.textContent = ''; // Clear cursor text content
            gsap.to(cursor, { scale: 1 });
            gsap.to(cursor, { width: '10px', height: '10px', duration: 0.1 }); // Adjust duration as needed
        };

        document.addEventListener('mousemove', onMouseMove);
        textElements.forEach((element) => {
            element.addEventListener('mouseenter', onMouseEnterText);
            element.addEventListener('mouseleave', onMouseLeaveText);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            textElements.forEach((element) => {
                element.removeEventListener('mouseenter', onMouseEnterText);
                element.removeEventListener('mouseleave', onMouseLeaveText);
            });
        };
    }, []);

    return (
        <>
            <div
                id='custom-cursor'
                className='custom-cursor'
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'black', // Initial background color
                    borderRadius: '50%', // Circular cursor
                    pointerEvents: 'none',
                    zIndex: 1000,
                    transform: 'translate(-50%, -50%)',
                    transition: 'transform 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out, background-color 0.1s ease-out',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '10px',
                    textAlign: 'center',
                    padding: '5px' // Add padding for better text visibility
                }}
            ></div>
        </>
    );
};

export default Cursor;
