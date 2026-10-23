import React, { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A3Qp4rBpyQSnnOL1/img-20250126-wa0025-mk3vqqX46XHNQj5L.jpg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A3Qp4rBpyQSnnOL1/screenshot-2025-03-07-3.57.04-pm-YNqBPPzjKnfe1GnE.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A3Qp4rBpyQSnnOL1/screenshot-2025-03-07-3.57.59-pm-AMq1lljL26H4PV6a.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A3Qp4rBpyQSnnOL1/screenshot-2025-03-07-3.59.33-pm-A0xl11Lp9rFWa1Xp.png",
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="w-full max-w-full mx-auto relative">
      <div className="relative h-[500px] md:h-[700px] overflow-hidden rounded-lg shadow-lg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 z-30 flex items-center justify-center w-12 h-12 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none -translate-y-1/2"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 z-30 flex items-center justify-center w-12 h-12 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none -translate-y-1/2"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
