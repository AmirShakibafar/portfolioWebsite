"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimationControls,
  Variants,
} from "framer-motion";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ShinyButton";
import ProjectModal from "./ProjectModal";

// Expanded project data with descriptions and multiple images
const myProjects = [
  {
    devImageSrc: "/images/project.png",
    images: [
      "/images/project.png",
      "/images/project-2.png",
      "/images/project-3.png",
    ],
    projectName: "پروژه وب اپلیکیشن مدرن",
    projectYear: "2025",
    techStack: ["React", "NextJs", "TypeScript", "TailwindCSS"],
    websiteUrl: "#",
    description:
      "یک وب اپلیکیشن مدرن با استفاده از جدیدترین تکنولوژی‌ها برای ارائه تجربه کاربری بی‌نظیر. این پروژه شامل داشبورد تحلیلی و مدیریت محتوا است.",
  },
  {
    devImageSrc: "/images/project.png",
    images: [
      "/images/project.png",
      "/images/project-2.png",
      "/images/project-3.png",
    ],
    projectName: "پروژه وبسایت شرکتی",
    projectYear: "2024",
    techStack: ["HTML5", "CSS3", "Sass", "JavaScript", "Git"],
    websiteUrl: "#",
    description:
      "طراحی و توسعه یک وب‌سایت شرکتی حرفه‌ای با تمرکز بر هویت بصری و بهینه‌سازی برای موتورهای جستجو (SEO).",
  },
  {
    devImageSrc: "/images/project.png",
    images: [
      "/images/project.png",
      "/images/project-2.png",
      "/images/project-3.png",
    ],
    projectName: "پروژه داشبورد مدیریتی",
    projectYear: "2024",
    techStack: ["React", "Redux", "Axios", "Npm"],
    websiteUrl: "#",
    description:
      "داشبورد مدیریتی قدرتمند برای تحلیل داده‌ها و نظارت بر عملکرد با استفاده از نمودارها و گزارش‌های تعاملی.",
  },
  {
    devImageSrc: "/images/project.png",
    images: [
      "/images/project.png",
      "/images/project-2.png",
      "/images/project-3.png",
    ],
    projectName: "پروژه طراحی و UI کیت",
    projectYear: "2023",
    techStack: ["Figma", "Bootstrap", "JavaScript"],
    websiteUrl: "#",
    description:
      "طراحی یک کیت UI کامل در فیگما و پیاده‌سازی آن با هدف ایجاد یک سیستم طراحی یکپارچه برای توسعه سریع‌تر محصولات.",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  const footerVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <>
      <div ref={ref} id="projects" className="section-container">
        <div className="section-wrapper">
          <motion.h1
            className="section-heading"
            variants={headingContainerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.span
              variants={headingPartVariants}
              className="heading-brace"
            >
              {"{"}
            </motion.span>
            <motion.span variants={headingPartVariants}>
              نمونه کارهای من
            </motion.span>
            <motion.span
              variants={headingPartVariants}
              className="heading-brace"
            >
              {"}"}
            </motion.span>
          </motion.h1>

          <div className="projects-grid">
            {myProjects.map((project, index) => (
              <ProjectCard
                key={project.projectName}
                index={index}
                {...project}
                onClick={() => setSelectedProject(project)}
                className="project-item lg:rtl:odd:translate-y-20 lg:ltr:odd:translate-y-20"
              />
            ))}
          </div>

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

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
