"use client";
import Clouds from "./Clouds";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-[#59E1FD] from-60% to-[#F7FEFF] overflow-hidden">
      <Clouds count={35} />
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
            <h1 className="hero-heading">
              !سلام <br /> (:<span className="text-red-500">امیر</span> هستم
            </h1>
            <h2 className="hero-subheading">
              کارم طراحی و توسعه محصولات دیجیتال جذاب و کاربرپسنده
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
