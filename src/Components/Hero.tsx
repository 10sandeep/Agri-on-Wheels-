import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import DSLOGO from "../assets/Home Page Assets/DS logo.png";
import CUTMSEAL from "../assets/Home Page Assets/cutm-seal.png";
import HEROBG from "../assets/Proof of work/image16.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-pine-900">
      {/* Field photograph backdrop */}
      <div className="absolute inset-0">
        <img
          src={HEROBG}
          alt=""
          className="h-full w-full object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950/85 via-pine-900/88 to-pine-900" />
        <div className="paper-grain absolute inset-0" />
      </div>

      <div className="container-page relative pb-20 pt-32 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left — thesis */}
          <div className="animate-fadeUp">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-harvest-300/25 bg-harvest-300/5 px-4 py-1.5">
              <Leaf className="h-3.5 w-3.5 text-harvest-300" />
              <span className="eyebrow text-harvest-300">
                Precision Agriculture · Odisha, India
              </span>
            </div>

            <h1 className="text-balance font-display text-5xl font-semibold leading-[0.98] text-parchment-50 sm:text-6xl lg:text-7xl">
              Agri on{" "}
              <span className="relative whitespace-nowrap text-harvest-300">
                Wheels
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 9C60 3 120 3 180 6C220 8 260 7 298 4"
                    stroke="#e8c25c"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-parchment-200/85 sm:text-xl">
              Carrying modern science to the farm gate — immersive learning,
              hyperspectral soil intelligence and data-driven cultivation that
              put sustainable practice in the hands of rural farmers.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/ProjectProgress/ProofOfWork/ProcessedOutput"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-harvest-300 px-7 py-3.5 text-sm font-semibold text-pine-900 transition-all duration-300 hover:bg-harvest-200 hover:shadow-lift focus-ring"
              >
                Explore the Field Data
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/ProjectDetails"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-parchment-50/25 px-7 py-3.5 text-sm font-semibold text-parchment-50 transition-all duration-300 hover:border-parchment-50/55 hover:bg-parchment-50/5 focus-ring"
              >
                Project Details
              </Link>
            </div>
          </div>

          {/* Right — partnership card */}
          <div className="animate-scaleIn lg:justify-self-end">
            <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-parchment-50/12 bg-parchment-50/[0.04] backdrop-blur-sm">
              <div className="spectral-band h-1.5 w-full" />
              <div className="p-7">
                <p className="eyebrow text-parchment-200/60">An initiative by</p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-parchment-50 p-2">
                    <img
                      src={CUTMSEAL}
                      alt="CUTM"
                      className="logo-crisp h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold leading-tight text-parchment-50">
                      Centurion University
                    </p>
                    <p className="text-xs text-parchment-200/70">
                      of Technology &amp; Management
                    </p>
                  </div>
                </div>

                <div className="my-6 h-px w-full bg-parchment-50/10" />

                <p className="eyebrow text-parchment-200/60">Supported by</p>
                <div className="mt-5 flex items-center rounded-2xl bg-parchment-50 px-4 py-3.5">
                  <img
                    src={DSLOGO}
                    alt="La Fondation Dassault Systèmes"
                    className="logo-crisp h-11 w-auto object-contain"
                  />
                </div>

                <dl className="mt-7 grid grid-cols-2 gap-4">
                  <div>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-parchment-200/55">
                      Project ID
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-parchment-50">
                      IN-2024-2-08
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-parchment-200/55">
                      Agreement
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-parchment-50">
                      2025-289
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
