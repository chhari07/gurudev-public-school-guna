import React from "react";

const ContactUs = () => {
  return (
    <section className="text-gray-700 body-font relative">
      {/* Map Background */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=New%20Tekri%20Sarkar%20Road%2C%20Guna%2C%20MP&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          className="filter grayscale contrast-125 opacity-40"
        ></iframe>
      </div>

      {/* Container */}
      <div className="container px-5 py-24 mx-auto flex justify-center relative z-10">
        {/* Form Card */}
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 shadow-lg">
          <h2 className="text-gray-900 text-2xl mb-2 font-bold title-font">Contact Us</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Reach us for any queries or feedback. We'd love to hear from you!
          </p>

          <input
            className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Your Name"
            type="text"
          />
          <input
            className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 h-32 text-base px-4 py-2 mb-4 resize-none"
            placeholder="Message"
          ></textarea>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4">
            Send Message
          </button>

          {/* Address & Contact Info */}
          <div className="text-gray-700 text-sm">
            <p className="mb-1 font-semibold">Address:</p>
            <p className="mb-2">
              New Tekri Sarkar Road, Near Ashirwad Hospital, Pawan Colony, Guna, Madhya Pradesh 473001, India
            </p>
            <p className="mb-1 font-semibold">Phone:</p>
            <p>9425354433, 8319297013, 8649912449</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
