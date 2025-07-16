"use client";

import React from "react";
import ShinyButton from "./ShinyButton";
import Image from "next/image";
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

const techIconMap = {
  HTML5: <FaHtml5 title="HTML5" className="text-orange-600" />,
  CSS3: <FaCss3Alt title="CSS3" className="text-blue-600" />,
  JavaScript: <FaJs title="JavaScript" className="text-yellow-400" />,
  React: <FaReact title="React" className="text-sky-400" />,
  TailwindCSS: <SiTailwindcss title="Tailwind CSS" className="text-cyan-400" />,
  Bootstrap: <FaBootstrap title="Bootstrap" className="text-purple-700" />,
  Redux: <SiRedux title="Redux" className="text-purple-500" />,
  NextJs: <SiNextdotjs title="Next.js" className="text-black" />,
  Figma: <FaFigma title="Figma" className="text-pink-500" />,
  Axios: <SiAxios title="Axios" className="text-purple-600" />,
  TypeScript: <SiTypescript title="TypeScript" className="text-blue-500" />,
  Sass: <FaSass title="Sass" className="text-pink-400" />,
  Git: <FaGitAlt title="Git" className="text-orange-700" />,
  Npm: <FaNpm title="npm" className="text-red-500" />,
};

type TechName = keyof typeof techIconMap;

type ProjectCardProps = {
  devImageSrc: string;
  projectName: string;
  projectYear: string;
  techStack: TechName[];
  websiteUrl: string;
};

const ProjectCard = ({
  devImageSrc,
  projectName,
  projectYear,
  techStack,
  websiteUrl,
}: ProjectCardProps) => {
  return (
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
                  {techIconMap[tech]}
                </div>
              ))}
            </div>

            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <ShinyButton text="رفتن به وب‌سایت" size="small" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
