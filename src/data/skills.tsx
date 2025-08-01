import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaFigma,
  FaSass,
  FaGitAlt,
  FaNpm,
  FaJira,
  FaTrello,
  FaGithub,
  FaPencilAlt,
  FaSearch,
  FaSitemap,
  FaRoute,
  FaVial,
  FaMapMarkerAlt,
  FaUserFriends,
  FaPalette,
  FaMousePointer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiAxios,
  SiStrapi,
  SiNotion,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbComponents } from "react-icons/tb";

export const frontendSkills = [
  { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React JS", icon: <FaReact className="text-sky-400" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-black" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  {
    name: "Zustand",
    icon: (
      <span role="img" aria-label="bear emoji" className="text-lg">
        🐻
      </span>
    ),
  },
  { name: "Axios", icon: <SiAxios className="text-purple-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700" /> },
  { name: "Strapi", icon: <SiStrapi className="text-blue-800" /> },
  {
    name: "React Leaflet",
    icon: <FaMapMarkerAlt className="text-green-600" />,
  },
  { name: "Shadcn UI", icon: <TbComponents className="text-black" /> },
];

export const uiuxSkills = [
  { name: "Usability Test", icon: <FaVial className="text-pink-500" /> },
  { name: "User Flow", icon: <FaRoute className="text-pink-500" /> },
  { name: "UX Research", icon: <FaSearch className="text-pink-500" /> },
  { name: "Prototyping", icon: <FaMousePointer className="text-pink-500" /> },
  { name: "Personas", icon: <FaUserFriends className="text-pink-500" /> },
  { name: "Design Systems", icon: <FaPalette className="text-pink-500" /> },
  { name: "Wireframe", icon: <FaPencilAlt className="text-pink-500" /> },
  { name: "Info. Architecture", icon: <FaSitemap className="text-pink-500" /> },
];

export const tools = [
  { name: "Figma", icon: <FaFigma className="text-pink-600" /> },
  { name: "Jira", icon: <FaJira className="text-blue-500" /> },
  { name: "Trello", icon: <FaTrello className="text-sky-600" /> },
  { name: "Github", icon: <FaGithub className="text-black" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Notion", icon: <SiNotion className="text-black" /> },
];

export const techIconMap = {
  HTML5: { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  CSS3: { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  JavaScript: {
    icon: <FaJs className="text-yellow-400" />,
    name: "JavaScript",
  },
  React: { icon: <FaReact className="text-sky-400" />, name: "React" },
  TailwindCSS: {
    icon: <SiTailwindcss className="text-cyan-400" />,
    name: "Tailwind CSS",
  },
  Bootstrap: {
    icon: <FaBootstrap className="text-purple-700" />,
    name: "Bootstrap",
  },
  Redux: { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  NextJs: { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
  Figma: { icon: <FaFigma className="text-pink-500" />, name: "Figma" },
  Axios: { icon: <SiAxios className="text-purple-600" />, name: "Axios" },
  TypeScript: {
    icon: <SiTypescript className="text-blue-500" />,
    name: "TypeScript",
  },
  Sass: { icon: <FaSass className="text-pink-400" />, name: "Sass" },
  Git: { icon: <FaGitAlt className="text-orange-700" />, name: "Git" },
  Npm: { icon: <FaNpm className="text-red-500" />, name: "npm" },
};

export type TechName = keyof typeof techIconMap;
