"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import AnimatedWords from "./AnimatedWords";
import SkillCategory from "./SkillCategory";
import { frontendSkills, uiuxSkills, tools } from "@/data/skills";
import { FaPalette, FaCode, FaTools } from "react-icons/fa";

const SkillsSection = () => {
  const showMobileLayout = useMediaQuery("(max-width: 1279px)");

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="section-container">
      <div className="section-wrapper">
        <motion.div
          className="skills-section-inner-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <AnimatedWords
            text="⭐ توانایی‌هام چیه؟"
            className="skills-section-heading"
          />

          <motion.div
            className="skills-section-grid"
            variants={containerVariants}
          >
          
            <motion.div
              variants={itemVariants}
              className="skills-section-right-column"
            >
              <SkillCategory
                title="طراح UI/UX"
                skills={uiuxSkills}
                baseColor="pink"
                icon={<FaPalette />}
              />
              <SkillCategory
                title="ابزارهای تیمی"
                skills={tools}
                baseColor="gray"
                icon={<FaTools />}
              />
            </motion.div>

         
            <motion.div variants={itemVariants}>
              <SkillCategory
                title="توسعه فرانت‌اند"
                skills={frontendSkills}
                baseColor="blue"
                icon={<FaCode />}
              />
            </motion.div>

         
            <motion.div
              variants={imageVariant}
              className="skills-section-image-container order-first sm:col-span-2 xl:order-none xl:col-span-1"
            >
              <div className="skills-section-image-wrapper">
                <Image
                  src={
                    showMobileLayout
                      ? "/images/skillsForMobile.png"
                      : "/images/skills-img.avif"
                  }
                  alt="Superhero Character"
                  fill
                  className="object-cover relative z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
