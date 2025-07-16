"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import AnimatedWords from "./AnimatedWords";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaFigma,
  FaSass,
  FaGitAlt,
  FaNpm,
  FaJira,
  FaTrello,
  FaGithub,
  FaPencilAlt,
  FaSearch,
  FaSitemap,
  FaRoute,
  FaVial,
  FaMapMarkerAlt,
  FaUserFriends,
  FaPalette,
  FaMousePointer,
  FaCode,
  FaTools,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiAxios,
  SiStrapi,
  SiNotion,
} from "react-icons/si";
import { TbComponents } from "react-icons/tb";

const frontendSkills = [
  { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React JS", icon: <FaReact className="text-sky-400" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-black" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Zustand", icon: <span role="img" aria-label="bear emoji" className="text-lg">🐻</span> },
  { name: "Axios", icon: <SiAxios className="text-purple-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700" /> },
  { name: "Strapi", icon: <SiStrapi className="text-blue-800" /> },
  { name: "React Leaflet", icon: <FaMapMarkerAlt className="text-green-600" /> },
  { name: "Shadcn UI", icon: <TbComponents className="text-black" /> },
];
const uiuxSkills = [
  { name: 'Usability Test', icon: <FaVial className="text-pink-500" /> },
  { name: 'User Flow', icon: <FaRoute className="text-pink-500" /> },
  { name: 'UX Research', icon: <FaSearch className="text-pink-500" /> },
  { name: 'Prototyping', icon: <FaMousePointer className="text-pink-500" /> },
  { name: 'Personas', icon: <FaUserFriends className="text-pink-500" /> },
  { name: 'Design Systems', icon: <FaPalette className="text-pink-500" /> },
  { name: 'Wireframe', icon: <FaPencilAlt className="text-pink-500" /> },
  { name: 'Info. Architecture', icon: <FaSitemap className="text-pink-500" /> },
];
const tools = [
  { name: 'Figma', icon: <FaFigma className="text-pink-600" /> },
  { name: 'Jira', icon: <FaJira className="text-blue-500" /> },
  { name: 'Trello', icon: <FaTrello className="text-sky-600" /> },
  { name: 'Github', icon: <FaGithub className="text-black" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Notion', icon: <SiNotion className="text-black" /> },
];


type Skill = { name: string; icon: React.ReactNode; };
type SkillCategoryProps = {
  title: string;
  skills: Skill[];
  baseColor: 'blue' | 'pink' | 'gray';
  icon: React.ReactNode;
};

const SkillCategory = ({ title, skills, baseColor, icon }: SkillCategoryProps) => {
  const colorClasses = {
    blue: { glow: "bg-blue-400/30", gradient: "from-blue-600 to-sky-400", icon: "text-blue-500", pill: "bg-blue-100 text-blue-800" },
    pink: { glow: "bg-pink-400/30", gradient: "from-pink-600 to-purple-400", icon: "text-pink-500", pill: "bg-pink-100 text-pink-800" },
    gray: { glow: "bg-slate-400/30", gradient: "from-slate-600 to-gray-400", icon: "text-slate-500", pill: "bg-slate-200 text-slate-800" },
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
    <div className="relative p-4 h-full">
      <div className={`absolute inset-0 rounded-full blur-3xl ${styles.glow}`} />
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-4 flex justify-end items-center gap-3">
          <span className={`bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent`}>{title}</span>
          <span className={styles.icon}>{icon}</span>
        </h3>
        <motion.ul
          className="flex flex-wrap gap-2 justify-end"
          variants={pillContainerVariants}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              variants={pillVariants}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold cursor-pointer ${styles.pill}`}
            >
              <span>{skill.name}</span>
              <span className="text-lg">{skill.icon}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};


const SkillsSection = () => {
  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="section-container">
      <div className="section-wrapper">
        <motion.div
          className="p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <AnimatedWords
            text="⭐ توانایی‌هام چیه؟"
            className="text-[42px] font-bold text-blue-800 mb-12 text-right"
            direction="rtl"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-right"
            variants={containerVariants}
          >
            <motion.div variants={imageVariant} className="flex justify-center items-center h-full">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400/30 rounded-full blur-[128px] -z-10" />
                <Image
                  src="/images/skills-img.png"
                  alt="Superhero Character"
                  width={400}
                  height={400}
                  className="w-[400px] h-auto relative z-10"
                />
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <SkillCategory
                title="توسعه فرانت‌اند"
                skills={frontendSkills}
                baseColor="blue"
                icon={<FaCode />}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-8">
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;