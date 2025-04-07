import React from "react";

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
