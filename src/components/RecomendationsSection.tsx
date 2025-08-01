"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import { recommendationsData } from "@/data/recommendations";
import { RecommendationCard } from "./RecommendationCard";

export const RecomendationsSection = () => {
  const [index, setIndex] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
    if (isInView) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % recommendationsData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="section-container" ref={sectionRef}>
      <motion.div
        className="section-wrapper recommendations-wrapper"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <FaQuoteRight className="absolute -top-8 start-0 text-[20rem] text-blue-500/5 -z-0" />

        <motion.div variants={itemVariants} className="recommendations-grid">
          <div className="recommendations-text-content">
            <h1 className="recommendations-heading">دیگران چه می‌گویند؟</h1>
            <p className="recommendations-subheading">
              نگاهی به نظرات همکاران و کارفرمایان
            </p>
          </div>

          <div className="lg:col-span-2">
            <div
              ref={containerRef}
              className="recommendations-carousel-container"
            >
              <motion.div
                className="recommendations-carousel-track"
                animate={{ x: trackOffset }}
                transition={{ type: "spring", stiffness: 150, damping: 25 }}
              >
                {recommendationsData.map((rec, i) => (
                  <div
                    key={i}
                    ref={(el) => (cardRefs.current[i] = el)}
                    className="recommendations-carousel-item"
                  >
                    <RecommendationCard {...rec} isActive={i === index} />
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="recommendations-pagination-wrapper">
              {recommendationsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`recommendations-pagination-dot ${
                    index === i
                      ? "bg-blue-600"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
