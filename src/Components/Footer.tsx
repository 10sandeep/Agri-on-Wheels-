import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import CUTMSEAL from "../assets/Home Page Assets/cutm-seal.png";
import DSLOGO from "../assets/Home Page Assets/DS logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-pine-950 text-parchment-200/75">
      <div className="spectral-band h-1 w-full" />
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* About */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-parchment-50 p-1.5">
                <img
                  src={CUTMSEAL}
                  alt="CUTM"
                  className="logo-crisp h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-parchment-50">
                  Agri on Wheels
                </p>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-parchment-200/55">
                  IN-2024-2-08
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-parchment-200/65">
              A Centurion University initiative supported by La Fondation
              Dassault Systèmes, bringing sustainable agriculture and remote-sensing
              technology to farmers through immersive learning and hands-on training.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <img
                src={DSLOGO}
                alt="La Fondation Dassault Systèmes"
                className="logo-crisp h-9 w-auto rounded bg-parchment-50 px-2.5 py-1.5"
              />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="eyebrow text-harvest-300">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/ProjectDetails", label: "Project Details" },
                { to: "/ProjectProgress/Licence", label: "License & Documents" },
                { to: "/ProjectProgress/ProofOfWork/FieldVisit", label: "Field Visit" },
                { to: "/ProjectProgress/ProofOfWork/ProcessedOutput", label: "Processed Outputs" },
                { to: "/ProjectProgress/ProofOfWork/FarmerReview", label: "Farmers Trained" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-parchment-200/65 transition-colors hover:text-harvest-300 focus-ring rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-harvest-300">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-spectral-400" />
                <span className="text-parchment-200/65">
                  Centurion University of Technology and Management, Odisha
                </span>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-parchment-200/45">
                  Principal Investigator
                </p>
                <a
                  href="mailto:saurav.burman@cutm.ac.in"
                  className="mt-1 flex items-center gap-2 text-parchment-200/75 transition-colors hover:text-harvest-300 focus-ring rounded"
                >
                  <Mail className="h-4 w-4 shrink-0 text-spectral-400" />
                  saurav.burman@cutm.ac.in
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-parchment-200/45">
                  Project Manager
                </p>
                <a
                  href="mailto:saneev.das@cutm.ac.in"
                  className="mt-1 flex items-center gap-2 text-parchment-200/75 transition-colors hover:text-harvest-300 focus-ring rounded"
                >
                  <Mail className="h-4 w-4 shrink-0 text-spectral-400" />
                  saneev.das@cutm.ac.in
                </a>
                <a
                  href="tel:+917978029866"
                  className="mt-1.5 flex items-center gap-2 text-parchment-200/75 transition-colors hover:text-harvest-300 focus-ring rounded"
                >
                  <Phone className="h-4 w-4 shrink-0 text-spectral-400" />
                  +91 79780 29866
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-parchment-50/10 pt-7 text-xs text-parchment-200/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Centurion University of Technology and Management. All rights reserved.</p>
          <p>Supported by La Fondation Dassault Systèmes · Agreement 2025-289</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
