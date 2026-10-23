import React from 'react'
const classResources = [
  {
    className: "Class 1",
    link: "https://drive.google.com/file/d/1-cPUoTAMT9t20xO3hVpJnV4-FEWCn894/view",
  },
  {
    className: "Class 2",
    link: "https://drive.google.com/file/d/1AgFPscCD43rRS2n1dZ7wQIeSXZYdRwvE/view",
  },
  {
    className: "Class 3",
    link: "https://drive.google.com/file/d/1hGCbamlThZYP6gspkl_PbQKE7faGvDNF/view",
  },
  {
    className: "Class 4",
    link: "https://drive.google.com/file/d/1cJUhZb_7n_HTXKr-7InGkOQbz-pEWhqI/view",
  },
  {
    className: "Class 5",
    link: "https://drive.google.com/file/d/1NXAb7TRoGMeLHsfK0_UceU1MPGb5U-7q/view",
  },
  {
    className: "Class 6",
    link: "Not Available",
  },
  {
    className: "Class 7",
    link: "https://drive.google.com/file/d/1Iwltrs-a1_gvnuV7VZFgpU7w5UxJajdl/view",
  },
  {
    className: "Class 8",
    link: "Not Available",
  },
];
const HolidayHomework = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
       
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                <th className="py-3 px-6 text-left">Class</th>
                <th className="py-3 px-6 text-left">Resource Link</th>
              </tr>
            </thead>
            <tbody>
              {classResources.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="py-3 px-6 font-medium text-gray-800">
                    {item.className}
                  </td>
                  <td className="py-3 px-6">
                    {item.link === "Not Available" ? (
                      <span className="text-red-500 font-semibold">
                        Not Available
                      </span>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        View File
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HolidayHomework