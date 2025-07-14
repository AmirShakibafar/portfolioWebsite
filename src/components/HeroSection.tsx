"use client";
import Clouds from './Clouds';

export default function HeroSection() {
  return (
    <section 
      className="relative w-full h-screen bg-gradient-to-b from-[#59E1FD] from-60% to-white overflow-hidden"
    >
        <Clouds count={25}/>
    </section>
  );
}