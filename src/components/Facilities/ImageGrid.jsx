import React from "react";

const images = [
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=589,fit=crop/A3Qp4rBpyQSnnOL1/img_20250329_091157_729-m6LZjqBWEJtPr55n.jpg",
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=589,fit=crop/A3Qp4rBpyQSnnOL1/synthetic-basketball-court-YrDWq9nZ2xCn769E.jpeg",
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=589,fit=crop/A3Qp4rBpyQSnnOL1/images-YBg7eL3NPgFGpgxQ.jpg",
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=589,fit=crop/A3Qp4rBpyQSnnOL1/whatsapp-image-2025-03-15-at-12.12.22-pm-1-YNqBP9wMEMTrbB6Z.jpeg",
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=589,fit=crop/A3Qp4rBpyQSnnOL1/whatsapp-image-2025-03-15-at-12.12.17-pm-Y4LDxlnLLji5nGJy.jpeg",
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=589,fit=crop/A3Qp4rBpyQSnnOL1/img_20250214_084513_607-mv0W2LMrrjUDEwLM.jpg",
];

const ImageGrid = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
