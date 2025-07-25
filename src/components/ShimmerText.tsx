import React from "react";

interface ShimmerTextProps {
  children: React.ReactNode;
  size?: string | number;
  color?: string;
  shimmerColor?: string;
}

export const ShimmerText = ({
  children,
  size = "24px",
  color = "#334155",
  shimmerColor = "#e2e8f0",
}: ShimmerTextProps) => {
  const dynamicStyles = {
    fontSize: typeof size === "number" ? `${size}px` : size,
    backgroundImage: `linear-gradient(110deg, ${color}, 45%, ${shimmerColor}, 55%, ${color})`,
  };

  return (
    <p
      style={dynamicStyles}
      className="leading-relaxed font-iran mb-8 animate-shimmer bg-clip-text text-right text-transparent bg-[length:200%_100%]"
    >
      {children}
    </p>
  );
};
