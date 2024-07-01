"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Cursor from "@/components/Cursor";
import Backround from '../../components/Background'
import { useEffect, useState } from "react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate loading completion after 3 seconds (Adjust timing as needed)
    const loadingTimeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 40000);

    // Clean up timeout on component unmount or when loading completes early
    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
         {!loadingComplete && (
          <>
          <div className="loading-container">
          <svg
            className="back-wave"
            viewBox="0 0 2400 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="backGradient" x1={0} x2={0} y1={0} y2={1}>
                <stop style={{ stopColor: "MediumBlue" }} offset="0%" />
                <stop style={{ stopColor: "MediumSlateBlue" }} offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#backGradient)"
              d="M 0 100 C 31.565 62.597 83.652 69.074 127.065 70.902 C 182.486 73.235 222.423 121.647 285.58 121.552 C 349.79 121.456 406.491 75.857 470.7 76.087 C 534.855 76.317 591.178 126.538 655.332 126.985 C 721.382 127.445 751.148 74.449 817.194 75.319 C 885.109 76.214 940.105 126.392 1008.02 127.279 C 1074.003 128.141 1122.356 88.569 1188.293 85.948 C 1259.605 83.113 1309.964 128.178 1381.317 126.691 C 1448.699 125.286 1504.051 75.092 1571.447 75.319 C 1640.956 75.553 1673.21 134.916 1742.717 135.49 C 1811.283 136.056 1851.601 81.264 1920.137 83.35 C 1973.659 84.979 1997.259 128.278 2050.7 124.918 C 2101.211 121.742 2139.659 81.904 2187.285 82.881 C 2224.132 83.637 2254.695 120.794 2291.534 119.71 C 2332.298 118.51 2400.103 63.253 2400 100 C 2400 100 2397.63 499.579 2400 500 L 0 500 L 0 100 Z"
            />
          </svg>
          <svg
            className="front-wave"
            viewBox="0 0 2400 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="frontGradient" x1={0} x2={0} y1={0} y2={1}>
                <stop style={{ stopColor: "DeepSkyBlue" }} offset="0%" />
                <stop style={{ stopColor: "Blue" }} offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#frontGradient)"
              d="M 2400 100 C 2368.435 62.597 2316.348 69.074 2272.935 70.902 C 2217.514 73.235 2177.577 121.647 2114.42 121.552 C 2050.21 121.456 1993.509 75.857 1929.3 76.087 C 1865.145 76.317 1808.822 126.538 1744.668 126.985 C 1678.618 127.445 1648.852 74.449 1582.806 75.319 C 1514.891 76.214 1459.895 126.392 1391.98 127.279 C 1325.997 128.141 1277.644 88.569 1211.707 85.948 C 1140.395 83.113 1090.036 128.178 1018.683 126.691 C 951.301 125.286 895.949 75.092 828.553 75.319 C 759.044 75.553 726.79 134.916 657.283 135.49 C 588.717 136.056 548.399 81.264 479.863 83.35 C 426.341 84.979 402.741 128.278 349.3 124.918 C 298.789 121.742 260.341 81.904 212.715 82.881 C 175.868 83.637 145.305 120.794 108.466 119.71 C 67.702 118.51 -0.103 63.253 0 100 C 0 100 2.37 499.579 0 500 L 2400 500 L 2400 100 Z"
            />
          </svg>
          <p className="loading-text">
            Looking <br /> Perpectual Excellence <span className="first-point">.</span>
            <span className="second-point">.</span>
            <span className="third-point">.</span>
          </p>
        </div>      
        <p style={{
          textAlign:'center'
        }}>Loading...</p>
        </>
        
      )}
      {loadingComplete && (
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Backround />
          <Header />
          <Cursor />
          <ToasterContext />
          {children}
          <ScrollToTop />
        </ThemeProvider>
         )}
      </body>
    </html>
  );
}
