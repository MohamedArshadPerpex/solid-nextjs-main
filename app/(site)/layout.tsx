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
    }, 3000);

    // Clean up timeout on component unmount or when loading completes early
    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
          {!loadingComplete && (
          <div className="loader-body">
          <div className="loader"></div>
        </div>
        
      )} 
      {loadingComplete && ( 
        <>
        
           
          <Header />
          {/* <Cursor /> */}
          <ToasterContext />
          {children}
          <ScrollToTop />
        </>
          )} 
      </body>
    </html>
  );
}
