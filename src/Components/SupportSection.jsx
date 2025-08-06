import React from "react";
import img1 from "../assets/images/donation2.jpg";
import img2 from "../assets/images/support2.jpg";
import img3 from "../assets/images/support3.jpg";

export default function SupportSection() {
  return (
    <section className="relative lg:py-50 sm:py-25 px-4 sm:px-6 md:px-16 mb-30 overflow-hidden">
      {/* TEXT */}
      <div className="max-w-4xl z-10 relative">
        <h2 className="text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[10rem] font-bold text-[#002c5b] leading-none">
          WE
        </h2>
        <h2 className="text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[10rem] font-bold text-[#002c5b] leading-none">
          NEED
        </h2>
        <h2 className="text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[10rem] font-medium text-[#6d742f] leading-none">
          YOUR
        </h2>
        <h2 className="text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[10rem] font-medium text-[#6d742f] leading-none">
          SUPPORT
        </h2>
      </div>

      <div className="absolute lg:top-40 top-40 lg:right-10 right-10 w-28 h-28 sm:w-34 sm:h-34 md:w-62 md:h-62 rounded-full overflow-hidden shadow-lg">
        <img
          src={img1}
          alt="support top"
          loading="lazy"
          className="object-cover w-full h-full grayscale"
        />
      </div>

      <div className="absolute lg:top-1/2 top-1/2 lg:right-100 right-10 sm:right-32 w-40 h-40 lg:w-86 lg:h-86 sm:w-50 sm:h-50 md:w-76 md:h-76 rounded-full overflow-hidden shadow-lg -translate-y-1/2">
        <img
          src={img2}
          alt="support center"
          loading="lazy"
          className="object-cover w-full h-full grayscale"
        />
      </div>

      <div className="absolute z-20 lg:left-20 sm:left-10 lg:bottom-5 sm:bottom-0 w-32 h-32 sm:w-34 sm:h-34 md:w-55 md:h-55 rounded-full overflow-hidden shadow-lg">
        <img
          src={img3}
          alt="support bottom"
          loading="lazy"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </section>
  );
}