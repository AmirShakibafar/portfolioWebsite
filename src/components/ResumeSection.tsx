"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { ShimmerText } from "./ShimmerText";
import ResumeLink from "./ResumeLink";

export default function ResumeSection() {
  const persianResumePath = "/resumes/AmirShakibafar_Resume_FA.pdf";
  const englishResumePath = "/resumes/AmirShakibafar_Resume_EN.pdf";

  return (
    <section id="resume" className="section-container">
      <div className="section-wrapper">
        <div className="resume-section-layout">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="resume-text-content"
            >
              <h2 className="resume-heading">دریافت رزومه</h2>
              <ShimmerText>
                می‌تونید نسخه‌ی کامل رزومه‌ی من رو از اینجا دانلود کنید.
              </ShimmerText>

              <div className="resume-links-container">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="resume-image-wrapper"
          >
            <div className="resume-image-glow" />
            <Image
              src="/images/resume.png"
              alt="A preview of the resume"
              width={800}
              height={1120}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
