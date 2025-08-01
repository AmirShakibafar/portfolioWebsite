"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type Skill = { name: string; icon: React.ReactNode };

type SkillCategoryProps = {
  title: string;
  skills: Skill[];
  baseColor: "blue" | "pink" | "gray";
  icon: React.ReactNode;
};

export default function SkillCategory({
  title,
  skills,
  baseColor,
  icon,
}: SkillCategoryProps) {
  const colorClasses = {
    blue: {
      glow: "bg-blue-400/30",
      gradient: "from-blue-600 to-sky-400",
      icon: "text-blue-500",
      pill: "bg-blue-100 text-blue-800",
    },
    pink: {
      glow: "bg-pink-400/30",
      gradient: "from-pink-600 to-purple-400",
      icon: "text-pink-500",
      pill: "bg-pink-100 text-pink-800",
    },
    gray: {
      glow: "bg-slate-400/30",
      gradient: "from-slate-600 to-gray-400",
      icon: "text-slate-500",
      pill: "bg-slate-200 text-slate-800",
    },
  };
  const styles = colorClasses[baseColor];

  const pillContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const pillVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="skill-category-wrapper">
      <div className={`skill-category-glow ${styles.glow}`} />
      <div className="relative z-10">
        <h3 className="skill-category-heading">
          <span className={`skill-category-title ${styles.gradient}`}>
            {title}
          </span>
          <span className={styles.icon}>{icon}</span>
        </h3>
        <motion.ul
          className="skill-category-list"
          variants={pillContainerVariants}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              variants={pillVariants}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`skill-pill ${styles.pill}`}
            >
              <span>{skill.name}</span>
              <span className="skill-pill-icon">{skill.icon}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
