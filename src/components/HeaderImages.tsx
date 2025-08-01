// components/HeaderImages.tsx
import Image from "next/image";
import React from "react";

const HeaderImages = () => (
  <div className="header-images-container">
    <div className="header-image-wrapper header-image-side">
      <Image
        src="/images/right-crowd-cta.png"
        alt="Crowd of characters on the right"
        fill
        sizes="(max-width: 768px) 25vw, 400px"
        className="object-contain"
      />
      <div className="header-image-bubble top-5 end-5">
        خدای من چه تیم خفنی شدن!!
      </div>
    </div>
    <div className="header-image-wrapper header-image-center">
      <Image
        src="/images/cta-image.png"
        alt="Central call to action image"
        fill
        sizes="(max-width: 768px) 40vw, 600px"
        className="object-contain"
      />
    </div>
    <div className="header-image-wrapper header-image-side">
      <Image
        src="/images/left-crowd-cta.png"
        alt="Crowd of characters on the left"
        fill
        sizes="(max-width: 768px) 25vw, 400px"
        className="object-contain"
      />
      <div className="header-image-bubble top-5 start-5">
        مطمئنم قراره چیزای جذابی باهم بسازن
      </div>
    </div>
  </div>
);

export default HeaderImages;
