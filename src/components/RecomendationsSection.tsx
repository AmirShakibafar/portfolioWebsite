"use client";

import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import { recommendationsData } from "@/data/recommendations";
import { RecommendationsCarousel } from "./RecommendationsCarousel";


export default function RecommendationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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

          <RecommendationsCarousel
            data={recommendationsData}
            isInView={isInView}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
