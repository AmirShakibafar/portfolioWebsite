"use client";

import { motion, Variants } from "framer-motion";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import React, { FC } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const ContactForm: FC = () => (
  <motion.form
    className="w-full max-w-[400px] space-y-5 text-right"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.div variants={itemVariants}>
      <FormInput type="text" placeholder="نام کامل" />
    </motion.div>

    <motion.div variants={itemVariants}>
      <FormInput type="email" placeholder="ایمیل" />
    </motion.div>

    <motion.div variants={itemVariants}>
      <FormInput as="textarea" placeholder="پیام" rows={4} />
    </motion.div>

    <motion.div variants={itemVariants} className="pt-2">
      <FormButton text="ارسال پیام" type="submit" className="w-full" />
    </motion.div>
  </motion.form>
);

export default ContactForm;
