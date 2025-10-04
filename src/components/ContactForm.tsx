"use client";

import { motion, Variants } from "framer-motion";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import React, { FC, useState, FormEvent } from "react";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customToastClassName = () => { 
  return ` 
    relative flex p-3 min-h-10 rounded-xl justify-between items-center  
    overflow-hidden cursor-pointer shadow-lg 
    bg-white 
    text-blue-600 
    font-semibold
  `; 
}; 


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

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // --- SUCCESS TOAST ---
        toast.success('پیام شما با موفقیت ارسال شد! 🚀');
      } else {
        setStatus('error');
        console.error('Failed to send message:', await response.text());
        // --- ERROR TOAST (API/Server Error) ---
        toast.error('خطا در ارسال پیام. لطفا دوباره تلاش کنید. 😥');
      }
    } catch (error) {
      console.error('Network or API route error:', error);
      setStatus('error');
      // --- ERROR TOAST (Network Error) ---
      toast.error('خطای شبکه رخ داد. اتصال خود را بررسی کنید. ⚠️');
    }
  };

  return (
    <>
      <ToastContainer 
         position="top-center" 
         autoClose={5000} 
         hideProgressBar={true}  
         newestOnTop={false} 
         closeOnClick 
         rtl={false} 
         pauseOnFocusLoss 
         draggable 
         pauseOnHover 
         theme="light"  
         toastClassName={customToastClassName} 
       /> 
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-[400px] space-y-5 text-right"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <FormInput
            type="text"
            placeholder="نام کامل"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormInput
            type="email"
            placeholder="ایمیل"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormInput
            as="textarea"
            placeholder="پیام"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div variants={itemVariants} className="pt-2">
          <FormButton
            text={status === 'loading' ? 'در حال ارسال...' : 'ارسال پیام'}
            type="submit"
            className="w-full"
            disabled={status === 'loading'}
          />
        </motion.div>
      </motion.form>
    </>
  );
};

export default ContactForm;