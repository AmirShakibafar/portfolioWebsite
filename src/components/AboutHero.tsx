"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import the Link component
import AnimatedWords from "./AnimatedWords";
import ShinyButton from "./ShinyButton";
import React from "react";
import { ShimmerText } from "./ShimmerText";
import { useShinyAnimation } from "@/hooks/useShinyAnimation";

export default function AboutHero() {
  const { handleMouseMove, borderStyle } = useShinyAnimation();

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="about-hero-section">
      <div className="about-hero-content">
        <h1 className="about-hero-heading">
          <AnimatedWords text="درباره‌ی من" />
        </h1>
        <ShimmerText>
          من امیرم، یه توسعه‌دهنده‌ی فرانت‌اند که عاشق خلق تجربه‌های کاربری
          خلاق، جذاب و کاربردیه. کاری که ازش لذت می‌برم، تبدیل کردن ایده‌های
          باحال به محصولاتی واقعیه که هم چشم‌گیر باشن و هم به‌درد بخورن. از همون
          بچگی که اولین‌بار پای کامپیوتر نشستم، شوق ساختن توی وجودم بوده و هنوزم
          با همون انرژی و هیجان کد می‌زنم و دنبال چالش‌های جدید می‌گردم
        </ShimmerText>
        <div className="about-hero-buttons">
          {/* Wrap the "Resume" button with a Link */}
          <Link href="/about#resume">
            <ShinyButton text="→ دیدن رزومه" variant="secondary" />
          </Link>
          {/* Wrap the "Contact" button with a Link */}
          <Link href="/about#contact">
            <ShinyButton text="→ تماس با من" />
          </Link>
        </div>
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="about-hero-image-frame group"
      >
        <motion.div className="about-hero-image-border" style={borderStyle} />
        <div className="about-hero-image-inner">
          <Image
            src="/images/aboutme.jpg"
            alt="Profile"
            fill
            className="about-hero-image"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
