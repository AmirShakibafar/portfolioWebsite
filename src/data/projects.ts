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
    devImageSrc: "/images/projects/cms/2.png",
    images: [
      "/images/projects/cms/1.png",
      "/images/projects/cms/2.png",
      "/images/projects/cms/3.png",
      "/images/projects/cms/4.png",
    ],
    projectName: "سیستم مدیریت محتوا (CMS)",
    projectYear: "2024",
    techStack: ["React", "Axios", "JavaScript", "CSS3", "Git", "Figma"],
    websiteUrl: "#", // Not yet available
    description:
      "توسعه یک سیستم مدیریت محتوا با قابلیت‌های پیشرفته برای ایجاد، ویرایش و مدیریت محتوای وب‌سایت‌ها با رابط کاربری ساده و کاربرپسند.",
  },
  {
    devImageSrc: "/images/projects/gitart/1.png",
    images: [
      "/images/projects/gitart/1.png",
      "/images/projects/gitart/2.png",
      "/images/projects/gitart/3.png",
    ],
    projectName: "پروژه گیت‌آرت (GitArt)",
    projectYear: "2025",
    techStack: ["React", "JavaScript", "Git", "TailwindCSS"],
    websiteUrl: "https://github-art-generator.vercel.app/",
    description:
      "پلتفرم برای ساخت پیکسل آرت در صفحه کانتریبوشن گیت‌هاب با استفاده از داده‌های کاربران و نمایش آن به صورت تعاملی.",
  },
  {
    devImageSrc: "/images/projects/os/1.png",
    images: [
      "/images/projects/os/1.png",
      "/images/projects/os/2.png",
      "/images/projects/os/3.png",
    ],
    projectName: "ویژوال‌سازی الگوریتم‌های سیستم‌عامل",
    projectYear: "2023",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    websiteUrl: "https://amirshakibafar.github.io/OS-Visualizer/",
    description:
      "یک پروژه آموزشی برای شبیه‌سازی و نمایش بصری الگوریتم‌های مختلف سیستم‌عامل مانند زمان‌بندی CPU، مدیریت حافظه و مدیریت فایل‌ها.",
  },
  {
    devImageSrc: "/images/projects/wiseman/1.png",
    images: [
      "/images/projects/wiseman/1.png",
      "/images/projects/wiseman/2.png",
    ],
    projectName: "اکستنشن وی اس کد (Wise Elder)",
    projectYear: "2023",
    techStack: ["JavaScript", "CSS3", "Git"],
    websiteUrl:
      "https://marketplace.visualstudio.com/items?itemName=Morids.morids",
    description:
      "توسعه یک اکستنشن برای ویرایشگر کد وی اس کد که قابلیت‌های جدیدی را برای بهبود تجربه برنامه‌نویسی فراهم می‌کند.",
  },
];
