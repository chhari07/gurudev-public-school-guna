import React from 'react'

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const DirectorsDesk = () => {
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
                Director&apos;s Message
              </h2>
    
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  <span className="block mb-2 font-semibold text-gray-800">
                    
                  </span>
               
                  <span className="font-medium text-blue-800">
                  
                  </span>
                   I am honoured and feel very privileged to be the Director  of Gurudev Public International Hr. Sec School. I am always excited and look forward to working with our students, staff and parents to make GPIS the best school it can be.
                </p>
    
                <p>
                  My commitment to our community is to lead the school with enthusiasm and passion to enable us to reach our goals.We will continue to develop and enhance a school that
                </p>
    
                <p>
                  Focuses on the development of the whole child Strives for the highest academic standards Reflects the values of its community Has a personalised curriculum for each child
                </p>
    
                <p>
                  Involves the community in learning Develops true partnerships that value each child I have an open door policy and urge all parents to take this opportunity to discuss any issue with me so that we can move forward together.


                </p>
    
                <p>
                  We truly have a fantastic school with a supportive and involved parent community, dedicated and highly skilful staff, excellent resources and buildings and the most fantastic students to work with.


                </p>
              </div>
    
              <div className="mt-8 text-center lg:text-left">
                <p className="font-semibold text-gray-900">RAJU SALUJA</p>
                
                <p className="text-gray-700">Director</p>
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
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=470,fit=crop/A3Qp4rBpyQSnnOL1/browser-YZ98xwL88xcBek4B.jpg"
                alt="Principal"
                className="relative z-10 w-full max-w-md rounded-2xl shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </section>
  )
}

export default DirectorsDesk