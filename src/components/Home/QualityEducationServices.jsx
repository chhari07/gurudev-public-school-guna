/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const QualityEducationServices = () => {
  const features = [
    {
      title: "Advanced Infrastructure",
      description:
        "Well-equipped classrooms and labs providing students with essential tools for exploration and innovation.",
    },
    {
      title: "Modern Learning Environment",
      description:
        "State-of-the-art facilities fostering creativity and academic growth for every student.",
    },
    {
      title: "Holistic Development Programs",
      description:
        "Encouraging social and spiritual growth alongside academic excellence through diverse co-curricular activities.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-5 sm:px-6 lg:px-8">
      {/* Centered Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-800">
          Quality Education Services
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Empowering students through excellence in education and strong moral values for a brighter future.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          className="flex-1 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=553,fit=crop/A3Qp4rBpyQSnnOL1/computer-lab-YNqBP9OxqRFnr3a8.jpg"
            alt="Students learning"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* Right Features */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mt-8 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                <span className="flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-blue-600"></span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityEducationServices;
