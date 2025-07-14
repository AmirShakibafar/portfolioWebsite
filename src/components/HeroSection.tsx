"use client";
import Clouds from './Clouds';
import {motion} from "framer-motion"
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
      className="relative w-full h-screen bg-gradient-to-b from-[#59E1FD] from-60% to-white overflow-hidden"
    >
        <Clouds count={35}/>
        <motion.div
        className="relative z-10 mx-auto mt-24 w-fit"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
      >
        <Image src="/hero_image.png" alt="Superhero Amir" width={520} height={770} />
      </motion.div>
    </section>
  );
}