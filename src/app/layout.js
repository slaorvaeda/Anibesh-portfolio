'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { RouterProvider } from "react-router-dom";
// import router from "../Router/router";
import Navbar from "@/asset/Navbar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Anibesh Portfolio",
  description: "Portfolio of Anibesh",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showNavbar, setShowNavbar] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setShowNavbar(true);
      return;
    }
    const handleScroll = () => {
      // Show navbar after scrolling past 80vh (Hero section)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar className={`navbar-animated${showNavbar ? " navbar-visible" : ""}`} />
        {children}
      </body>
    </html>
  );
}
