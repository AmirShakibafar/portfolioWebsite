"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React from "react";

function useShinyButtonAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 400, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 400, damping: 25 });

  const borderBackground = useMotionTemplate`radial-gradient(350px circle at ${smoothMouseX}px ${smoothMouseY}px, #E40000, #003772, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return { handleMouseMove, borderStyle: { background: borderBackground } };
}

export default function ShinyButton({
  text,
  variant = "primary",
}: {
  text: string;
  variant?: "primary" | "secondary";
}) {
  const { handleMouseMove, borderStyle } = useShinyButtonAnimation();

  // Conditionally set classes based on the variant prop
  const backgroundClass =
    variant === "primary"
      ? "bg-gradient-to-r from-[#003672] to-[#005BB9]"
      : "bg-gradient-to-b from-white to-gray-100";

  const textClass = variant === "primary" ? "text-white" : "text-[#003772]";

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full px-8 py-8 text-lg font-medium transition-all duration-300 hover:shadow-[0_0_25px_#005BB9]"
    >
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={borderStyle}
      />

      <div
        className={`absolute inset-[2.5px] rounded-full ${backgroundClass}`}
      />

      <span className={`relative ${textClass} text-[24px] font-bold`}>{text}</span>
    </motion.button>
  );
}
