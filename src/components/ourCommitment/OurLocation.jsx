import React from 'react';

const OurLocation = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            <span className="block text-blue-800">Our Location</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
            Gurudev Public International HR Sec School is situated in a vibrant area, fostering an environment of learning and growth for every child. The school's commitment to holistic education ensures that each student develops academically, socially, and emotionally in a supportive and nurturing environment.
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.477983158975!2d78.17908421543948!3d24.64880438414347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398246c9cfc60b4b%3A0x988f914f14e8a0c2!2sNew%20Tekri%20Sarkar%20Road%2C%20Near%20Ashirwad%20Hospital%2C%20Pawan%20Colony%2C%20Guna%2C%20Madhya%20Pradesh%20473001%2C%20India!5e0!3m2!1sen!2sin!4v1707430000000!5m2!1sen!2sin"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Gurudev Public International HR Sec School Location"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                  <p className="mt-1 text-gray-600">
                    New Tekri Sarkar Road, Near Ashirwad Hospital Pawan Colony, Guna, Madhya Pradesh 473001, India
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">Monday - Friday: 7:30 am - 3:00 pm</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">Email: info@example.com</p>
                  <p className="mt-1 text-gray-600">Phone: +91 12345 67890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
