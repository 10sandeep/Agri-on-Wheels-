import React from "react";
import { FaTruck, FaBroadcastTower, FaChalkboardTeacher, FaLaptop } from "react-icons/fa";

const outreachFeatures = [
  {
    icon: <FaTruck className="text-green-500 text-4xl" />,
    title: "Mobile Training Units",
    description: "Equipped with modern tools to provide on-site training for farmers.",
  },
  {
    icon: <FaBroadcastTower className="text-blue-500 text-4xl" />,
    title: "Real-Time Connectivity",
    description: "Live updates and expert consultations via satellite communication.",
  },
  {
    icon: <FaChalkboardTeacher className="text-yellow-500 text-4xl" />,
    title: "Expert Guidance",
    description: "On-ground support from agricultural experts and trainers.",
  },
  {
    icon: <FaLaptop className="text-red-500 text-4xl" />,
    title: "Digital Learning",
    description: "Access to online courses and digital farming resources.",
  },
];

const MobileOutreachUnit: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Mobile Outreach Unit</h2>
        <p className="text-lg text-gray-600 mb-12">
          Bringing education, technology, and real-time support directly to farmers in remote areas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outreachFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileOutreachUnit;
