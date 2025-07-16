"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "تماس", href: "/contact" },
  { name: "رزومه", href: "/resume" },
  { name: "درباره من", href: "/about" },
  { name: "صفحه اصلی", href: "/" },
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
    <header className="absolute top-0 z-50 w-full p-4">
      <nav className="flex justify-end px-[200px] py-5">
        <motion.ul
          className="flex items-center gap-8 font-iran"
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
                    className={`font-iran font-bold transition-colors text-[22px] ${
                      isActive
                        ? "text-[#E50000]"
                        : "text-[#003772] hover:text-[#E50000]"
                    }`}
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
