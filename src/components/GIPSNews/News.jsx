import React, { useState } from "react";

const News = () => {
  // --- FAQ Toggle State ---
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      q: "What are the school timings?",
      a: "Our regular school hours are from 7:30 AM to 3:00 PM, Monday to Saturday.",
    },
    {
      q: "What curriculum does the school follow?",
      a: "We follow the CBSE curriculum with a strong emphasis on moral values and holistic development.",
    },
    {
      q: "What are the age criteria for admission?",
      a: (
        <ul className="list-disc ml-5">
          <li>Nursery: 3+ years</li>
          <li>Kindergarten: 4+ years</li>
          <li>Class 1: 5+ years</li>
          <li>(Age as on 31st March of the academic year)</li>
        </ul>
      ),
    },
    {
      q: "What documents are required for admission?",
      a: (
        <ul className="list-disc ml-5">
          <li>Birth Certificate</li>
          <li>Passport-size photographs</li>
          <li>Transfer Certificate (if applicable)</li>
          <li>Previous year’s report card</li>
          <li>Aadhar Card copy (if available)</li>
        </ul>
      ),
    },
    {
      q: "Does the school provide transportation?",
      a: "Yes, we offer safe and reliable Auto services covering most nearby areas.",
    },
    {
      q: "What extracurricular activities are available?",
      a: "We offer sports, music, dance, art & craft, drama, yoga, robotics, and more.",
    },
  ];

  return (
    <div className="bg-sky-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-sky-100 py-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to Gurudev Public School</h1>
        <p className="mt-3 text-gray-600 text-lg">
          Empowering Minds, Building Futures.
        </p>
        <button className="mt-6 bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition">
          Admissions Open 2025–26
        </button>
      </section>

      {/* Principal’s Message */}
      <section className="max-w-5xl mx-auto bg-white p-8 shadow-md rounded-lg my-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Principal’s Message</h2>
        <div className="md:flex items-center gap-6">
          <img
            src="/principal.jpg"
            alt="Principal"
            className="w-40 h-40 rounded-full mx-auto md:mx-0 object-cover border-4 border-sky-500"
          />
          <p className="text-gray-700 text-justify mt-4 md:mt-0">
            “At Gurudev Public School, we believe education is not just about
            academics but nurturing values, discipline, and curiosity. Our goal
            is to develop confident, responsible, and creative individuals
            prepared for the future.”
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-sky-50 py-10">
        <h2 className="text-2xl font-bold text-center mb-8">Our Facilities</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Smart Classrooms", img: "/classroom.jpg" },
            { title: "Science & Computer Labs", img: "/lab.jpg" },
            { title: "Playground & Sports", img: "/playground.jpg" },
            { title: "Library & Reading Hall", img: "/library.jpg" },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-3 text-center font-semibold">{f.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Admission Process */}
      <section className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg my-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Admission Process</h2>
        <ol className="list-decimal ml-6 text-gray-700 space-y-2">
          <li>Fill out the online admission form.</li>
          <li>Submit required documents (birth certificate, photos, etc.).</li>
          <li>Attend the interaction/interview session.</li>
          <li>Complete the fee payment to confirm admission.</li>
        </ol>
      </section>

      {/* Gallery */}
      <section className="bg-sky-50 py-10">
        <h2 className="text-2xl font-bold text-center mb-8">School Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            "/event1.jpg",
            "/event2.jpg",
            "/sports.jpg",
            "/lab.jpg",
            "/library.jpg",
            "/assembly.jpg",
          ].map((p, i) => (
            <img
              key={i}
              src={p}
              alt="school"
              className="rounded-lg shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg my-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h2>
        <ul className="divide-y">
          {[
            { date: "15 Oct 2025", title: "Science Exhibition" },
            { date: "01 Nov 2025", title: "Annual Sports Meet" },
            { date: "25 Dec 2025", title: "Christmas Celebration" },
          ].map((e, i) => (
            <li key={i} className="py-3 flex justify-between text-gray-700">
              <span>{e.title}</span>
              <span className="text-sky-600 font-semibold">{e.date}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 my-8">
        <h2 className="text-2xl font-bold text-center mb-6 border-b pb-2">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{faq.q}</h3>
                <span className="text-sky-600 text-lg">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="mt-2 text-gray-700 text-sm">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 my-8">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Contact / Query Form
        </h2>
        <form className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Email *</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number *</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Your Query</label>
            <textarea
              placeholder="Enter your message..."
              className="w-full mt-1 p-2 border border-gray-300 rounded-md h-24 focus:ring-2 focus:ring-sky-400"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-sky-700 text-white py-8">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p>Gurudev Public School, Tekri Sarkar, Guna (M.P.)</p>
            <p>Phone: available from the school office</p>
            <p>Email: gurudevschool25@gmail.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>Admissions</li>
              <li>Facilities</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <p>Facebook | Instagram | YouTube</p>
          </div>
        </div>
        <p className="text-center text-xs mt-6">
          © {new Date().getFullYear()} Gurudev Public School. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default News;
