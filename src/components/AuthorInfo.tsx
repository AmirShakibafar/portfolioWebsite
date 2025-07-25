import Image from "next/image";
import { motion } from "framer-motion";
import { GitHub, Linkedin, Phone, Mail } from "react-feather";
import { ShimmerText } from "./ShimmerText";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/your-username",
    icon: <GitHub size={24} />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    icon: <Linkedin size={24} />,
  },
  { name: "Phone", href: "tel:+1234567890", icon: <Phone size={24} /> },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: <Mail size={24} />,
  },
];

const AuthorInfo = () => (
  <motion.div className="author-info-wrapper">
    <div className="author-info-header">
      <span className="author-status-badge">
        <span className="author-status-indicator">
          <span className="author-status-ping"></span>
          <span className="author-status-dot"></span>
        </span>
        آماده همکاری
      </span>
      <div className="author-id-wrapper">
        <span className="author-name">امیر شکیبافر</span>
        <Image
          src="/images/author-placeholder.jpg"
          alt="Amir Shakibafar"
          width={40}
          height={40}
          className="author-image"
        />
      </div>
    </div>
    <ShimmerText size="20px">
      اگه ذهن خلاقی داری یا حتی فقط یه جرقه‌ی کوچیک از یه ایده تو ذهنت زده،
      خوشحال می‌شم ازش بشنوم. بیا با هم بشینیم و یه گفت‌وگوی حسابی راه بندازیم!
      می‌تونی همین‌جا پیام بدی یا از طریق پلتفرم‌های زیر باهام در تماس باشی. حتی
      اگه فقط می‌خوای یه سلام بدی، باز هم خوشحال می‌شم!
    </ShimmerText>

    <motion.div className="author-socials-wrapper">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="author-social-link"
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
