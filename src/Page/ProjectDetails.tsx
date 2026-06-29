import React from "react";
import { SectionHeading, SpectralBand } from "../Components/UI";
import { Banknote, Fingerprint, FileSignature, Target } from "lucide-react";

const facts = [
  { icon: Fingerprint, label: "DSF Project ID", value: "IN-2024-2-08" },
  { icon: FileSignature, label: "DSF Agreement ID", value: "2025-289" },
  { icon: Banknote, label: "Funding Released · FY 24–25", value: "₹ 11,50,000" },
];

const ProjectDetails: React.FC = () => {
  return (
    <div className="paper-grain min-h-screen bg-parchment-100">
      <section className="bg-pine-900">
        <div className="container-page py-16 sm:py-20">
          <span className="eyebrow text-harvest-300">Project Dossier</span>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight text-parchment-50 sm:text-5xl">
            Empowering farmers through visual learning &amp; data-driven techniques
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-parchment-200/80 sm:text-lg">
            A formal initiative of Centurion University of Technology and
            Management, supported by La Fondation Dassault Syst&egrave;mes.
          </p>
        </div>
        <SpectralBand />
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card-surface overflow-hidden">
            <div className="spectral-band h-1 w-full" />
            <div className="p-8 sm:p-10">
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pine-800/[0.06] text-pine-700">
                <Target className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <SectionHeading
                title="Project mandate"
                intro="Use technology to empower farmers with sustainable agriculture practices — delivered through visual learning and data-driven techniques that translate research into everyday cultivation."
              />
              <p className="mt-8 text-sm leading-relaxed text-pine-900/70">
                The programme combines immersive VR training, mobile field
                outreach and earth-observation science &mdash; multispectral and
                hyperspectral imaging &mdash; to give farmers in rural Odisha a clear,
                evidence-based picture of their soil and crops.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {facts.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-5 rounded-2xl border border-pine-900/[0.08] bg-white p-6 shadow-card"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-spectral-500/10 text-spectral-600">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="font-mono text-[0.7rem] uppercase tracking-wider text-pine-900/55">
                      {f.label}
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold text-pine-800">
                      {f.value}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="rounded-2xl border border-harvest-300/30 bg-harvest-50 p-6">
              <p className="text-sm leading-relaxed text-harvest-900/80">
                This dossier records the public, verifiable details of a funded
                research project. License documents, field evidence and processed
                outputs are available under <span className="font-semibold">Project Progress</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
