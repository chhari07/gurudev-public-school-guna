import React from "react";

const Videogrid = () => {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      embedUrl: "https://www.youtube.com/embed/9hu6Gu1E3Cc",
    },
    {
      id: 2,
      title: "Khoob ladi mardani",
      embedUrl: "https://www.youtube.com/embed/5hl2as25yp4",
    },
    {
      id: 3,
      title: "Some glimpses of Summer",
      embedUrl: "https://www.youtube.com/embed/QQt8Ww3hqSk",
    },
  ];

  return (
    <section className="py-12 px-6 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div key={vid.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={vid.embedUrl}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-700">{vid.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videogrid;
