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
      className="p-1 rounded-2xl bg-gradient-to-br from-[#E40000] to-[#003772] h-full"
      animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.7 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <div className="relative flex flex-col justify-between h-full p-6 bg-white backdrop-blur-lg rounded-[14px] overflow-hidden">
        <FaQuoteRight className="absolute top-4 right-4 text-7xl text-slate-200/50" />
        <div className="relative z-10">
          <p className="text-slate-700 text-right leading-relaxed text-lg">
            {quote}
          </p>
        </div>
        <div className="relative z-10 flex justify-end items-center gap-4 mt-6 pt-4">
          <div className="text-right">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-800 hover:text-sky-600 font-bold transition-colors"
            >
              <span className="text-lg">{name}</span>
              <FaLinkedin />
            </a>
            <p className="text-sm text-slate-500">{title}</p>
          </div>
          <Image
            src={imageSrc}
            alt={name}
            width={56}
            height={56}
            className="rounded-full object-cover w-14 h-14 border-2 border-white/50"
          />
        </div>
      </div>
    </motion.div>
  );
};