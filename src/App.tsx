import React, { useState } from "react";
import {
  Tractor,
  Bone as Drone,
  Leaf,
  Users,
  BookOpen,
  Headset as VrHeadset,
  BarChart3,
  MapPin,
  CheckCircle2,
  Home,
  FileText,
} from "lucide-react";
import Banner from "../src/assets/DS Banner.jpg";
import DSLOGO from '../src/assets/DS logo.png'
import CUTMLOGO from '../src/assets/cutm logo.png'

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderHome = () => (
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

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Agri on Wheels
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Empowering 500+ farmers with cutting-edge agricultural technology,
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

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Program Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <VrHeadset className="w-8 h-8" />,
                title: "VR Training",
                description:
                  "Immersive learning experience using 3DEXPERIENCE Platform",
              },
              {
                icon: <Drone className="w-8 h-8" />,
                title: "Drone Technology",
                description:
                  "Hands-on demonstration of agricultural drones for spraying and mapping",
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Sustainable Practices",
                description:
                  "Training on vermicomposting, hydroponics, and green cultivation",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Outreach Unit */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Mobile Outreach Unit</h2>
              <div className="space-y-4">
                {[
                  "VR training kits and 3D projector",
                  "Digital display system",
                  "Hands-on demonstration equipment",
                  "ENVI software for crop analysis",
                  "Agisoft Metashape integration",
                  "On-board technical support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80"
                alt="Mobile training unit"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Project Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                value: "500+",
                label: "Farmers Trained",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                value: "6",
                label: "Month Program",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                value: "100%",
                label: "Hands-on Training",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                value: "5+",
                label: "Training Modules",
              },
            ].map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="text-green-600 flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderProjectDetails = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Details</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Project Name
              </h3>
              <p className="text-gray-600">
                Use Technology to Empower Farmers with Sustainable Agriculture
                Practices (Through Visual Learning & data-driven techniques)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  DSF Project ID
                </h3>
                <p className="text-gray-600">IN-2024-2-08</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  DSF Agreement ID
                </h3>
                <p className="text-gray-600">2025-289</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Funding Released in FY 24-25
              </h3>
              <p className="text-gray-600">₹1,150,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex space-x-6">
              <img
                src={CUTMLOGO}
                alt="Centurion University Logo"
                className="h-10 w-auto"
              />
              <img
                src={DSLOGO}
                alt="Dassault Systèmes Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex space-x-8">
              <button
                onClick={() => setCurrentPage("home")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                  currentPage === "home"
                    ? "bg-green-50 text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>
              <button
                onClick={() => setCurrentPage("details")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                  currentPage === "details"
                    ? "bg-green-50 text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                <FileText className="w-5 h-5" />
                <span>Project Details</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      {currentPage === "home" ? renderHome() : renderProjectDetails()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About the Project</h3>
              <p className="text-gray-400">
                This project is supported by La Fondation Dassault Systemes. A
                comprehensive initiative to bring modern agricultural practices
                and technology to farmers through immersive learning experiences
                and hands-on training.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                Centurion University of Technology and Management<br />
                Email: agritech@cutm.ac.in<br />
                Phone: +91-7978029866
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;