// components/FormInput.tsx
"use client";
import React from "react";

type FormInputProps = {
  as?: "input" | "textarea";
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;


export default function FormInput({
  as: Tag = "input",
  ...props
}: FormInputProps) {
  return (
    <div className="group relative w-full rounded-[32px] font-iran">
      <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-r from-[#003772] to-[#E50000]" />
      <Tag
        {...(props as any)}
        className="relative block w-full resize-none border-0 bg-white px-4 py-3 text-right text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0 rounded-[30px]"
      />
    </div>
  );
}
