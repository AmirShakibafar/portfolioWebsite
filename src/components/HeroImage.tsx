"use client";

import { motion, Variants, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function HeroImage() {
  const controls = useAnimationControls();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("float");
    }, 1000); 

    return () => clearTimeout(timer);
  }, [controls]);

  const imageVariants: Variants = {
    float: {
      y: [0, -12, 5, -12, 0],
      x: [0, 5, -5, 5, 0],
      rotate: [0, -1.5, 1.5, -1.5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="hero-image-wrapper"
      variants={imageVariants}
      animate={controls}
    >
      <Image
        src="/images/hero_image.avif"
        alt="Superhero Amir"
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
