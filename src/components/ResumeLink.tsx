"use client";

import { motion } from "framer-motion";
import React from "react";
import { User } from "react-feather";

type ResumeLinkProps = {
  href: string;
  download: string;
  text: string;
  variant?: "primary" | "secondary";
};

export default function ResumeLink({
  href,
  download,
  text,
  variant = "primary",
}: ResumeLinkProps) {
  const backgroundClass =
    variant === "primary"
      ? "bg-gradient-to-br from-[#003672] to-[#005BB9]"
      : "bg-white";
  const textClass = variant === "primary" ? "text-white" : "text-slate-700";
  const iconClass = variant === "primary" ? "text-white/70" : "text-slate-400";
  const linesClass = variant === "primary" ? "bg-white/20" : "bg-slate-200";
  const dogEarClass =
    variant === "primary"
      ? "border-t-[#005BB9] border-s-transparent"
      : "border-t-slate-200 border-s-transparent";

  return (
    <motion.a
      href={href}
      download={download}
      whileHover={{ scale: 1.05, rotate: -3, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`group relative flex flex-col w-40 h-48 rounded-lg shadow-lg overflow-hidden p-4 ${backgroundClass}`}
    >
      <div
        className={`absolute top-0 end-0 w-0 h-0 border-solid border-t-12 border-s-12 ${dogEarClass}`}
      />

      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${linesClass}`}
        >
          <User className={iconClass} size={20} />
        </div>
        <div className="flex-grow space-y-1.5">
          <div className={`w-full h-2 rounded-full ${linesClass}`}></div>
          <div className={`w-3/4 h-2 rounded-full ${linesClass}`}></div>
        </div>
      </div>
      <div className="flex-grow space-y-1.5 mt-4">
        <div className={`w-full h-1.5 rounded-full ${linesClass}`}></div>
        <div className={`w-full h-1.5 rounded-full ${linesClass}`}></div>
        <div className={`w-5/6 h-1.5 rounded-full ${linesClass}`}></div>
      </div>

      <span
        className={`text-center text-sm font-semibold mt-auto ${textClass}`}
      >
        {text}
      </span>
    </motion.a>
  );
};