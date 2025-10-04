"use client";

import { motion, Variants } from "framer-motion";
import AnimatedWords from "./AnimatedWords";

const headingChild: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

export default function HeroHeadingClient() {
  return (
    <>
      <AnimatedWords text="سلام!" />
      <motion.div
        className="flex justify-start"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.span variants={headingChild} className="text-red-500 mx-2">
          امیر
        </motion.span>
        <motion.span variants={headingChild}>هستم</motion.span>
        <motion.span variants={headingChild}>:)</motion.span>
      </motion.div>
    </>
  );
}