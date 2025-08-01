// components/ProjectModal.js
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaJs,
  FaFigma,
  FaSass,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiAxios,
} from "react-icons/si";
import ShinyButton from "./ShinyButton";

const techIconMap = {
  HTML5: { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-600" },
  CSS3: { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-600" },
  JavaScript: { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
  React: { icon: <FaReact />, name: "React", color: "text-sky-400" },
  TailwindCSS: {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    color: "text-cyan-400",
  },
  Bootstrap: {
    icon: <FaBootstrap />,
    name: "Bootstrap",
    color: "text-purple-700",
  },
  Redux: { icon: <SiRedux />, name: "Redux", color: "text-purple-500" },
  NextJs: { icon: <SiNextdotjs />, name: "Next.js", color: "text-slate-900" },
  Figma: { icon: <FaFigma />, name: "Figma", color: "text-pink-500" },
  Axios: { icon: <SiAxios />, name: "Axios", color: "text-purple-600" },
  TypeScript: {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: "text-blue-500",
  },
  Sass: { icon: <FaSass />, name: "Sass", color: "text-pink-400" },
  Git: { icon: <FaGitAlt />, name: "Git", color: "text-orange-700" },
  Npm: { icon: <FaNpm />, name: "npm", color: "text-red-500" },
};

const Carousel = ({ images, projectName }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
      <motion.div
        className="flex h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`${projectName} image ${i + 1}`}
            width={1600}
            height={900}
            className="w-full h-full object-cover flex-shrink-0 bg-slate-100"
            priority={i === 0}
          />
        ))}
      </motion.div>
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl"
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-1 rounded-3xl bg-gradient-to-br from-[#E40000] to-[#003772] shadow-lg">
          <div className="bg-white rounded-[22px] max-h-[85vh] overflow-y-auto p-6 font-iran">
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 text-gray-400 hover:text-black hover:bg-gray-200 rounded-full p-1.5 transition-colors z-20"
            >
              <X size={22} />
            </button>

            <Carousel
              images={project.images}
              projectName={project.projectName}
            />

            <h2 className="text-2xl font-bold mt-4 mb-1 text-slate-800">
              {project.projectName}
            </h2>
            <p className="text-sm text-slate-500 mb-4">{project.projectYear}</p>

            <p className="text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>

            <hr className="my-5 border-slate-200" />

            <div>
              <h3 className="text-base font-bold text-slate-700 mb-3">
                تکنولوژی‌های استفاده شده
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((techKey) => {
                  const tech = techIconMap[techKey];
                  return (
                    <div
                      key={techKey}
                      className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1"
                    >
                      <span className={`${tech.color} text-lg`}>
                        {React.cloneElement(tech.icon)}
                      </span>
                      <span className="text-xs font-medium text-slate-700">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 text-right">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShinyButton text="رفتن به وب‌سایت">
                  <ArrowUpRight className="ml-2" size={16} />
                </ShinyButton>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
