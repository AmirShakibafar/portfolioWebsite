import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React from "react";

export function useShinyAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use spring physics for a smoother, more natural motion
  const smoothMouseX = useSpring(mouseX, { stiffness: 400, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 400, damping: 25 });

  // Create a dynamic CSS gradient that follows the smoothed mouse position
  const borderBackground = useMotionTemplate`radial-gradient(350px circle at ${smoothMouseX}px ${smoothMouseY}px, #E40000, #003772, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return { handleMouseMove, borderStyle: { background: borderBackground } };
}