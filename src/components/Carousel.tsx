"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the types for the component's props
type CarouselProps = {
  images: string[];
  projectName: string;
};

export default function Carousel({ images, projectName }: CarouselProps) {
  const [index, setIndex] = useState(0);

  // Add type for the event object
  const nextSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Add type for the event object
  const prevSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <motion.div
        className="carousel-track"
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`${projectName} image ${i + 1}`}
            width={1600}
            height={900}
            className="carousel-image"
            priority={i === 0}
          />
        ))}
      </motion.div>
      <button onClick={prevSlide} className="carousel-nav-button end-3">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="carousel-nav-button start-3">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}