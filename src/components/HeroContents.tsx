"use client";
import { motion, Variants, useAnimationControls } from "framer-motion";
import Image from "next/image";
import AnimatedWords from "./AnimatedWords";
import AnimatedNumber from "./AnimatedNumber";
import ShinyButton from "./ShinyButton";
import React, { useEffect } from "react";

export default function HeroContent() {
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

  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("flyIn").then(() => {
      controls.start("float");
    });
  }, [controls]);

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: "-50vw", // Fly in from off-screen left
      scale: 0.8,
    },
    flyIn: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "circOut",
      },
    },
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
    <>
      <div className="absolute top-0 start-0 h-full w-3/5 backdrop-blur-sm [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1))]" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="flex items-center gap-8">
          <div className="flex flex-col p-6">
            <h1 className="hero-heading">
              <AnimatedWords text="!سلام" />
              <motion.div
                className="flex justify-start"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
              >
                <motion.span
                  variants={headingChild}
                  className="text-red-500 mx-2"
                >
                  امیر
                </motion.span>
                <motion.span variants={headingChild}>هستم</motion.span>
                <motion.span variants={headingChild}>:)</motion.span>
              </motion.div>
            </h1>

            <AnimatedWords
              text="کارم طراحی و توسعه محصولات دیجیتال جذاب و کاربرپسنده"
              className="hero-subheading"
            />

            <p className="hero-paragraph">
              <span className="hero-highlight">
                +<AnimatedNumber value={1.5} decimals={1} />
              </span>{" "}
              سال سابقه |{" "}
              <span className="hero-highlight">
                <AnimatedNumber value={4} />
              </span>{" "}
              پروژه واقعی |{" "}
              <span className="hero-highlight">
                +<AnimatedNumber value={36} />
              </span>{" "}
              استار گیت‌هاب
            </p>

            <div className="mt-10 flex justify-start gap-4">
              <ShinyButton text="دیدن نمونه کارهام →" variant="secondary" />
              <ShinyButton text="تماس با من →" />
            </div>
          </div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <Image
              src="/images/hero_image.png"
              alt="Superhero Amir"
              width={520}
              height={770}
              className="[transform:translateZ(50px)]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
