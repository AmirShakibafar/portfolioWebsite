'use client';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { generateClouds } from '../utils/cloudGenerator';

const Clouds = ({ count = 25 }: { count?: number }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const clouds = useMemo(() => {
    if (!hasMounted) return [];
    return generateClouds(count);
  }, [count, hasMounted]);

  if (!hasMounted) {
    return null;
  }

  return (
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden origin-top-left transition-transform duration-300 ease-in-out scale-100 md:scale-[1.75]"
    >
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute pointer-events-none"
          style={{
            top: cloud.top,
            left: cloud.initialOffset,
            width: `${cloud.width}px`,
            zIndex: cloud.zIndex,
            opacity: cloud.opacity,
          }}
          animate={{
            x: cloud.travelDistance,
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: cloud.delay,
          }}
        >
          <Image
            src={cloud.src}
            alt="A decorative cloud"
            width={cloud.width}
            height={cloud.height}
            unoptimized
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Clouds;