import React from "react";

const BookList = () => {
  const pdfUrl = "https://drive.google.com/file/d/1-Jn9tJRtTf8zybT2N3m9OBD8u3h_xRtQ/view?usp=sharing";

  // Convert to embed link
  const embedUrl = pdfUrl.replace("/view", "/preview");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-600 py-6">
           Book List
        </h2>
        <div className="border-t border-gray-200">
          <iframe
            src={embedUrl}
            className="w-full h-[600px] md:h-[800px] border-0"
            title="Book List"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookList;
