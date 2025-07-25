// components/HeaderImages.tsx
import Image from "next/image";
import React from "react";

const HeaderImages = () => (
  <div className="header-images-container">
    <div className="header-image-wrapper">
      <Image
        src="/images/left-crowd-cta.png"
        alt="Crowd of characters on the left"
        width={400}
        height={400}
        className="header-image"
      />
      <div className="header-image-bubble top-5 right-5">
        مطمئنم قراره چیزای جذابی باهم بسازن
      </div>
    </div>

    <div className="header-image-wrapper">
      <Image
        src="/images/cta-image.png"
        alt="Central call to action image"
        width={600}
        height={360}
        className="header-image"
      />
    </div>

    <div className="header-image-wrapper">
      <Image
        src="/images/right-crowd-cta.png"
        alt="Crowd of characters on the right"
        width={400}
        height={400}
        className="header-image"
      />
      <div className="header-image-bubble top-5 left-5">
        خدای من چه تیم خفنی شدن!!
      </div>
    </div>
  </div>
);

export default HeaderImages;
