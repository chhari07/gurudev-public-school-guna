import React from "react";

const VideoGrid = () => {
  const videos = [
    {
     
      url: "https://www.youtube.com/embed/r0jIEYJOvmE?autoplay=0",
    },
    {

      url: "https://www.youtube.com/embed/anOn9m1I3nU?autoplay=0",
    },
    {
     
      url: "https://www.youtube.com/embed/5hl2as25yp4?autoplay=0",
    },
    {
     
      url: "https://www.youtube.com/embed/9hu6Gu1E3Cc?autoplay=0",
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
         

          {/* Videos Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {videos.map((video, index) => (
              <div key={index}>
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoGrid;
