"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import HeaderImages from "./HeaderImages";
import SectionHeading from "./SectionHeading";
import AuthorInfo from "./AuthorInfo";
import ContactForm from "./ContactForm";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};

const CtaSection = () => {
  return (
    <div className="section-container overflow-x-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <HeaderImages />
        <div className="section-wrapper px-4">
          <div className="text-center py-16">
            <SectionHeading />

            <div className="contact-section-layout">
              <AuthorInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CtaSection;
