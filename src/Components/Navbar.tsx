import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, FileText, Menu, X, ChevronDown } from "lucide-react";
import CUTMLOGO from "../assets/Home Page Assets/cutm logo.png";
import DSLOGO from "../assets/Home Page Assets/DS logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProofOfWorkOpen, setIsProofOfWorkOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-20">
        {/* Logos */}
        <div className="flex items-center space-x-6">
          <NavLink to="/">
            <img src={CUTMLOGO} alt="CUTM Logo" className="h-14 w-auto" />
          </NavLink>
          <NavLink to="/">
            <img src={DSLOGO} alt="DS Logo" className="h-14 w-auto" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <NavLink to="/" className="hover:text-green-700">
            Home
          </NavLink>
          <NavLink to="/ProjectDetails" className="hover:text-green-700">
            Project Details
          </NavLink>
          <div className="relative group">
            <NavLink
              to="/ProjectProgress"
              className="flex items-center space-x-2 hover:text-green-700"
            >
              <span>Project Progress</span>
              <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
            </NavLink>
            <div className="absolute right-0 mt-2 w-64 bg-white border shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <NavLink
                to="/ProjectProgress/Licence"
                className="block px-6 py-3 hover:bg-green-100"
              >
                License
              </NavLink>
              <div className="relative group">
                <button className="w-full text-left px-6 py-3 flex justify-between items-center hover:bg-green-100">
                  Proof of Work{" "}
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute right-0 mt-2 w-64 bg-white border shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <NavLink
                    to="/ProjectProgress/ProofOfWork/FieldVisit"
                    className="block px-6 py-3 hover:bg-green-100"
                  >
                    Field Visit
                  </NavLink>
                  <NavLink
                    to="/ProjectProgress/ProofOfWork/ProcessedOutput"
                    className="block px-6 py-3 hover:bg-green-100"
                  >
                    Processed Output
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 hover:text-green-700"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-xl p-4">
          <NavLink to="/" className="block py-3 text-lg hover:text-green-700">
            Home
          </NavLink>
          <NavLink
            to="/ProjectDetails"
            className="block py-3 text-lg hover:text-green-700"
          >
            Project Details
          </NavLink>
          <NavLink
            to="/ProjectProgress"
            className="block py-3 text-lg hover:text-green-700"
          >
            Project Progress
          </NavLink>
          <button
            onClick={() => setIsProofOfWorkOpen(!isProofOfWorkOpen)}
            className="w-full text-left py-3 flex justify-between items-center hover:text-green-700"
          >
            Proof of Work{" "}
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isProofOfWorkOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isProofOfWorkOpen && (
            <div className="pl-6">
              <NavLink
                to="/ProjectProgress/ProofOfWork/FieldVisit"
                className="block py-2 hover:text-green-700"
              >
                Field Visit
              </NavLink>
              <NavLink
                to="/ProjectProgress/ProofOfWork/ProcessedOutput"
                className="block py-2 hover:text-green-700"
              >
                Processed Output
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
