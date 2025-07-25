// components/ResumeSection.tsx
"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";
import { ShimmerText } from "./ShimmerText";
import { User } from "react-feather";

// A new component for the resume download links
const ResumeLink = ({
  href,
  download,
  text,
  variant = "primary",
}: {
  href: string;
  download: string;
  text: string;
  variant?: "primary" | "secondary";
}) => {
  const backgroundClass =
    variant === "primary"
      ? "bg-gradient-to-br from-[#003672] to-[#005BB9]"
      : "bg-white";
  const textClass = variant === "primary" ? "text-white" : "text-slate-700";
  const iconClass = variant === "primary" ? "text-white/70" : "text-slate-400";
  const linesClass = variant === "primary" ? "bg-white/20" : "bg-slate-200";
  const dogEarClass =
    variant === "primary"
      ? "border-t-[#005BB9] border-s-transparent"
      : "border-t-slate-200 border-s-transparent";

  return (
    <motion.a
      href={href}
      download={download}
      whileHover={{ scale: 1.05, rotate: -3, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`group relative flex flex-col w-40 h-48 rounded-lg shadow-lg overflow-hidden p-4 ${backgroundClass}`}
    >
      <div
        className={`absolute top-0 end-0 w-0 h-0 border-solid border-t-12 border-s-12 ${dogEarClass}`}
      />

      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${linesClass}`}
        >
          <User className={iconClass} size={20} />
        </div>
        <div className="flex-grow space-y-1.5">
          <div className={`w-full h-2 rounded-full ${linesClass}`}></div>
          <div className={`w-3/4 h-2 rounded-full ${linesClass}`}></div>
        </div>
      </div>
      <div className="flex-grow space-y-1.5 mt-4">
        <div className={`w-full h-1.5 rounded-full ${linesClass}`}></div>
        <div className={`w-full h-1.5 rounded-full ${linesClass}`}></div>
        <div className={`w-5/6 h-1.5 rounded-full ${linesClass}`}></div>
      </div>

      <span
        className={`text-center text-sm font-semibold mt-auto ${textClass}`}
      >
        {text}
      </span>
    </motion.a>
  );
};

export default function ResumeSection() {
  const persianResumePath = "/resumes/AmirShakibafar_Resume_FA.pdf";
  const englishResumePath = "/resumes/AmirShakibafar_Resume_EN.pdf";

  return (
    <section className="section-container">
      <div className="section-wrapper">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col h-auto font-iran  lg:items-end relative z-10"
            >
              <div className="flex items-center w-full gap-3">
                <h2 className="text-[48px] font-extrabold bg-gradient-to-r from-[#003672] to-[#005BB9] bg-clip-text text-transparent">
                  دریافت رزومه
                </h2>
              </div>
              <ShimmerText>
                می‌تونید نسخه‌ی کامل رزومه‌ی من رو از اینجا دانلود کنید.
              </ShimmerText>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6">
                <ResumeLink
                  href={persianResumePath}
                  download="AmirShakibafar_Resume_FA.pdf"
                  text="دانلود نسخه فارسی"
                  variant="primary"
                />
                <ResumeLink
                  href={englishResumePath}
                  download="AmirShakibafar_Resume_EN.pdf"
                  text="Download English CV"
                  variant="secondary"
                />
              </div>
            </motion.div>
          </div>

          {/* Image with 3D Tilt Effect */}
          <motion.div
           
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-lg"
          >
            {/* Soft glow behind the image */}
            <div className="absolute inset-10 bg-blue-500/40 rounded-full blur-3xl -z-10" />
            <div style={{ transform: "translateZ(8px)" }}>
              <Image
                src="/images/resume.png"
                alt="A preview of the resume"
                width={800}
                height={1120}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
