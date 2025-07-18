import Image from "next/image";
import React from "react";

const HeaderImages = () => (
  <div className="flex w-full flex-wrap justify-center lg:justify-between items-center">
    <div className="relative">
      <Image
        src="/images/left-crowd-cta.png"
        alt="Crowd of characters on the left"
        width={400}
        height={400}
        className="object-cover"
      />
      <div className="absolute top-5 right-5 bg-white rounded-xl px-5 py-3 text-base font-medium shadow-lg text-[#003772]">
        مطمئنم قراره چیزای جذابی باهم بسازن
      </div>
    </div>

    <div className="relative">
      <Image
        src="/images/cta-image.png"
        alt="Central call to action image"
        width={600}
        height={360}
        className="object-cover"
      />
    </div>

    <div className="relative">
      <Image
        src="/images/right-crowd-cta.png"
        alt="Crowd of characters on the right"
        width={400}
        height={400}
        className="object-cover"
      />
      <div className="absolute top-5 left-5 bg-white rounded-xl px-5 py-3 text-base font-medium shadow-lg text-[#003772]">
        خدای من چه تیم خفنی شدن!!
      </div>
    </div>
  </div>
);

export default HeaderImages;
