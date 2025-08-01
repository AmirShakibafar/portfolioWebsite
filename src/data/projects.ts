import { TechName } from "./skills";

export type Project = {
  devImageSrc: string;
  images: string[];
  projectName: string;
  projectYear: string;
  techStack: TechName[];
  websiteUrl: string;
  description: string;
};
export const myProjects: Project[] = [
  {
    devImageSrc: "/images/project.avif",
    images: [
      "/images/project.avif",
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
    devImageSrc: "/images/project.avif",
    images: [
      "/images/project.avif",
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
    devImageSrc: "/images/project.avif",
    images: [
      "/images/project.avif",
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
    devImageSrc: "/images/project.avif",
    images: [
      "/images/project.avif",
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
