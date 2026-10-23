/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative bg-white mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Section (Image + Heading) */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            id="contact-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 text-center lg:text-left"
          >
            <span className="block text-blue-800">Contact Us</span>
          </h1>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=587,fit=crop/A3Qp4rBpyQSnnOL1/174a9925-mxB4MExPQ6S6glqP.JPG"
            alt="Contact Illustration"
            className="rounded-2xl w-full h-auto shadow-lg"
          />
        </motion.div>

        {/* Right Section (Form) */}
        <motion.div
          className="flex-1 w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[560px]">
            {/* Soft Background Glow */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-60"
              aria-hidden="true"
            ></div>

            {/* Contact Form */}
            <div className="p-8 mt-8 max-w-lg mx-auto relative bg-white rounded-2xl shadow-lg">
              <form action="https://fabform.io/f/xxxxx" method="post">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-lg text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-lg text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-lg text-gray-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="w-full text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded-lg text-xl font-bold shadow-lg transition-all duration-300"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
