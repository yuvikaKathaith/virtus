import React from "react";
import imgTop from "../assets/images/smile1.jpg";
import imgBottom from "../assets/images/smile2.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-16 sm:py-0 py-20 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      <div className="relative w-full md:w-1/2 flex sm:justify-center justify-center sm:items-center items-center min-h-[300px] sm:min-h-[400px]">
        <div className="w-28 h-28 sm:w-50 sm:h-50 md:w-60 md:h-60 overflow-hidden absolute lg:left-60 sm:left-85 lg:top-0 sm:top-25 rounded-full">
          <img
            src={imgTop}
            alt="img"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="w-40 h-40 sm:w-66 sm:h-66 md:w-80 md:h-80 overflow-hidden absolute lg:left-4 sm:left-35 lg:top-24 sm:top-32 rounded-full">
          <img
            src={imgBottom}
            alt="img"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-[#002c5b]">
        <p className="text-base sm:text-lg font-semibold mb-3">About Company</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
          You’re the Hope for others
        </h2>
        <p className="text-[#002c5b] mb-4 leading-relaxed text-sm sm:text-base">
          This is a dedicated non-profit committed to supporting individuals and families in need.
          We provide essential resources, including food, clothing, shelter, and educational opportunities,
          to empower those facing challenging circumstances.
        </p>
        <p className="text-[#002c5b] mb-6 leading-relaxed text-sm sm:text-base">
          Our mission is to uplift and bring hope to the less fortunate, fostering a compassionate community
          where everyone has the chance to thrive. Through generous donations and volunteer efforts,
          we strive to make a positive impact and create lasting change in the lives of those we serve.
        </p>
        <button className="bg-[#002c5b] hover:bg-[#001a39] text-white py-3 px-6 rounded-full text-sm font-medium transition">
          Discover more
        </button>
      </div>
    </section>
  );
}
