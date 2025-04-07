import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Hero from "../src/Components/Hero";
import ProgramFeature from "../src/Components/ProgramFeature";
import MobileOutreachUnit from "../src/Components/MobileOutreachUnit";
import ProjectImpact from "../src/Components/ProjectImpact";
import Footer from "../src/Components/Footer";
import ProjectDetails from "../src/Page/ProjectDetails";

import Licence from "../src/Page/License";

import FieldVisit from "../src/Page/FieldVisit";
import ProcessedOutput from "../src/Page/ProcessedOutput";
import ComingSoon from "../src/Page/ComingSoon"; // Import the new component

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />

        <div className="pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ProgramFeature />
                  <MobileOutreachUnit />
                  <ProjectImpact />
                </>
              }
            />
            <Route path="/ProjectDetails" element={<ProjectDetails />} />
            <Route path="/ProjectProgress/Licence" element={<Licence />} />
            <Route path="/ProjectProgress/ProofOfWork/FieldVisit" element={<FieldVisit />} />
            <Route path="/ProjectProgress/ProofOfWork/ProcessedOutput" element={<ProcessedOutput />} />
            <Route path="/coming-soon" element={<ComingSoon />} />{" "}
            {/* Add the new route */}
            {/* Optionally, use as a catch-all for undefined routes */}
            {/* <Route path="*" element={<ComingSoon />} /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
