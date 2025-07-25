// components/AboutHero.tsx
"use client";

import { motion, Variants, useAnimationControls } from "framer-motion";
import Image from "next/image";
import AnimatedWords from "./AnimatedWords";
import ShinyButton from "./ShinyButton";
import React, { useEffect } from "react";

export default function AboutHero() {
  const headingChild: Variants = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 20 },
  };

  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("fadeIn");
  }, [controls]);

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    fadeIn: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-6 py-16 text-right text-gray-800">
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={controls}
        className="w-full max-w-[465px] mb-6 lg:mb-0 lg:ml-12"
      >
        <Image
          src="/images/aboutme.jpg"
          alt="Profile"
          width={465}
          height={650}
          className="rounded-3xl shadow-xl"
        />
      </motion.div>

      <div className="max-w-3xl">
        <h1 className="text-[48px] font-bold mb-6 text-blue-900">
          <AnimatedWords text="درباره‌ی من" direction="rtl" />
        </h1>
        <motion.p
          className="leading-relaxed text-[24px] mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.05 }}
        >
          <motion.span variants={headingChild}>
            من امیرم، یه توسعه‌دهنده‌ی فرانت که عاشق ساختن پروژه‌های خلاق، خوشگل و در عین حال کاربردی و کاربرپسنده‌ست!
          </motion.span>{" "}
          <motion.span variants={headingChild}>
            الان به صورت فریلنس روی طراحی و توسعه‌ی فرانت پروژه‌های مختلف کار می‌کنم و همیشه دنبال ایده‌های تازه و چالش‌های جدیدم.
          </motion.span>{" "}
          <motion.span variants={headingChild}>
            از بچگی پای کامپیوتر بزرگ شدم و با همون انرژی و عشق، مسیرم رو ادامه می‌دم.
          </motion.span>
        </motion.p>

        <div className="flex justify-end gap-4">
          <ShinyButton text="→ دیدن رزومه" variant="secondary" />
          <ShinyButton text="→ تماس با من" />
        </div>
      </div>
    </section>
  );
}
