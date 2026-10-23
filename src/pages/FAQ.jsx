import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the school timings?",
      answer:
        "Our regular school hours are from 7:30 AM to 3:00 PM, Monday to Saturday.",
    },
    {
      question: "What curriculum does the school follow?",
      answer:
        "We follow the CBSE curriculum with a strong emphasis on moral values and holistic development.",
    },
    {
      question: "What are the age criteria for admission?",
      answer: (
        <ul className="list-disc ml-5">
          <li>Nursery: 3+ years</li>
          <li>Kindergarten: 4+ years</li>
          <li>Class 1: 5+ years</li>
          <li>(Age as on 31st March of the academic year)</li>
        </ul>
      ),
    },
    {
      question: "What documents are required for admission?",
      answer: (
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
      question: "Does the school provide transportation?",
      answer:
        "Yes, we offer safe and reliable Auto services covering most nearby areas.",
    },
    {
      question: "What are the school's safety measures?",
      answer:
        "We have 24/7 CCTV surveillance, security guards, regular drills, and a dedicated safety committee.",
    },
    {
      question: "Is there a school uniform?",
      answer:
        "Yes, we have a designated uniform for all classes, including a special uniform for sports days.",
    },
    {
      question: "What extracurricular activities are available?",
      answer:
        "We offer sports, music, dance, art & craft, drama, yoga, robotics, and more.",
    },
    {
      question: "What is the teacher-student ratio?",
      answer:
        "We maintain a healthy ratio of 1:35 to ensure personalized attention.",
    },
    {
      question: "Are there parent-teacher meetings (PTMs)?",
      answer:
        "Yes, PTMs are scheduled every term to discuss the child’s academic and personal progress.",
    },
    {
      question: "Does the school offer meals or a canteen service?",
      answer:
        "We have a hygienic canteen offering healthy snacks. Students may also bring their own lunch.",
    },
    {
      question: "Is there a provision for special education or learning support?",
      answer:
        "Yes, we have trained counselors and special educators to support students with learning needs.",
    },
    {
      question: "What are the school holidays and vacation periods?",
      answer:
        "The academic calendar with holidays is shared at the beginning of the session.",
    },
    {
      question: "How do I contact the school for admission or queries?",
      answer:
        "You can reach us via phone, email, or by visiting the school office during working hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-sky-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 border-b pb-2">
          Frequently Asked Questions
        </h2>

        {/* FAQ Section */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-blue-600 text-lg">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="mt-2 text-gray-700 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-10 border-t pt-6">
         

          <form className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Email *</label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number *</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Your Query</label>
              <textarea
                placeholder="Enter your message..."
                className="w-full mt-1 p-2 border border-gray-300 rounded-md h-24 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
