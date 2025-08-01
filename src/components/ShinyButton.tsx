"use client";

import { motion } from "framer-motion";
import React from "react";
import { useShinyAnimation } from "@/hooks/useShinyAnimation";

type ShinyButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
};

export default function ShinyButton({
  text,
  variant = "primary",
  onClick,
  className = "",
}: ShinyButtonProps) {
  const { handleMouseMove, borderStyle } = useShinyAnimation();

  const backgroundClass =
    variant === "primary"
      ? "bg-gradient-to-r from-[#003672] to-[#005BB9]"
      : "bg-gradient-to-b from-white to-gray-100";
  const textClass = variant === "primary" ? "text-white" : "text-[#003772]";

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`shiny-btn-container group ${className}`}
    >
      <motion.div className="shiny-btn-border" style={borderStyle} />
      <div className={`shiny-btn-bg ${backgroundClass}`} />
      <span className={`shiny-btn-text ${textClass}`}>{text}</span>
    </motion.button>
  );
}
