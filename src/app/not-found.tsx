// app/not-found.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ShinyButton from "@/components/ShinyButton"; // Assuming this is the correct path
import Clouds from "@/components/Clouds";

export default function NotFound() {
  return (
    <div
      className="relative min-h-screen w-full font-iran overflow-hidden"
      style={{ backgroundColor: "#59E1FD" }}
    >
      {/* Clouds are in the background */}
      <Clouds />

      {/* Main content is positioned relatively and given a higher z-index to ensure it's on top */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/images/404img.png"
            alt="Illustration for 404 Page Not Found"
            width={500}
            height={500}
            className="object-contain w-auto h-auto max-w-xs md:max-w-sm"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-8 text-6xl font-bold text-white drop-shadow-lg"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-2xl font-semibold text-gray-800"
        >
          صفحه‌ای که دنبالش بودی پیدا نشد!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-2 text-gray-600"
        >
          مثل اینکه این صفحه به مرخصی رفته. بهتره به صفحه‌ی اصلی برگردی.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <Link href="/">
            <ShinyButton text="→ بازگشت به خانه" variant="secondary" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
