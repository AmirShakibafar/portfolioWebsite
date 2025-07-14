'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedWords from './AnimatedWords';

export default function HeroContent() {
  return (
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="flex items-center gap-8">
        
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        >
          <Image
            src="/images/hero_image.png"
            alt="Superhero Amir"
            width={520}
            height={770}
          />
        </motion.div>

        <div className="flex flex-col">
          {/* The h1 is now animated */}
          <h1 className="hero-heading">
            <AnimatedWords text="!سلام" direction="rtl"/>
            <AnimatedWords text=" امیر هستم (:" direction="rtl"/>
          </h1>
          
          <AnimatedWords 
            text="کارم طراحی و توسعه محصولات دیجیتال جذاب و کاربرپسنده" 
            className="hero-subheading"
            direction="rtl"
          />
          
          <p className="hero-paragraph">
            +1.5 سال سابقه | ۴ پروژه واقعی | +36 استار گیت‌هاب
          </p>
          
          <div className="mt-6 flex justify-end gap-4">
            <button className="btn-secondary">
              دیدن نمونه کارهام →
            </button>
            <button className="btn-primary">
              تماس با من
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}