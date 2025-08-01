import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SectionHeading = () => (
  <motion.h1
    variants={itemVariants}
    className="text-[clamp(2rem,1.5rem+2.1vw,3.5rem)] font-iran font-extrabold text-center leading-tight"
  >
    <span className="text-[#003772]">خوشحال میشم که روی ایده‌های </span>
    <span className="text-red-600">جذابتون </span>
    <span className="text-[#003772]">باهم کار کنیم</span>
  </motion.h1>
);

export default SectionHeading;
