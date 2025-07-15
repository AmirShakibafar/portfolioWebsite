'use client';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const AnimatedWords = ({
  text,
  className = "",
  direction = "ltr",
}: {
  text: string;
  className?: string;
  direction?: "ltr" | "rtl";
}) => {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap overflow-hidden ${
        direction === "rtl" ? "flex-row-reverse" : ""
      } ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={
            direction === "rtl"
              ? { marginLeft: "0.25em" }
              : { marginRight: "0.25em" }
          }
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedWords;