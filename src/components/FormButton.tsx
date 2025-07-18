// components/FormButton.tsx
"use client";
import React from "react";

type FormButtonProps = {
  text: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FormButton({
  text,
  className = "",
  ...props
}: FormButtonProps) {
  return (
    <button
      {...props}
      className={`group relative flex h-14 items-center justify-center overflow-hidden rounded-[32px] text-xl font-medium transition-all duration-300 hover:shadow-[0_0_25px_#005BB9] ${className}`}
    >
      <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-r from-[#003772] to-[#E50000]" />
      <div className="absolute inset-[2px] rounded-[30px] bg-gradient-to-r from-[#003772] to-[#0068D8]" />
      <span className="relative font-bold text-white">{text}</span>
    </button>
  );
}
