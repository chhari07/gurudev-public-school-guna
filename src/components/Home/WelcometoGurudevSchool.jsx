import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const WelcometoGurudevSchool = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-white mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <title>Home </title>
      <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* ===== Left Section (Text Content) ===== */}
        <motion.div
          className="flex-1 sm:text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            <span className="block text-blue-800">
              Welcome to Gurudev School
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
            At Gurudev School, we nurture excellence and values in a supportive
            environment, preparing students for success academically and
            morally.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We are committed to providing quality education that goes beyond
            academics. Our focus on moral values ensures that students not only
            excel in their studies but also develop strong character. By
            fostering cultural awareness and compassion, we shape students into
            well-rounded global citizens with Indian roots.
          </p>

          <div className="mt-8 flex sm:justify-center lg:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-800 text-blue-800 font-semibold rounded-md hover:bg-blue-800 hover:text-white transition-all duration-300 shadow-sm"
            >
              Explore
            </motion.a>
          </div>
        </motion.div>

        {/* ===== Right Section (Image + Floating Badge) ===== */}
        <motion.div
          className="flex-1 relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[560px]">
            {/* Soft Background Glow */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-60"
              aria-hidden="true"
            ></div>

            {/* Main Image */}
            <motion.img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=583,fit=crop,trim=0;223.9655172413793;0;45/A3Qp4rBpyQSnnOL1/539107530-mP4O2wZ5yxU3Jy0p.jpg"
              alt="Students learning at Gurudev School"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              loading="eager"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />

            {/* Overlay */}
           

            {/* Floating Info Card */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
            
            
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcometoGurudevSchool;
