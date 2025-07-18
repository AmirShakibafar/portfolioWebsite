import Image from "next/image";
import { motion } from "framer-motion";
import { GitHub, Linkedin, Phone, Mail } from "react-feather";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/your-username", icon: <GitHub size={24} /> },
  { name: "LinkedIn", href: "https://linkedin.com/in/your-profile", icon: <Linkedin size={24} /> },
  { name: "Phone", href: "tel:+1234567890", icon: <Phone size={24} /> },
  { name: "Email", href: "mailto:your.email@example.com", icon: <Mail size={24} /> },
];

const AuthorInfo = () => (
  <motion.div className="w-full max-w-[480px] text-right">
    <div className="flex items-center justify-between mb-4">
      <span className="flex items-center gap-2 bg-teal-100 text-teal-800 text-sm font-medium px-3 py-2 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        آماده همکاری
      </span>
      <div className="flex items-center gap-3">
        <span className="font-bold text-lg text-[#003772]">امیر شکیبافر</span>
        <Image
          src="/images/author-placeholder.jpg"
          alt="Amir Shakibafar"
          width={40}
          height={40}
          className="rounded-full object-cover w-14 h-14 border-2 border-white/50"
        />
      </div>
    </div>
    <p className="text-slate-700 leading-loose">
      اگه ذهن خلاقی داری یا حتی فقط یه جرقه‌ی کوچیک از یه ایده به ذهنت رسیده، خوشحال می‌شم ازش بشنوم.
      بیا با هم بشینیم و یه گفت‌و‌گوی حسابی راه بندازیم! می‌تونی همین‌جا پیام بدی یا از طریق پلتفرم‌های زیر باهام در تماس باشی.
      حتی اگه فقط می‌خوای یه سلام بدی، باز هم خوشحال می‌شم!
    </p>
    <motion.div className="mt-6 flex justify-end gap-6 text-gray-500">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="hover:text-[#005BB9] transition-colors"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  </motion.div>
);

export default AuthorInfo;
