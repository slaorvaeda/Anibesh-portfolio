'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "@/asset/Navbar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Footer from "@/asset/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showNavbar, setShowNavbar] = useState(!isHome);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    if (mounted) {
      AOS.init({ duration: 800, once: true })
    }
  }, [mounted])

  return (
    <html lang="en">
      <head>
        <title>Anibesh Photography Portfolio</title>
        <meta name="description" content="Professional photography portfolio of Anibesh - capturing moments with artistic vision" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Anibesh Photography Portfolio" />
        <meta property="og:description" content="Professional photography portfolio of Anibesh - capturing moments with artistic vision" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/image/img1.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          {mounted && <Navbar className={`navbar-animated${showNavbar ? " navbar-visible" : ""}`} />}
          {children}
          {mounted && <Footer />}
        </ErrorBoundary>
      </body>
    </html>
  );
}
