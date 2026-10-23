import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us Today</h2>
          <p className="text-gray-600 mb-8">
            Reach out to us for inquiries about our school's specialties and programs. We are here to assist you with any questions.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">Connect</h3>
              <p className="text-gray-600">123-456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Support</h3>
              <p className="text-gray-600">info@schooldomain.com</p>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Enter your first name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First name here"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Provide your email address*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address here"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your message to us*
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Submit your information now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
