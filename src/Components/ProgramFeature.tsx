import React from "react";
import { FaSeedling, FaChalkboardTeacher, FaTractor, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaSeedling className="text-green-500 text-4xl" />,
    title: "Sustainable Farming",
    description: "Training on vermicomposting, hydroponics, and green cultivation",
  },
  {
    icon: <FaChalkboardTeacher className="text-blue-500 text-4xl" />,
    title: "VR-Based Training",
    description: "Immersive learning experience using 3DEXPERIENCE Platform",
  },
  {
    icon: <FaTractor className="text-yellow-500 text-4xl" />,
    title: "Smart Equipment",
    description: "Integrating modern farming equipment with AI-powered monitoring.",
  },
  {
    icon: <FaGlobe className="text-red-500 text-4xl" />,
    title: "Global Outreach",
    description: "Connecting farmers with experts and markets worldwide.",
  },
];

const ProgramFeature: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Program Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
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

export default ProgramFeature;
