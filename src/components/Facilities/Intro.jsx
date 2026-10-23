import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div>
       <section
            aria-labelledby="hero-heading"
            className="relative bg-white mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
          >
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
                  <span className="block text-center   text-blue-800">
                   Facilities
                  </span>
                </h1>
      
                <p className="mt-4  text-center  text-base sm:text-lg md:text-xl text-gray-600">
                  At our institution, we invite you to explore our state-of-the-art infrastructure, designed to foster innovation and creativity. Our vibrant learning environments are equipped with the latest technology and resources, enabling students to engage deeply with their studies. Collaborative spaces encourage teamwork and discovery, while quiet study areas provide the perfect atmosphere for individual reflection. From interactive classrooms to advanced laboratories, every corner of our campus has been thoughtfully designed to enhance the educational experience. Join us on a journey through our modern facilities, where learning comes to life and opportunities abound. Whether you’re engaging in hands-on projects or participating in stimulating discussions, our environment is tailored to inspire and support your academic ambitions.
                </p>
      
               
      
               
               
              </motion.div>
            </div>
          </section>
    </div>
  )
}

export default Intro
