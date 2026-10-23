import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const PrincipleDesk = () => {
  return (
    
       <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-6 sm:px-8 lg:px-16 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* ===== Left Side: Text ===== */}
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                  >
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 text-center lg:text-left">
                      Principal&apos;s Message
                    </h2>
          
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                      <p>
                        <span className="block mb-2 font-semibold text-gray-800">
                          Dear Students, Parents, and Visitors,
                        </span>
                     
                        <span className="font-medium text-blue-800">
                        
                        </span>
                        It is with great pleasure that I welcome  GPIS. We are honored to have you as part of our school community—one that is built on the values of excellence, integrity, and lifelong learning.


                      </p>
          
                      <p>
                      At GPIS, we are committed to providing a nurturing and intellectually stimulating environment where students are encouraged to explore their potential, express their creativity, and grow both academically and personally. Our dedicated faculty and staff work tirelessly to ensure that each student receives a holistic education tailored to their individual strengths, needs, and aspirations.
                      </p>
          
                      <p>
                        We take pride in offering a diverse range of academic and co-curricular programs designed to foster critical thinking, collaboration, and leadership skills. From rigorous academic curricula to enriching cultural and athletic activities, every experience at GPIS is thoughtfully curated to prepare our students for success in an ever-evolving global society.
                      </p>
          
                      <p>
                        As you explore our school—whether in person or online—we encourage you to actively engage with our community. Your participation in school events, programs, and initiatives greatly enhances the learning experience and contributes to a supportive, collaborative atmosphere for all.
      
      
                      </p>
          
                      <p>
                       Thank you for your trust and ongoing support. Together, let us continue to build a school culture where every student feels inspired, empowered, and ready to make a meaningful impact in the world.
      
      
                      </p>
                    </div>
          
                    <div className="mt-8 text-center lg:text-left">
                      <p className="font-semibold text-gray-900">Warm regards,</p>
                        <p className="font-semibold text-gray-900">Ritu Kaur</p>
                      <p className="text-gray-700">Principal</p>
                    </div>
                  </motion.div>
          
                  {/* ===== Right Side: Image ===== */}
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center order-1 lg:order-2 relative"
                  >
                    {/* Soft Glow Background */}
                    <div className="absolute -inset-6 bg-gradient-to-tr from-blue-100 to-purple-100 blur-3xl opacity-60 rounded-3xl"></div>
          
                    <img
                      src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=589,fit=crop/A3Qp4rBpyQSnnOL1/174a0586-ALpe7xjPn4TOGpqZ.JPG"
                      alt="Principal"
                      className="relative z-10 w-full max-w-md rounded-2xl shadow-xl object-cover"
                    />
                  </motion.div>
                </div>
              </section>
    
  )
}

export default PrincipleDesk
