import React from "react";
import Banner from "../assets/Home Page Assets/DS Banner.jpg";

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
            alt="Agricultural field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Agri on Wheels
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Empowering farmers with cutting-edge agricultural technology,
            immersive VR training, and precision farming techniques.
          </p>
        </div>
      </header>

      {/* Banner Image */}
      <div className="w-full bg-white py-8">
        <img
          src={Banner}
          alt="La Fondation Dassault Systemes Banner"
          className="w-full max-w-7xl mx-auto h-auto object-contain"
        />
      </div>
    </>
  );
};

export default Hero;
