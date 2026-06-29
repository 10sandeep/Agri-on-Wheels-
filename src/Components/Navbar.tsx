import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import CUTMLOGO from "../assets/Home Page Assets/cutm_logo.jpeg";
import DSLOGO from "../assets/Home Page Assets/DS logo.png";

const proofLinks = [
  { to: "/ProjectProgress/ProofOfWork/FieldVisit", label: "Field Visit" },
  { to: "/ProjectProgress/ProofOfWork/ProcessedOutput", label: "Processed Outputs" },
  { to: "/ProjectProgress/ProofOfWork/FarmerReview", label: "Farmers Trained" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progressOpen, setProgressOpen] = useState(false);
  const [proofOpen, setProofOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setProgressOpen(false);
    setProofOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  const linkBase =
    "relative text-sm font-medium text-white/80 transition-colors hover:text-white";
  const activeClass = "text-white";

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 shadow-[0_1px_0_rgba(0,0,0,0.3)] backdrop-blur-md"
            : "bg-gray-900/85 backdrop-blur-sm"
        }`}
      >
        <div className="container-page flex h-[4.75rem] items-center justify-between">
          {/* Logos */}
          <NavLink to="/" className="group flex items-center gap-3 sm:gap-4 focus-ring rounded-lg">
            <img
              src={CUTMLOGO}
              alt="Centurion University of Technology and Management"
              className="logo-crisp h-14 w-auto object-contain sm:h-16"
            />
            <span className="hidden h-9 w-px bg-white/20 sm:block" />
            <img
              src={DSLOGO}
              alt="La Fondation Dassault Systèmes"
              className="logo-crisp hidden h-9 w-auto object-contain sm:block brightness-0 invert"
            />
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ""}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/ProjectDetails"
              className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ""}`}
            >
              Project Details
            </NavLink>

            <div className="group relative">
              <button className="flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white focus-ring rounded">
                Project Progress
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute right-0 top-full w-64 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-pine-900/10 bg-white shadow-lift">
                  <div className="spectral-band h-1 w-full" />
                  <NavLink
                    to="/ProjectProgress/Licence"
                    className="block px-5 py-3.5 text-sm font-medium text-pine-900/80 transition-colors hover:bg-pine-50 hover:text-pine-800"
                  >
                    License &amp; Documents
                  </NavLink>
                  <div className="border-t border-pine-900/5 px-5 pb-1 pt-3">
                    <span className="eyebrow text-spectral-500">Proof of Work</span>
                  </div>
                  {proofLinks.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className="block px-5 py-3 text-sm font-medium text-pine-900/80 transition-colors hover:bg-pine-50 hover:text-pine-800"
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-ring md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <div className="spectral-band h-[2px] w-full opacity-80" />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-b border-white/10 bg-gray-900 md:hidden">
          <div className="container-page space-y-1 py-4">
            <NavLink
              to="/"
              onClick={closeMenu}
              className="block rounded-xl px-3 py-3 text-base font-medium text-white/85 hover:bg-white/10"
            >
              Home
            </NavLink>
            <NavLink
              to="/ProjectDetails"
              onClick={closeMenu}
              className="block rounded-xl px-3 py-3 text-base font-medium text-white/85 hover:bg-white/10"
            >
              Project Details
            </NavLink>

            <button
              onClick={() => setProgressOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-white/85 hover:bg-white/10"
            >
              Project Progress
              <ChevronDown
                className={`h-5 w-5 transition-transform ${progressOpen ? "rotate-180" : ""}`}
              />
            </button>

            {progressOpen && (
              <div className="ml-3 space-y-1 border-l border-white/10 pl-3">
                <NavLink
                  to="/ProjectProgress/Licence"
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/75 hover:bg-white/10"
                >
                  License &amp; Documents
                </NavLink>
                <button
                  onClick={() => setProofOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-white/75 hover:bg-white/10"
                >
                  Proof of Work
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${proofOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {proofOpen && (
                  <div className="ml-3 space-y-1 border-l border-white/10 pl-3">
                    {proofLinks.map((l) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        onClick={closeMenu}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 hover:bg-white/10"
                      >
                        {l.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
