"use client";
import { motion, Variants, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedWords from "./AnimatedWords";
import AnimatedNumber from "./AnimatedNumber";
import ShinyButton from "./ShinyButton";
import React, { useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function HeroContent() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

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
      x: "-50vw",
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
      <div className="hero-blur-effect" />
      <div className="relative z-10">
        <div className="hero-layout-container">
          <div className="hero-text-wrapper">
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

            <div className="hero-buttons-container">
              <Link href="#projects">
                <ShinyButton
                  text="دیدن نمونه کارهام →"
                  variant="secondary"
                  // The size prop is removed
                />
              </Link>
              <Link href="#contact">
                <ShinyButton
                  text="تماس با من →"
                  // The size prop is removed
                />
              </Link>
            </div>
          </div>

          <motion.div
            className="hero-image-wrapper"
            // ... props
          >
            <Image
              src="/images/hero_image.png"
              alt="Superhero Amir"
              fill
              priority
              className="object-cover [transform:translateZ(50px)]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
