/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";

const Grid = () => {
    const gallery = [
    {
      img: "https://images.unsplash.com/photo-1644311528568-2cd62ae2e657?auto=format&fit=crop&w=812&h=432",

      spanClass: "md:col-span-1",
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=830,fit=crop/A3Qp4rBpyQSnnOL1/img_20250312_105650_850-YbNBqbNZL3t704R5.jpg",
     
      spanClass: "md:col-span-2",
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=830,fit=crop/A3Qp4rBpyQSnnOL1/img_20250312_095723_275-YD0lBr0PwVc3bMXD.jpg",
      
      spanClass: "md:col-span-2",
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=545,fit=crop/A3Qp4rBpyQSnnOL1/174a5736-mp8WqMNwLKTPw30o.JPG",
     
      spanClass: "md:col-span-1",
    },
  ];

  return (
    <section className="bg-white    py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-blacke">
          Academic Excellence
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-black">
         Nurturing environment fostering growth in academics, values, and creativity.
        </p>
      </div>

      <div className="mt-8 mx-auto max-w-screen-2xl px-4 md:px-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        {gallery.map((item, index) => (
          <motion.a
            key={index}
            href="#"
            className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${item.spanClass}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.2 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Grid