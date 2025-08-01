"use client";

import { useState, useEffect, useRef } from "react";

type UseCarouselProps = {
  itemCount: number;
  isInView: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
};

export const useCarousel = ({
  itemCount,
  isInView,
  autoplay = true,
  autoplayDelay = 5000,
}: UseCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const calculateOffset = () => {
      if (containerRef.current && cardRefs.current[index]) {
        const container = containerRef.current;
        const card = cardRefs.current[index]!;
        const offset =
          container.offsetWidth / 2 - card.offsetLeft - card.offsetWidth / 2;
        setTrackOffset(offset);
      }
    };

    calculateOffset();
    window.addEventListener("resize", calculateOffset);
    return () => window.removeEventListener("resize", calculateOffset);
  }, [index]);

  useEffect(() => {
    if (isInView && autoplay) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % itemCount);
      }, autoplayDelay);
      return () => clearInterval(interval);
    }
  }, [isInView, itemCount, autoplay, autoplayDelay]);

  return { index, setIndex, trackOffset, containerRef, cardRefs };
};
