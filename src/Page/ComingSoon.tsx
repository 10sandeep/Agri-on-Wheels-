import React from "react";
import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <div className="flex flex-col items-center">
          <Wrench className="w-14 h-14 text-yellow-500 mb-2" />
          <h1 className="text-3xl font-bold text-gray-900">We’ll Be Back Soon</h1>
        </div>
        <p className="text-gray-600 mt-2 mb-6 text-sm">
          Our site is currently under maintenance. We’re working hard to improve your experience. Please check back later!
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
