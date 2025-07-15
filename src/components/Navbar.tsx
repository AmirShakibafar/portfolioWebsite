"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Add href for each link for navigation
const navLinks = [
  { name: "تماس", href: "/contact" },
  { name: "رزومه", href: "/resume" },
  { name: "درباره من", href: "/about" },
  { name: "صفحه اصلی", href: "/" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 z-50 w-full p-4">
      <nav className="flex justify-end px-[200px] py-5">
        <ul className="flex items-center gap-8 font-iran">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
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
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
