/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const AboutOurSchool = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-white mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* ===== Left Section (Two Images + Floating Badge) ===== */}
        <motion.div
          className="flex-1 relative w-full lg:w-1/2 flex gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* First Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyfHxzcGVjaWFsdHklMjBzY2hvb2x8ZW58MHx8fHwxNzQ0NzIwNjgzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=480"
            alt="Students learning at Gurudev School"
            className="relative w-1/2 h-[350px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />

          {/* Second Image (slightly overlapped) */}
          <motion.img
            src="https://images.unsplash.com/photo-1512253022256-19f4cb92a4dc?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxzcGVjaWFsdHklMjBzY2hvb2x8ZW58MHx8fHwxNzQ0NzIwNjgzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=263&h=344"
            alt="Interactive learning"
            className="relative w-1/2 h-[250px] sm:h-[400px] lg:h-[380px] object-cover rounded-2xl shadow-2xl -ml-12"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* ===== Right Section (Text Content) ===== */}
        <motion.div
          className="flex-1 sm:text-center lg:text-left"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            <span className="block text-blue-800">About Our School    </span>
          </h1>

      

          <p className="mt-4 text-base sm:text-lg text-gray-600">
           Discover our unique programs and dedicated staff, as we strive to provide an exceptional educational experience tailored to meet the needs of every student.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutOurSchool;
