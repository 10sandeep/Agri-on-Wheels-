import React from "react";

const ProjectDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-white flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-green-100/50 transform transition-all duration-500 hover:shadow-3xl animate-fadeInUp"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight drop-shadow-md">
            Project Details
          </h1>
          <div className="space-y-8">
            <div className="border-b border-green-100 pb-6">
              <h2 className="text-xl font-semibold text-green-700 mb-3 tracking-wide">
                Project Name
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Use Technology to Empower Farmers with Sustainable Agriculture Practices (Through Visual Learning & data-driven techniques)
              </p>
            </div>
            <div className="flex space-x-8 border-b border-green-100 pb-6">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-green-700 mb-3 tracking-wide">
                  DSF Project ID
                </h2>
                <p className="text-gray-600">IN-2024-2-08</p>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-green-700 mb-3 tracking-wide">
                  DSF Agreement ID
                </h2>
                <p className="text-gray-600">2025-289</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 mb-3 tracking-wide">
                Funding Released in FY 24-25
              </h2>
              <p className="text-gray-600">₹ 11,50,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
