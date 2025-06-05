import React, { useEffect, useState } from "react";
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
import ComingSoon from "../src/Page/ComingSoon";
import FarmerPDFViewer from "./Page/FarmerReview";

const App: React.FC = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showWatermark, setShowWatermark] = useState(false);

  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Block DevTools key combos
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    // Detect PrintScreen key
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        alert("Screenshots are not allowed!");
        setShowWatermark(true);
        setTimeout(() => setShowWatermark(false), 3000);
      }
    };

    // Blur on tab switch
    const handleVisibilityChange = () => {
      setIsBlurred(document.hidden);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        {/* 🔒 Optional blur effect on tab switch */}
        {isBlurred && (
          <div className="absolute inset-0 z-50 bg-white backdrop-blur-xl flex items-center justify-center text-2xl font-bold text-gray-500">
            Please return to the tab
          </div>
        )}

        {/* 🔒 Watermark shown on screenshot key press */}
        {showWatermark && (
          <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="text-6xl text-gray-500 opacity-20 rotate-45">
              © Protected Content
            </div>
          </div>
        )}

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
            <Route
              path="/ProjectProgress/ProofOfWork/FieldVisit"
              element={<FieldVisit />}
            />
            <Route
              path="/ProjectProgress/ProofOfWork/ProcessedOutput"
              element={<ProcessedOutput />}
            />
            <Route
              path="/ProjectProgress/ProofOfWork/FarmerReview"
              element={<FarmerPDFViewer />}
            />
            {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}
            {/* <Route path="*" element={<ComingSoon />} /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
