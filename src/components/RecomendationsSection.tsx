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
        const offset = (container.offsetWidth / 2) - card.offsetLeft - (card.offsetWidth / 2);
        setTrackOffset(offset);
      }
    };

    calculateOffset(); 
    window.addEventListener('resize', calculateOffset);
    return () => window.removeEventListener('resize', calculateOffset);
  }, [index]);



  useEffect(() => {
  
    if (isInView) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % recommendationsData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isInView, recommendationsData.length]);


  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="section-container" ref={sectionRef}>
      <motion.div
        className="section-wrapper relative overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <FaQuoteRight className="absolute -top-8 right-0 text-[20rem] text-blue-500/5 -z-0" />
        
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10"
        >
          <div className="lg:col-span-2">
            <div ref={containerRef} className="overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: trackOffset }}
                transition={{ type: "spring", stiffness: 150, damping: 25 }}
              >
                {recommendationsData.map((rec, i) => (
                  <div
                    key={i}
                    ref={(el) => { cardRefs.current[i] = el; }}
                    className="w-[90%] md:w-4/5 lg:w-[85%] flex-shrink-0"
                  >
                    <RecommendationCard {...rec} isActive={i === index} />
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              {recommendationsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === i ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="text-right lg:col-span-1">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#003772] to-[#0068D8] bg-clip-text text-transparent">
              دیگران چه می‌گویند؟
            </h2>
            <p className="text-lg text-[#003772] mt-3">
              نگاهی به نظرات همکاران و کارفرمایان
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};