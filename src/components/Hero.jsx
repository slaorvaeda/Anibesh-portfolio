'use client';
import React, { useEffect, useRef } from 'react';
import '../../public/css/home.css';
import gsap from 'gsap';

function Hero() {
  const detailRef = useRef(null);
  const nameRef = useRef(null);
  const animatedRef = useRef(false);
  const scrollLockedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !animatedRef.current) {
        animatedRef.current = true;
        scrollLockedRef.current = true;
        document.body.style.overflow = 'hidden';
        
        // Check if elements exist before animating
        const topImg = document.querySelector('.collage-img.top');
        const bottomImg = document.querySelector('.collage-img.bottom');
        const leftImg = document.querySelector('.collage-img.left');
        const rightImg = document.querySelector('.collage-img.right');
        const topleftImg = document.querySelector('.collage-img.topleft');
        const toprightImg = document.querySelector('.collage-img.topright');
        const bottomleftImg = document.querySelector('.collage-img.bottomleft');
        const bottomrightImg = document.querySelector('.collage-img.bottomright');
        const centerImg = document.querySelector('.collage-img.center-img');
        
        // Animate images outward only if they exist
        if (topImg) gsap.to(topImg, { y: -200, opacity: 0.7, duration: 1 });
        if (bottomImg) gsap.to(bottomImg, { y: 200, opacity: 0.7, duration: 1 });
        if (leftImg) gsap.to(leftImg, { x: -200, opacity: 0.7, duration: 1 });
        if (rightImg) gsap.to(rightImg, { x: 200, opacity: 0.7, duration: 1 });
        if (topleftImg) gsap.to(topleftImg, { x: -150, y: -150, opacity: 0.7, duration: 1 });
        if (toprightImg) gsap.to(toprightImg, { x: 150, y: -150, opacity: 0.7, duration: 1 });
        if (bottomleftImg) gsap.to(bottomleftImg, { x: -150, y: 150, opacity: 0.7, duration: 1 });
        if (bottomrightImg) gsap.to(bottomrightImg, { x: 150, y: 150, opacity: 0.7, duration: 1 });
        if (centerImg) gsap.to(centerImg, { opacity: 0, filter: 'blur(10px)', duration: 1 });
        
        // Reveal name after animation
        setTimeout(() => {
          if (nameRef.current) nameRef.current.classList.add('reveal');
          setTimeout(() => {
            document.body.style.overflow = '';
            scrollLockedRef.current = false;
          }, 1200);
        }, 900);
      } else if (window.scrollY <= 100 && animatedRef.current) {
        animatedRef.current = false;
        // Reset all images
        const allImages = document.querySelectorAll('.collage-img');
        if (allImages.length > 0) {
          gsap.to(allImages, { x: 0, y: 0, opacity: 1, filter: 'none', duration: 1 });
        }
        if (nameRef.current) nameRef.current.classList.remove('reveal');
      }
    };

    const preventScroll = (e) => {
      if (scrollLockedRef.current) {
        e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', preventScroll, { passive: false });
      window.removeEventListener('touchmove', preventScroll, { passive: false });
    };
  }, []);

  return (
    <div className="home-page">
      <div className="collage-container">
        <div className="collage-sider">photography</div>
        
        <div className="collage-grid collage-grid-varied">
          {/* Top row */}
          <img src="./image/img1.jpg" className="collage-img topleft" style={{ gridArea: 'a' }} alt="Portfolio 1" />
          <img src="./image/img2.jpg" className="collage-img top" style={{ gridArea: 'b' }} alt="Portfolio 2" />
          <img src="./image/img3.jpg" className="collage-img topright" style={{ gridArea: 'c' }} alt="Portfolio 3" />
          <img src="./image/img4.jpg" className="collage-img" style={{ gridArea: 'd' }} alt="Portfolio 4" />
          
          {/* Center section */}
          <img src="./image/img2.jpg" className="collage-img center-img" style={{ gridArea: 'e' }} alt="Portfolio 5" />
          <img src="./image/img6.jpg" className="collage-img right" style={{ gridArea: 'f' }} alt="Portfolio 6" />
          <img src="./image/img7.jpg" className="collage-img" style={{ gridArea: 'g' }} alt="Portfolio 7" />
          
          {/* Middle rows */}
          <img src="./image/img8.jpg" className="collage-img left" style={{ gridArea: 'h' }} alt="Portfolio 8" />
          <img src="./image/img1.jpg" className="collage-img" style={{ gridArea: 'i' }} alt="Portfolio 9" />
          <img src="./image/img2.jpg" className="collage-img" style={{ gridArea: 'j' }} alt="Portfolio 10" />
          <img src="./image/img3.jpg" className="collage-img" style={{ gridArea: 'k' }} alt="Portfolio 11" />
          
          <img src="./image/img4.jpg" className="collage-img" style={{ gridArea: 'l' }} alt="Portfolio 12" />
          <img src="./image/img5.jpg" className="collage-img" style={{ gridArea: 'm' }} alt="Portfolio 13" />
          <img src="./image/img6.jpg" className="collage-img" style={{ gridArea: 'n' }} alt="Portfolio 14" />
          <img src="./image/img7.jpg" className="collage-img" style={{ gridArea: 'o' }} alt="Portfolio 15" />
          
          <img src="./image/img8.jpg" className="collage-img" style={{ gridArea: 'p' }} alt="Portfolio 16" />
        </div>
        
        <div className="container2">
          <div className="detail" ref={detailRef}>
            <div className="collage-center-name" ref={nameRef}>
              <div className="name ">Anibesh photography</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;