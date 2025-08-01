"use client";
import Clouds from "./Clouds";
import HeroContents from "./HeroContents";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function HeroSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const cloudCount = isDesktop ? 35 : isTablet ? 25 : 15;

  return (
    <section className="relative w-full flex items-center justify-center bg-gradient-to-b from-[#59E1FD] from-60% to-[#f7feff00] overflow-hidden py-16">
      <Clouds count={cloudCount} />
      <HeroContents />
    </section>
  );
}
