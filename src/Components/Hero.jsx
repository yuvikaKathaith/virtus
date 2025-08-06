import React from "react";
import { motion } from "framer-motion";
import smile1 from "../assets/images/hero1.jpg";
import smile2 from "../assets/images/hero2.jpg";
import eventThumb from "../assets/images/event.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-10 sm:py-5 px-4 md:px-5 lg:px-5 lg:py-20 max-w-7xl mx-auto relative z-10"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-[#002c5b] font-semibold text-4xl sm:text-6xl md:text-6xl leading-tight mb-6">
            Envision a <br /> brighter future <br /> for everyone.
          </h1>
          <p className="text-[#002c5b] text-sm sm:text-lg md:text-base mb-8 max-w-2xl mx-auto md:mx-0">
            Donating is a noble and selfless act with no downside—every
            contribution, no matter the size, makes a meaningful impact on the
            lives of those in need.
          </p>

          {/* Event Card */}
          <div className="bg-[#edfca7] rounded-xl shadow-md flex flex-col sm:flex-row items-start gap-4 p-4 max-w-sm mx-auto md:mx-0">
            <motion.div
              className="w-full sm:w-25 h-20 sm:h-25 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={eventThumb}
                alt="event"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>
            <div className="flex-1">
              <p className="text-[#002c5b] font-semibold text-[16px] mb-1">
                Join our Upcoming Event
              </p>
              <p className="text-gray-600 text-[12px] mb-2">
                An enchanting event designed to bring smiles to the faces of
                those in need.
              </p>
              <button className="bg-[#002c5b] text-white text-sm px-4 py-1 rounded-full hover:bg-blue-800 transition-all">
                Register
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Images */}
        <div className="md:w-1/2 relative flex items-center justify-center mt-12 md:mt-0 min-h-[300px] lg:gap-20">
          {/* Top Image */}
          <motion.div
            className="w-[250px] h-[250px] rounded-full overflow-hidden absolute lg:-top-10 -top-10 lg:-left-5 -left-5 z-10 shadow-md"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src={smile1}
              alt="Smiling child"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Bottom Main Image */}
          <motion.div
            className="w-[400px] h-[400px] lg:mt-20 mt-10 sm:mt-40 rounded-full overflow-hidden relative z-20 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={smile2}
              alt="Happy children"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
