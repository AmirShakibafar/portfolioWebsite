// components/FormButton.tsx
"use client";
import React, { useState } from "react";

type FormButtonProps = {
  text: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FormButton({
  text,
  className = "",
  ...props
}: FormButtonProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Get mouse position relative to the button element
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <button
      {...props}
      className={`form-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="form-btn-border" />
      <div className="form-btn-bg" />
      
      {/* This is the shine element that follows the mouse */}
      <div
        className="form-btn-shine"
        style={{
          left: coords.x,
          top: coords.y,
          opacity: isHovering ? 1 : 0,
        }}
      />
      
      <span className="form-btn-text">{text}</span>
    </button>
  );
}