"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaQuoteRight } from "react-icons/fa";
import { Recommendation } from "@/data/recommendations";

type RecommendationCardProps = Recommendation & {
  isActive: boolean;
};

export const RecommendationCard = ({
  quote,
  name,
  title,
  imageSrc,
  linkedinUrl,
  isActive,
}: RecommendationCardProps) => {
  return (
    <motion.div
      className="rec-card-wrapper"
      animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.7 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <div className="rec-card-inner">
        <FaQuoteRight className="rec-card-bg-quote" />
        <div className="relative z-10">
          <p className="rec-card-quote">{quote}</p>
        </div>
        <div className="rec-card-footer">
          <div className="text-right">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rec-card-author-link"
            >
              <span className="rec-card-author-name">{name}</span>
              <FaLinkedin />
            </a>
            <p className="rec-card-author-title">{title}</p>
          </div>
          <Image
            src={imageSrc}
            alt={name}
            width={56}
            height={56}
            className="rec-card-author-image"
          />
        </div>
      </div>
    </motion.div>
  );
};
