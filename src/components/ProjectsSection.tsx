"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimationControls,
  Variants,
} from "framer-motion";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ShinyButton";

type TechName =
  | "HTML5"
  | "CSS3"
  | "JavaScript"
  | "React"
  | "TailwindCSS"
  | "Bootstrap"
  | "Redux"
  | "NextJs"
  | "Figma"
  | "Axios"
  | "TypeScript"
  | "Sass"
  | "Git"
  | "Npm";

type ProjectCardProps = {
  devImageSrc: string;
  projectName: string;
  projectYear: string;
  techStack: TechName[];
  websiteUrl: string;
};

const myProjects: ProjectCardProps[] = [
  {
    devImageSrc: "/images/project.png",
    projectName: "پروژه وب اپلیکیشن مدرن",
    projectYear: "2025",
    techStack: ["React", "NextJs", "TypeScript", "TailwindCSS"],
    websiteUrl: "#",
  },
  {
    devImageSrc: "/images/project.png",
    projectName: "پروژه وبسایت شرکتی",
    projectYear: "2024",
    techStack: ["HTML5", "CSS3", "Sass", "JavaScript", "Git"],
    websiteUrl: "#",
  },
  {
    devImageSrc: "/images/project.png",
    projectName: "پروژه داشبورد مدیریتی",
    projectYear: "2024",
    techStack: ["React", "Redux", "Axios", "Npm"],
    websiteUrl: "#",
  },
  {
    devImageSrc: "/images/project.png",
    projectName: "پروژه طراحی و UI کیت",
    projectYear: "2023",
    techStack: ["Figma", "Bootstrap", "JavaScript"],
    websiteUrl: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // --- Animation Variants ---
  const headingContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const headingPartVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  };

  const footerVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.2 } },
  };

  return (
    <div ref={ref} className="section-container">
      <div className="section-wrapper">
        <motion.h2
          className="section-heading"
          variants={headingContainerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.span variants={headingPartVariants} className="heading-brace">
            {"{"}
          </motion.span>
          <motion.span variants={headingPartVariants}>
            نمونه کارهای من
          </motion.span>
          <motion.span variants={headingPartVariants} className="heading-brace">
            {"}"}
          </motion.span>
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={gridContainerVariants}
          initial="hidden"
          animate={controls}
        >
          {myProjects.map((project) => (
            <motion.div
              key={project.projectName}
              variants={cardVariants}
            
              className="project-item rtl:even:translate-y-20 ltr:odd:translate-y-20"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="section-footer"
          variants={footerVariants}
          initial="hidden"
          animate={controls}
        >
          <ShinyButton text="دیدن تمام پروژه هام" variant="secondary" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
