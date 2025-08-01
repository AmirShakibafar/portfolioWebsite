"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";


const navLinks = [
  { name: "صفحه اصلی", href: "/" },
  { name: "درباره من", href: "/about" },
  { name: "رزومه", href: "/about/#resume" },
  { name: "تماس", href: "/#contact" },
];

const desktopContainerVariants: Variants = {
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

const desktopLinkVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const mobileMenuVariants: Variants = {
  open: { x: 0, transition: { type: "spring", stiffness: 200, damping: 30 } },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 450,
      damping: 35,
      when: "afterChildren",
    },
  },
};

const mobileLinkVariants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 50 },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen && !isDesktop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isDesktop]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`nav-header ${
        hasScrolled && !isOpen ? "nav-header-scrolled" : ""
      }`}
    >
      <nav className="nav-container">
        {/* Desktop Navigation */}
        <motion.ul
          className="nav-list"
          variants={desktopContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.li key={link.name} variants={desktopLinkVariants}>
                <Link
                  href={link.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {link.name}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Mobile Navigation */}
        {!isDesktop && (
          <>
            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="mobile-menu-panel"
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <motion.ul
                    className="mobile-nav-list"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                  >
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.li
                          key={link.name}
                          variants={mobileLinkVariants}
                        >
                          <Link
                            href={link.href}
                            className={`nav-link ${
                              isActive ? "nav-link-active" : ""
                            }`}
                            onClick={closeMenu}
                          >
                            {link.name}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                  
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </nav>
    </header>
  );
}

const HamburgerButton = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => (
  <motion.button
    className="hamburger-button"
    onClick={() => setIsOpen(!isOpen)}
    animate={isOpen ? "open" : "closed"}
    initial={false}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="#003772"
      strokeWidth="3"
    >
      <motion.line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
      />
      <motion.line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        transition={{ duration: 0.1 }}
      />
      <motion.line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -5 } }}
      />
    </svg>
  </motion.button>
);
