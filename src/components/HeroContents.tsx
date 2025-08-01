import Link from "next/link";
import AnimatedWords from "./AnimatedWords";
import AnimatedNumber from "./AnimatedNumber";
import ShinyButton from "./ShinyButton";
import HeroImage from "./HeroImage";
import HeroHeadingClient from "./HeroHeadingClient";

export default function HeroContent() {
  return (
    <>
      <div className="hero-blur-effect" />
      <div className="relative z-10">
        <div className="hero-layout-container">
          <div className="hero-text-wrapper">
            <h1 className="hero-heading">
              <HeroHeadingClient />
            </h1>

            <AnimatedWords
              text="کارم طراحی و توسعه محصولات دیجیتال جذاب و کاربرپسنده"
              className="hero-subheading"
            />

            <p className="hero-paragraph">
              <span className="hero-highlight">
                +<AnimatedNumber value={1.5} decimals={1} />
              </span>{" "}
              سال سابقه |{" "}
              <span className="hero-highlight">
                <AnimatedNumber value={4} />
              </span>{" "}
              پروژه واقعی |{" "}
              <span className="hero-highlight">
                +<AnimatedNumber value={36} />
              </span>{" "}
              استار گیت‌هاب
            </p>

            <div className="hero-buttons-container">
              <Link href="#projects">
                <ShinyButton text="دیدن نمونه کارهام →" variant="secondary" />
              </Link>
              <Link href="#contact">
                <ShinyButton text="تماس با من →" />
              </Link>
            </div>
          </div>

          <HeroImage />
        </div>
      </div>
    </>
  );
}
