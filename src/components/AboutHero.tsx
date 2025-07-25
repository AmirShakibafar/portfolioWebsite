// components/AboutHero.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import AnimatedWords from "./AnimatedWords";
import ShinyButton from "./ShinyButton";
import React from "react";
import {ShimmerText} from "./ShimmerText"


export default function AboutHero() {
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-24 text-gray-800 overflow-hidden">
      <div className="max-w-3xl lg:mr-12">
        <h1 className="text-[48px] font-bold mb-6 text-blue-900 flex items-center justify-end">
          <AnimatedWords text="درباره‌ی من" direction="rtl" />
        </h1>

        <ShimmerText>
          من امیرم، یه توسعه‌دهنده‌ی فرانت‌اند که عاشق خلق تجربه‌های کاربری
          خلاق، جذاب و کاربردیه. کاری که ازش لذت می‌برم، تبدیل کردن ایده‌های
          باحال به محصولاتی واقعیه که هم چشم‌گیر باشن و هم به‌درد بخورن. از همون
          بچگی که اولین‌بار پای کامپیوتر نشستم، شوق ساختن توی وجودم بوده و هنوزم
          با همون انرژی و هیجان کد می‌زنم و دنبال چالش‌های جدید می‌گردم
        </ShimmerText>

        <div className="flex justify-end gap-4">
          <ShinyButton text="→ دیدن رزومه" variant="secondary" />
          <ShinyButton text="→ تماس با من" />
        </div>
      </div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-[465px] mb-8 lg:mb-0"
      >
        <Image
          src="/images/aboutme.jpg"
          alt="Profile"
          width={465}
          height={650}
          className="rounded-3xl shadow-xl"
          priority
        />
      </motion.div>
    </section>
  );
}
