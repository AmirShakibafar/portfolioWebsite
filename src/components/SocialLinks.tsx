'use client';
import { useRef } from 'react';
import { GitHub, Linkedin, Phone, Mail } from 'react-feather';
import { motion } from 'framer-motion';
import { useInvertedColor } from '../hooks/useInvertedColor';

const socialLinks = [
  { name: 'GitHub', icon: GitHub, href: 'https://github.com/your-username' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/your-profile' },
  { name: 'Phone', icon: Phone, href: 'tel:+1234567890' },
  { name: 'Email', icon: Mail, href: 'mailto:your.email@example.com' },
];

export default function SocialLinks() {
  const socialLinksRef = useRef(null);
  
  const shouldInvert = useInvertedColor(socialLinksRef);

  return (
    
    <aside ref={socialLinksRef} className="fixed bottom-0 left-8 z-50">
      <div className="flex flex-col items-center gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={`transition-colors ${shouldInvert ? 'text-white' : 'text-[#003772] hover:text-[#005BB9]'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: 'easeOut' }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <link.icon size={24} />
          </motion.a>
        ))}
        
        <motion.div
        
          className={`mt-2 h-24 w-px transition-colors ${shouldInvert ? 'bg-white/50' : 'bg-[#003772]/50'}`}
          initial={{ height: 0 }}
          animate={{ height: '6rem' }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>
    </aside>
  );
}