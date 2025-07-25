"use client";
import React, { useEffect, useRef, useState, createRef } from "react";
import Image from "next/image";
import ShinyButton from "./ShinyButton";

const layers = [
  {
    speed: -8,
    zIndex: 10,
    src: "/images/footer/2.svg",
    alt: "City skyline layer 2",
  },
  {
    speed: 8,
    zIndex: 20,
    src: "/images/footer/3.svg",
    alt: "City skyline layer 3",
  },
  {
    speed: 18,
    zIndex: 30,
    src: "/images/footer/4.svg",
    alt: "City skyline layer 4",
  },
  {
    speed: 35,
    zIndex: 40,
    src: "/images/footer/5.svg",
    alt: "City skyline layer 5",
  },
];

export default function FooterSection(props: React.ComponentProps<"footer">) {
  const footerRef = useRef<HTMLElement>(null);
  const layerRefs = useRef(layers.map(() => createRef<HTMLDivElement>()));
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const currentFooter = footerRef.current;
    if (currentFooter) observer.observe(currentFooter);
    return () => {
      if (currentFooter) observer.unobserve(currentFooter);
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { current: footer } = footerRef;
      if (!footer) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = footer.getBoundingClientRect();

      const x = (clientX - left - width / 2) / (width / 2);
      const y = (clientY - top - height / 2) / (height / 2);

      layerRefs.current.forEach((ref, index) => {
        const layerEl = ref.current;
        const speed = layers[index].speed;
        if (layerEl) {
          const xPos = Math.round(x * speed);
          const yPos = Math.round(y * speed);
          layerEl.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isIntersecting]);

  return (
    <footer ref={footerRef} {...props} className="footer-container">
      <div className="footer-bg-gradient" />

      {layers.map((layer, index) => (
        <div
          key={index}
          ref={layerRefs.current[index]}
          style={{
            zIndex: layer.zIndex,
            transition: "transform 0.1s ease-out",
          }}
          className="footer-parallax-layer"
        >
          <Image
            src={layer.src}
            alt={layer.alt}
            fill
            className="footer-parallax-image"
            priority={index < 2}
          />
        </div>
      ))}

      <div className="footer-content-wrapper">
        <p className="footer-credits-text">
          طراحی شده با ❤️ در دل شب‌های کدنویسی
        </p>
        <a href="#top">
          <ShinyButton text="بازگشت به بالا" size="small" />
        </a>
      </div>
    </footer>
  );
}