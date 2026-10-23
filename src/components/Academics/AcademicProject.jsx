import React from "react";

const AcademicProject = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          <span className="block text-blue-800">
           Academic Projects
          </span>
        </h1>
       
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Card 1 */}
        <div
          className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=550,fit=crop/A3Qp4rBpyQSnnOL1/img_5701-m7V35qPvj4fKnqPQ.JPG')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="p-5 z-10">
            <a
              href="#"
              className="block text-md font-medium leading-7 text-white hover:underline"
            >
              Science Fair
            </a>
            <p className="text-white mt-2 text-sm sm:text-base">
              Innovative experiments showcasing student creativity and
              scientific inquiry.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=550,fit=crop/A3Qp4rBpyQSnnOL1/whatsapp-image-2025-03-15-at-12.12.22-pm-m7V35qJKGWFJLyOy.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="p-5 z-10">
            <a
              href="#"
              className="block text-md font-medium leading-7 text-white hover:underline"
            >
              Art Exhibition
            </a>
            <p className="text-white mt-2 text-sm sm:text-base">
              Showcasing student talent through vibrant and expressive artworks.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 3 */}
        <div
          className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=550,fit=crop/A3Qp4rBpyQSnnOL1/img_20250322_091439_934-ALpe70x3BpTZQRQX.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="p-5 z-10">
            <a
              href="#"
              className="block text-md font-medium leading-7 text-white hover:underline"
            >
             Practical knowledge 
            </a>
            <p className="text-white mt-2 text-sm sm:text-base">
             In today's educational landscape, equipping students with practical knowledge is essential for their success in the real world. 
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=550,fit=crop/A3Qp4rBpyQSnnOL1/whatsapp-image-2025-03-15-at-12.12.23-pm-Aq2Wq1LGx2TxanBJ.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="p-5 z-10">
            <a
              href="#"
              className="block text-md font-medium leading-7 text-white hover:underline"
            >
             Self Defense Training  
            </a>
            <p className="text-white mt-2 text-sm sm:text-base">
              Self-defense training for students is an essential program that empowers young individuals with the skills and confidence to protect themselves in various situations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicProject;
