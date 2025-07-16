import React from "react";
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
  return (
    <div className="section-container">
      <div className="section-wrapper">
        <h2 className="section-heading">
          <span className="heading-brace">{"{"}</span>
          <span>نمونه کارهای من</span>
          <span className="heading-brace">{"}"}</span>
        </h2>

        <div className="projects-grid">
          {myProjects.map((project, index) => (
            <div
              key={project.projectName}
              className={`project-item ${
                index % 2 === 0 ? "translate-y-20" : ""
              }`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="section-footer">
          <ShinyButton text="دیدن تمام پروژه هام" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
