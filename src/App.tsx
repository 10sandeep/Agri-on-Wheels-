import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProjectImpact from "./Components/ProjectImpact";
import ProgramFeature from "./Components/ProgramFeature";
import MobileOutreachUnit from "./Components/MobileOutreachUnit";
import Leadership from "./Components/Leadership";
import Footer from "./Components/Footer";
import ProjectDetails from "./Page/ProjectDetails";
import Licence from "./Page/License";
import FieldVisit from "./Page/FieldVisit";
import ProcessedOutput from "./Page/ProcessedOutput";
import FarmerPDFViewer from "./Page/FarmerReview";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

const Home: React.FC = () => (
  <>
    <Hero />
    <ProjectImpact />
    <ProgramFeature />
    <MobileOutreachUnit />
    <Leadership />
  </>
);

const App: React.FC = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    const handleVisibilityChange = () => setIsBlurred(document.hidden);

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col bg-parchment-50">
        {isBlurred && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-parchment-50/90 backdrop-blur-xl">
            <p className="font-display text-2xl font-semibold text-pine-800/70">
              Please return to the tab
            </p>
          </div>
        )}

        <Navbar />

        <main className="flex-1 pt-[4.75rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ProjectDetails" element={<ProjectDetails />} />
            <Route path="/ProjectProgress/Licence" element={<Licence />} />
            <Route path="/ProjectProgress/ProofOfWork/FieldVisit" element={<FieldVisit />} />
            <Route path="/ProjectProgress/ProofOfWork/ProcessedOutput" element={<ProcessedOutput />} />
            <Route path="/ProjectProgress/ProofOfWork/FarmerReview" element={<FarmerPDFViewer />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
