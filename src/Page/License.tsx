import React from "react";
import ComingSoon from "../Page/ComingSoon"; // Adjust the path based on your file structure

const Licence: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Licence</h1>
        <ComingSoon />
      </div>
    </div>
  );
};

export default Licence;