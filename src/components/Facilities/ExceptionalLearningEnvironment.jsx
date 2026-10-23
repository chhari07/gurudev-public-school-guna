import React from 'react';

const ExceptionalLearningEnvironment = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          <span className="block text-blue-800">
            Exceptional Learning Environment
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
          Discover our commitment to quality education and moral values in a nurturing atmosphere for every child.
        </p>
      </div>

      {/* Grid with 2 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div
          className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=386,fit=crop/A3Qp4rBpyQSnnOL1/whatsapp-image-2025-03-15-at-12.12.11-pm-mp8WqMOoJefJ5jq1.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="p-5 z-10">
            <a
              href="#"
              className="block text-md font-medium leading-7 text-white hover:underline"
            >
               Co-Curricular Activities
            </a>
            <p className="text-white mt-2 text-sm sm:text-base">
              Engage in diverse activities that foster creativity, teamwork, and personal growth beyond academics.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596488711806-2d21fdbfe633?auto=format&fit=crop&w=606&h=304')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="p-5 z-10">
            <a
              href="#"
              className="block text-md font-medium leading-7 text-white hover:underline"
            >
               Modern Facilities
            </a>
            <p className="text-white mt-2 text-sm sm:text-base">
              Explore our advanced classrooms, labs, library, and vibrant spaces designed for holistic student development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalLearningEnvironment;
