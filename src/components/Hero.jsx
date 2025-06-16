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
        gsap.to('.collage-img.top', { y: -220, opacity: 0.7, duration: 1 });
        gsap.to('.collage-img.bottom', { y: 220, opacity: 0.7, duration: 1 });
        gsap.to('.collage-img.left', { x: -220, opacity: 0.7, duration: 1 });
        gsap.to('.collage-img.right', { x: 220, opacity: 0.7, duration: 1 });
        gsap.to('.collage-img.topleft', { x: -180, y: -180, opacity: 0.7, duration: 1 });
        gsap.to('.collage-img.topright', { x: 180, y: -180, opacity: 0.7, duration: 1 });
        gsap.to('.collage-img.bottomleft', { x: -180, y: 180, opacity: 0.7, duration: 1 });
        gsap.to('.collage-img.bottomright', { x: 180, y: 180, opacity: 0.7, duration: 1 });
        gsap.to('.collage-img.center-img', { opacity: 0, filter: 'blur(10px)', duration: 1 });
        setTimeout(() => {
          if (nameRef.current) nameRef.current.classList.add('reveal');
          setTimeout(() => {
            document.body.style.overflow = '';
            scrollLockedRef.current = false;
          }, 1200);
        }, 900);
      } else if (window.scrollY <= 100 && animatedRef.current) {
        animatedRef.current = false;
        gsap.to('.collage-img', { x: 0, y: 0, opacity: 1, filter: 'none', duration: 1 });
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
    <div className="collage-container">
      <div className="collage-sider">photography</div>
      <div className="collage-grid collage-grid-varied">
        <img src="./image/img1.jpg" className="collage-img topleft" style={{ gridArea: 'a' }} />
        <img src="https://picsum.photos/id/1012/200/300" className="collage-img top" style={{ gridArea: 'b' }} />
        <img src="https://picsum.photos/id/1013/300/200" className="collage-img topright" style={{ gridArea: 'c' }} />
        <img src="https://picsum.photos/id/1014/100/200" className="collage-img left" style={{ gridArea: 'd' }} />
        <img src="./image/img2.jpg" className="collage-img center-img" id="centerImg" style={{ gridArea: 'e' }} />
        <img src="./image/img3.jpg" className="collage-img right" style={{ gridArea: 'f' }} />
        <img src="./image/img8.jpg" className="collage-img bottomleft" style={{ gridArea: 'g' }} />
        <img src="https://picsum.photos/id/1020/200/150" className="collage-img bottom" style={{ gridArea: 'h' }} />
        <img src="https://picsum.photos/id/1021/200/200" className="collage-img bottomright" style={{ gridArea: 'i' }} />
        <img src="https://picsum.photos/id/1022/120/180" className="collage-img" style={{ gridArea: 'j' }} />
        <img src="./image/img4.jpg" className="collage-img" style={{ gridArea: 'k' }} />
        <img src="./image/img6.jpg" className="collage-img" style={{ gridArea: 'l' }} />
        <img src="./image/img5.jpg" className="collage-img" style={{ gridArea: 'm' }} />
        <img src="https://picsum.photos/id/1026/160/160" className="collage-img" style={{ gridArea: 'n' }} />
        <img src="./image/img7.jpg" className="collage-img" style={{ gridArea: 'o' }} />
        <img src="https://picsum.photos/id/1028/120/200" className="collage-img" style={{ gridArea: 'p' }} />
      </div>
      <div className="container2">
        <div className="detail" ref={detailRef}>
          <div className={"collage-center-name" + (nameRef.current && nameRef.current.classList.contains('reveal') ? ' reveal' : '')} ref={nameRef}>
            <div className="name">Anibesh</div>
            photography
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;