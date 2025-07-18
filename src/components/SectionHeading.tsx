import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SectionHeading = () => (
  <motion.h2
    variants={itemVariants}
    className="text-4xl md:text-5xl font-extrabold text-center leading-tight"
  >
    <span className="text-[#003772]">خوشحال میشم که روی ایده‌های </span>
    <span className="text-red-600">جذابتون </span>
    <span className="text-[#003772]">باهم کار کنیم</span>
  </motion.h2>
);

export default SectionHeading;
