"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
// import ShinyButton from "./ShinyButton";
import ProjectModal from "./ProjectModal";
import { myProjects, Project } from "@/data/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <motion.div
        id="projects"
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="section-wrapper">
          <motion.h1 className="section-heading" variants={itemVariants}>
            <span className="heading-brace">{"{"}</span>
            <span>نمونه کارهای من</span>
            <span className="heading-brace">{"}"}</span>
          </motion.h1>

          <motion.div className="projects-grid" variants={itemVariants}>
            {myProjects.map((project, index) => (
              <ProjectCard
                key={project.projectName}
                index={index}
                {...project}
                onClick={() => setSelectedProject(project)}
                className="project-item lg:rtl:odd:translate-y-20 lg:ltr:odd:translate-y-20"
              />
            ))}
          </motion.div>

          {/* <motion.div className="section-footer" variants={itemVariants}>
            <ShinyButton text="دیدن تمام پروژه هام" variant="secondary" />
          </motion.div> */}
        </div>
      </motion.div>

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
}
