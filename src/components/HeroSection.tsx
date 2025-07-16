"use client";
import Clouds from "./Clouds";
import HeroContents from "./HeroContents";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-[#59E1FD] from-60% to-[#f7feff00] overflow-hidden">
      <Clouds count={35} />
      <HeroContents />
      <SocialLinks />
    </section>
  );
}