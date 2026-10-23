import React from "react";

const Banner2 = () => {
  return (
    <div className="p-4 mt-20 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-20 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 bg-indigo-600">
          {/* Text Section */}
          <div className="pt-6 pb-8 px-4 sm:pt-8 sm:px-6 lg:py-10 lg:pr-4">
            <div className="lg:self-center">
             
              <p className="mt-3 text-sm sm:text-base text-white">
               Gurudev School fosters growth and excellence, blending quality education with strong moral values beautifully.
              </p>

              {/* Star Rating */}
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.948c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.948a1 1 0 00-.364-1.118L2.03 9.375c-.783-.57-.38-1.81.588-1.81h4.146a1 1 0 00.95-.69l1.285-3.948z" />
                  </svg>
                ))}
              </div>

            
            </div>
          </div>

          {/* Image Section */}
          <div className="relative aspect-[3/2] -mt-4 sm:-mt-6">
            <img
              className="absolute inset-0 w-full h-full transform translate-x-4 translate-y-4 rounded-md object-cover object-left-top sm:translate-x-6 sm:translate-y-6"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=583,fit=crop/A3Qp4rBpyQSnnOL1/174a6193-AzGX3Egq6xskQyjr.JPG"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
