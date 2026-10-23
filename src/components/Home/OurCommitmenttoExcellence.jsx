/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const OurCommitmenttoExcellence = () => {
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
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=922,fit=crop/A3Qp4rBpyQSnnOL1/174a9925-mxB4MExPQ6S6glqP.JPG"
            alt="Students learning at Gurudev School"
            className="relative w-1/2 h-[350px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />

          {/* Second Image (slightly overlapped) */}
          <motion.img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=491,fit=crop/A3Qp4rBpyQSnnOL1/174a5136-mnlWqZ6MwZH0L6Bd.JPG"
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
            <span className="block text-blue-800">Our Commitment to Excellence</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
            With modern facilities and a focus on moral development, we inspire students to grow academically, socially, and spiritually in a vibrant atmosphere.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-600">
            At our institution, we offer state-of-the-art facilities that are designed to cultivate an enriching learning environment. Our commitment to moral development plays a central role in shaping well-rounded individuals. We believe that education goes beyond academics; it encompasses social and spiritual growth as well. In our vibrant atmosphere, students are encouraged to engage with diverse perspectives, fostering a sense of community and belonging. We prioritize holistic development, ensuring that our students not only excel in their studies but also develop strong values that guide them throughout life. With dedicated educators and innovative programs, we inspire each student to reach their full potential and become responsible, compassionate members of society.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCommitmenttoExcellence;
