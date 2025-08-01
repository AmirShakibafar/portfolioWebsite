"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { techIconMap } from "@/data/skills";
import ShinyButton from "./ShinyButton";
import Carousel from "./Carousel";

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-border">
          <div className="modal-panel">
            <button onClick={onClose} className="modal-close-button">
              <X size={22} />
            </button>

            <Carousel
              images={project.images}
              projectName={project.projectName}
            />

            <div className="modal-header">
              <h2 className="modal-title">{project.projectName}</h2>
              <p className="modal-year">{project.projectYear}</p>
            </div>

            <p className="modal-description">{project.description}</p>
            <hr className="modal-divider" />

            <div>
              <h3 className="modal-subtitle">تکنولوژی‌های استفاده شده</h3>
              <div className="modal-tech-stack">
                {project.techStack.map((techKey) => {
                  const tech = techIconMap[techKey];
                  if (!tech) return null;
                  return (
                    <div key={techKey} className="modal-tech-pill">
                      <span className="text-lg">{tech.icon}</span>
                      <span className="modal-tech-pill-name">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="modal-footer">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShinyButton text="رفتن به وب‌سایت">
                  <ArrowUpRight className="ms-2" size={16} />
                </ShinyButton>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
