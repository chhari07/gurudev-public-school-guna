import React from 'react'

const TotheStudents = () => {
     const sections = [
    {
      title: "Attendance and Punctuality",
      points: [
        "Students must attend school regularly and be punctual.",
        "A minimum of 75% attendance is mandatory for promotion to the next class.",
        "Leave must be applied in advance. In case of illness, a medical certificate should be submitted.",
      ],
    },
    {
      title: "Uniform and Appearance",
      points: [
        "Students must wear the prescribed school uniform on all working days.",
        "Uniform must be neat, clean, and properly maintained.",
        "Fancy hairstyles, jewelry, and makeup are not allowed.",
      ],
    },
    {
      title: "Discipline and Conduct",
      points: [
        "Students must maintain discipline and decorum within the school premises.",
        "Use of abusive language, bullying, or any form of misconduct will lead to strict action.",
        "Respect for teachers, staff, and fellow students is expected at all times.",
      ],
    },
    {
      title: "Use of School Property",
      points: [
        "Students must take care of school property and avoid any damage.",
        "Any intentional damage will be charged to the student’s account.",
      ],
    },
    {
      title: "Mobile Phones and Gadgets",
      points: [
        "Use of mobile phones or electronic gadgets is strictly prohibited.",
        "If found, the device will be confiscated and returned only to the parents.",
      ],
    },
    {
      title: "Homework and Assignments",
      points: [
        "Students must complete and submit homework and assignments on time.",
        "Plagiarism and copying will not be tolerated.",
      ],
    },
    {
      title: "Examinations and Promotion",
      points: [
        "Students must appear for all tests and examinations.",
        "Any kind of unfair means during exams will result in disqualification.",
      ],
    },
    {
      title: "School Diary",
      points: [
        "The school diary must be brought to school every day.",
        "Parents should check the diary regularly and sign any notices or remarks.",
      ],
    },
    {
      title: "Parent-Teacher Interaction",
      points: [
        "Parents are encouraged to attend PTMs and stay in touch with the class teacher.",
        "Appointments should be taken in advance for meeting any teacher during school hours.",
      ],
    },
    {
      title: "General Conduct",
      points: [
        "Students are ambassadors of the school; their behavior outside school must reflect school values.",
        "Politeness, cleanliness, and honesty should be practiced at all times.",
      ],
    },
  ];

  return (
       <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-10">
          School Rules and Regulations
        </h1>

        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 border-l-4 border-indigo-500 pl-3">
              {section.title}
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-center text-gray-600 mt-10 font-medium">
          These rules are designed to help students develop discipline, respect,
          and a sense of responsibility. All students are expected to follow them
          sincerely.
        </p>
      </div>
    </div>
  )
}

export default TotheStudents