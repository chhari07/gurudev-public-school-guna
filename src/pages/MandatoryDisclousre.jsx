import { title } from "framer-motion/client";
import React from "react";

const MandatoryDisclosure = () => {
  const generalInfo = [
    { no: 1, info: "NAME OF THE SCHOOL", details: "Gurudev Public School, Guna (M.P.)" },
    { no: 2, info: "SCHOOL CODE (IF APPLICABLE)", details: "-" },
    { no: 3, info: "COMPLETE ADDRESS WITH PIN CODE", details: "Tekri Sarkar, Guna 473001" },
    { no: 4, info: "PRINCIPAL NAME & QUALIFICATION", details: "Ms. Satvinder kaur Saluja, B.Com. M.Ed." },
    { no: 5, info: "ADMINISTRATIVE EXPERIENCE", details: "7 years" },
    { no: 6, info: "TEACHING EXPERIENCE", details: "16 years" },
    { no: 7, info: "PRINCIPAL PHONE NUMBER", details: "Available from the school office" },
    { no: 8, info: "SCHOOL EMAIL ID", details: "gurudevschool25@gmail.com" },
    { no: 9, info: "CONTACT DETAILS (LANDLINE / MOBILE)", details: "9425435434" },
    { no: 10, info: "NAME OF MANAGER", details: "MR. RAJU SALUJA" },
    { no: 11, info: "MANAGER MOBILE NUMBER", details: "8779013844" },
  ];

  const documents = [
    "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE",
    "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT 2009",
    "COPY OF BUILDING SAFETY CERTIFICATE",
    "COPY OF FIRE SAFETY CERTIFICATE",
    "COPY OF THE SELF CERTIFICATE",
    "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATE",
    "COPIES OF LAND CERTIFICATE",
  ];

  const academics = [
    "FEES STRUCTURE OF THE SCHOOL",
    "ANNUAL ACADEMIC CALENDER",
    "LIST OF SCHOOL MANAGEMENT COMMITTEE(SMC)",
    "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
    "TEACHERS LIST",
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-sky-50 min-h-screen">
          <title> Mandatory Disclosure </title>

      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 border border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-center border-b pb-2 mb-4">
          Mandatory Disclosure
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-700 mb-6">
          Mandatory Public Disclosure
        </h2>

        {/* General Information */}
        <Section title="GENERAL INFORMATION">
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-400 text-sm sm:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1 w-12 text-center">SL. NO.</th>
                  <th className="border px-2 py-1 w-1/2 text-left">INFORMATION</th>
                  <th className="border px-2 py-1 w-1/2 text-left">DETAILS</th>
                </tr>
              </thead>
              <tbody>
                {generalInfo.map((item) => (
                  <tr key={item.no} className="hover:bg-gray-50">
                    <td className="border px-2 py-1 text-center">{item.no}</td>
                    <td className="border px-2 py-1">{item.info}</td>
                    <td className="border px-2 py-1">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Document and Information */}
        <Section title="DOCUMENT AND INFORMATION">
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-400 text-sm sm:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1 w-12 text-center">SL. NO.</th>
                  <th className="border px-2 py-1">INFORMATION</th>
                  <th className="border px-2 py-1 w-12 text-center">DETAILS</th>
                </tr>
              </thead>
              <tbody>
                   <tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">1</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">
                  COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/11GKZ-oGCOcBSw0V3qvbrQ0tueiwR7uaU/view?usp=sharing%22" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr>
                 <tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">2</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">
                    COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT 2009
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1y16pWT-NsIoIuznELQ_PxoU8gsEFdbj0/view?usp=sharing" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr> <tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">3</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">
                  COPY OF BUILDING SAFETY CERTIFICATE
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1VysykmlFhYrkKkjqifxlsNLHDb0LRJ90/view?usp=sharing" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr> <tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">4</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">
                  COPY OF FIRE SAFETY CERTIFICATE
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1oja9Xr21ZgPg8bV_88Zrjl-mk45_eKPQ/view" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr> <tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">5</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">COPY OF THE SELF CERTIFICATE</th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1iGctu_ckyU1vIN7Pkd1Xu7KaKNkDegZs/view?usp=sharing" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr> <tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">6</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATE
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/15K4vcLTq1JbMEoypGhygSrch3k81lknv/view?usp=sharing" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr> <tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">7</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">COPIES OF LAND CERTIFICATE</th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1VjtgfpeyzVk7w_YJOh9G02PyMttCloKC/view?usp=sharing" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr>
                <tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">8</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">NOC
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1n-rdWcESGSfJbYnXT55dBFNGoLF5VI0Q/view" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr>
             
              </tbody>
            </table>
          </div>
        </Section>

        {/* Results and Academics */}
        <Section title="RESULTS AND ACADEMICS">
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-400 text-sm sm:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1 w-12 text-center">SL. NO.</th>
                  <th className="border px-2 py-1">INFORMATION</th>
                  <th className="border px-2 py-1 w-20 text-center">DETAILS</th>
                </tr>
              </thead>
              <tbody><tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">1</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">FEES STRUCTURE OF THE SCHOOL
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1jaD7gc_iRiZgylPbnb4plaiQjNbpu_n-/view" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr><tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">2</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">FEES STRUCTURE OF THE SCHOOL ANNUAL ACADEMIC CALENDER
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1760dWgkz9sT7FVKahxWWcpI2X-yGO_zO/view" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr><tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">3</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">LIST OF SCHOOL MANAGEMENT COMMITTEE(SMC)
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1eFvJYVbY6nKf5kn-X-IcQIXCBNcUtFfL/view" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr><tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">4</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1IgoB5GySClgNDnWgOUgbNxaskedpP1I8/view" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr><tr>
                  <th className="border px-2 py-1 w-12 text-center font-normal">5</th>
                  <th className="border px-2 py-1 w-12 text-left font-normal">TEACHERS LIST
                  </th>
                  <th className="border px-2 py-1 text-center font-normal"><a href="https://drive.google.com/file/d/1jGkM7NFaLExDvXM3ei3qgAOWFqjumskj/view" className="text-blue-600 underline cursor-pointer">Download</a></th>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="font-semibold text-gray-800 mb-2 underline">{title}</h3>
    {children}
  </div>
);

export default MandatoryDisclosure;
