import { motion } from "framer-motion";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const ContactForm = () => (
  <motion.form className="w-full max-w-[400px] space-y-5 text-right">
    <FormInput type="text" placeholder="نام کامل" />
    <FormInput type="email" placeholder="ایمیل" />
    <FormInput as="textarea" placeholder="پیام" rows={4} />
    <div className="pt-2">
      <FormButton text="ارسال پیام" type="submit" className="w-full" />
    </div>
  </motion.form>
);

export default ContactForm;
