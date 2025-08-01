"use client";

import React from "react";
import { motion } from "framer-motion";
import { Recommendation } from "@/data/recommendations";
import { useCarousel } from "@/hooks/useCarousel";
import { RecommendationCard } from "./RecommendationCard";

type RecommendationsCarouselProps = {
  data: Recommendation[];
  isInView: boolean;
};

export const RecommendationsCarousel = ({
  data,
  isInView,
}: RecommendationsCarouselProps) => {
  const { index, setIndex, trackOffset, containerRef, cardRefs } = useCarousel({
    itemCount: data.length,
    isInView,
  });

  return (
    <div className="lg:col-span-2">
      <div ref={containerRef} className="recommendations-carousel-container">
        <motion.div
          className="recommendations-carousel-track"
          animate={{ x: trackOffset }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
        >
          {data.map((rec, i) => (
            <div
              key={i}
              // This is the corrected ref callback
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="recommendations-carousel-item"
            >
              <RecommendationCard {...rec} isActive={i === index} />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="recommendations-pagination-wrapper">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`recommendations-pagination-dot ${
              index === i ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
