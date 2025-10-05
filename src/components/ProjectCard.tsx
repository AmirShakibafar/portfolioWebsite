"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useAnimationControls,
  Variants,
} from "framer-motion";
import ShinyButton from "./ShinyButton";
import { techIconMap, TechName } from "@/data/skills";
import { ArrowUpRight } from "react-feather";

type ProjectCardProps = {
  devImageSrc: string;
  projectName: string;
  projectYear: string;
  techStack: TechName[];
  websiteUrl: string;
  index: number;
  className?: string;
  onClick: () => void;
};

const ProjectCard = ({
  devImageSrc,
  projectName,
  projectYear,
  techStack,
  websiteUrl,
  className,
  onClick,
}: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const hasValidUrl = websiteUrl && websiteUrl !== "#" && websiteUrl.trim() !== "";

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`${className} cursor-pointer`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.25 }}
      onClick={onClick}
    >
      <div className="card-wrapper">
        <div className="card-inner">
          <div className="card-image-container">
            <Image
              src={devImageSrc}
              alt={projectName}
              width={1200}
              height={800}
              className="card-image"
            />
          </div>

          <div className="card-body">
            <div className="card-header">
              <p className="card-year">{projectYear}</p>
              <p className="card-title">{projectName}</p>
            </div>

            <div className="card-footer">
              <div className="card-tech-stack">
                {techStack.map((tech) => (
                  <div key={tech} className="card-tech-icon">
                    {techIconMap[tech]?.icon}
                  </div>
                ))}
              </div>

              {hasValidUrl ? (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ShinyButton text="رفتن به وب‌سایت">
                    <ArrowUpRight className="ms-2" size={16} />
                  </ShinyButton>
                </a>
              ) : (
                <ShinyButton text="وب‌سایت در دسترس نیست" disabled />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
