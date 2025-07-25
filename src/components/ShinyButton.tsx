"use client";

import { motion } from "framer-motion";
import React from "react";
import { useShinyAnimation } from "@/hooks/useShinyAnimation"; // Adjust path if needed

type ShinyButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  size?: "big" | "small";
  onClick?: () => void;
  className?: string;
};

export default function ShinyButton({
  text,
  variant = "primary",
  size = "big",
  onClick,
  className = "",
}: ShinyButtonProps) {
  const { handleMouseMove, borderStyle } = useShinyAnimation();

  const backgroundClass =
    variant === "primary"
      ? "bg-gradient-to-r from-[#003672] to-[#005BB9]"
      : "bg-gradient-to-b from-white to-gray-100";
  const textClass = variant === "primary" ? "text-white" : "text-[#003772]";
  const sizeClasses = {
    container: size === "big" ? "h-14 px-8 py-8" : "h-10 px-6 py-6",
    text: size === "big" ? "text-xl" : "text-base",
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full font-iran transition-shadow duration-300 hover:shadow-[0_0_25px_#005BB9] ${sizeClasses.container} ${className}`}
    >
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={borderStyle}
      />
      <div
        className={`absolute inset-[2.5px] rounded-full ${backgroundClass}`}
      />
      <span className={`relative font-bold ${textClass} ${sizeClasses.text}`}>
        {text}
      </span>
    </motion.button>
  );
}
