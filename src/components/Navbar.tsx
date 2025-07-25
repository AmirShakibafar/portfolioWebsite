"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "صفحه اصلی", href: "/" },
  { name: "درباره من", href: "/about" },
  { name: "رزومه", href: "/resume" },
  { name: "تماس", href: "/contact" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

const linkVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="nav-header">
      <nav className="nav-container">
        <motion.ul
          className="nav-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.li key={link.name} variants={linkVariants}>
                <motion.div
                  whileHover={{
                    x: [0, -2, 2, -2, 0],
                    transition: { duration: 0.6 },
                  }}
                >
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
    </header>
  );
}
