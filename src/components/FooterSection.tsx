"use client"
import React, { useEffect, useRef } from 'react';

const FooterSection = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!footerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = footerRef.current.getBoundingClientRect();
      const x = (clientX - left - width / 2) / (width / 2);
      const y = (clientY - top - height / 2) / (height / 2);
      const layers = footerRef.current.querySelectorAll('.parallax-layer');
      layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed'));
        const xPos = x * speed;
        const yPos = y * speed;
        layer.style.transform = `translateX(${xPos}px) translateY(${yPos}px)`;
      });
    };

    const currentFooterRef = footerRef.current;
    if (currentFooterRef) {
      currentFooterRef.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (currentFooterRef) {
        currentFooterRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative w-full h-[85vh] lg:h-screen overflow-hidden bg-[#24DAFE]"
    >
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#f7feff] to-[#24DAFE]"
      ></div>

      <div
        data-speed="-8"
        style={{ zIndex: 10, transition: 'transform 0.1s ease-out' }}
        className="parallax-layer absolute bottom-0 left-[-10%] w-[120%] max-w-none"
      >
        <img src="/images/footer/2.svg" alt="City skyline layer 2" className="w-full h-auto" style={{ shapeRendering: 'crispEdges' }} />
      </div>

      <div
        data-speed="8"
        style={{ zIndex: 20, transition: 'transform 0.1s ease-out' }}
        className="parallax-layer absolute bottom-0 left-[-10%] w-[120%] max-w-none"
      >
        <img src="/images/footer/3.svg" alt="City skyline layer 3" className="w-full h-auto" style={{ shapeRendering: 'crispEdges' }} />
      </div>

      <div
        data-speed="18"
        style={{ zIndex: 30, transition: 'transform 0.1s ease-out' }}
        className="parallax-layer absolute bottom-0 left-[-10%] w-[120%] max-w-none"
      >
        <img src="/images/footer/4.svg" alt="City skyline layer 4" className="w-full h-auto" style={{ shapeRendering: 'crispEdges' }} />
      </div>

      <div
        data-speed="35"
        style={{ zIndex: 40, transition: 'transform 0.1s ease-out' }}
        className="parallax-layer absolute bottom-0 left-[-10%] w-[120%] max-w-none"
      >
        <img src="/images/footer/5.svg" alt="City skyline layer 5" className="w-full h-auto" style={{ shapeRendering: 'crispEdges' }} />
      </div>

      <div className="absolute bottom-5 left-0 right-0 z-50 text-center">
        <p className="text-[#fff] font-bold text-sm md:text-base">
          ساخته شده با عشق توسط امیر شکیبافر
        </p>
      </div>
    </footer>
  );
};
 
export default FooterSection;