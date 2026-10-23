import React from "react";

const SchoolSpecialties = () => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            School Specialties
          </h2>
          <p className="mt-2 text-lg leading-8 text-black">
            Explore our unique programs and educational offerings for students.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Academic Excellence",
              description:
                "Dedicated to fostering a love for learning and growth.",
              image:
                "https://images.unsplash.com/photo-1446329360995-b4642a139973?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNHx8c3BlY2lhbHR5JTIwc2Nob29sfGVufDB8fHx8MTc0NDcyMDY4M3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=503&h=360",
              link: "/tech-blog/post1",
            },
            {
              title: "Community Engagement",
              description:
                "Building strong relationships with families and local organizations.",
              image:
                "https://images.unsplash.com/photo-1424115087662-5845efc6b366?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMXx8c3BlY2lhbHR5JTIwc2Nob29sfGVufDB8fHx8MTc0NDcyMDY4M3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=503&h=360",
              link: "/tech-blog/post2",
            },
            {
              title: "Innovative Curriculum",
              description: "Innovative Curriculum",
              image:
                "https://images.unsplash.com/photo-1598981457915-aea220950616?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxN3x8c3BlY2lhbHR5JTIwc2Nob29sfGVufDB8fHx8MTc0NDcyMDY4M3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=503&h=360",
              link: "/tech-blog/post3",
            },
            {
              title: "Support Services",
              description:
                "Providing resources to ensure every student's success and well-being.",
              image:
                "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyNnx8c3BlY2lhbHR5JTIwc2Nob29sfGVufDB8fHx8MTc0NDcyMDY4M3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=503&h=360",
              link: "/tech-blog/post4",
            },
          ].map((item, idx) => (
            <article
              key={idx}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 py-8 pt-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime="2023-10-11" className="mr-8">
                  {item.title}
                </time>
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={item.link}>
                  <span className="absolute inset-0"></span>
                  {item.description}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolSpecialties;
