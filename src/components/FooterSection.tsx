"use client";
import React, { useEffect, useRef, useState, FC } from "react";
import ShinyButton from "./ShinyButton";

const FooterSection: FC = (props) => {
  const footerRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!footerRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } =
        footerRef.current.getBoundingClientRect();
      const x = (clientX - left - width / 2) / (width / 2);
      const y = (clientY - top - height / 2) / (height / 2);

      const layers =
        footerRef.current.querySelectorAll<HTMLElement>(".parallax-layer");

      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed || "0");
        const xPos = Math.round(x * speed);
        const yPos = Math.round(y * speed);
        layer.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isIntersecting]);

  const renderLayer = (
    speed: string,
    zIndex: number,
    src: string,
    alt: string
  ) => (
    <div
      data-speed={speed}
      style={{
        zIndex,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
      className="parallax-layer absolute bottom-0 left-0 w-full pointer-events-none"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto"
        style={{
          shapeRendering: "geometricPrecision",
          transform: "translate3d(0, 0, 0)",
        }}
      />
    </div>
  );

  return (
    <footer
      ref={footerRef}
      {...props}
      className="relative w-full h-[85vh] lg:h-screen overflow-hidden bg-[#24DAFE]"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#f7feff] to-[#24DAFE]" />

      {renderLayer("-8", 10, "/images/footer/2.svg", "City skyline layer 2")}
      {renderLayer("8", 20, "/images/footer/3.svg", "City skyline layer 3")}
      {renderLayer("18", 30, "/images/footer/4.svg", "City skyline layer 4")}
      {renderLayer("35", 40, "/images/footer/5.svg", "City skyline layer 5")}

      <div className="absolute bottom-5 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-center gap-4 px-4 text-center">
        <p className="text-white font-bold text-sm md:text-base drop-shadow-md">
          طراحی شده با ❤️ در دل شب‌های کدنویسی
        </p>
        <a href="#top">
          <ShinyButton text="بازگشت به بالا" size="small" />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;