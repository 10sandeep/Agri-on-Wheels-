import React from "react";
import { Sprout, Headset, Satellite, LineChart } from "lucide-react";
import { SectionHeading } from "./UI";

const features = [
  {
    icon: Sprout,
    title: "Sustainable Cultivation",
    description:
      "Hands-on training in vermicomposting, hydroponics and low-input green farming tuned to local soil and season.",
  },
  {
    icon: Headset,
    title: "Immersive VR Learning",
    description:
      "Practice complex techniques in a safe virtual environment built on the 3DEXPERIENCE platform before the field.",
  },
  {
    icon: Satellite,
    title: "Remote-Sensing Intelligence",
    description:
      "Multispectral and hyperspectral imaging reveal soil health, moisture and crop vigour invisible to the eye.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    description:
      "Spectral indices and AI models translate raw sensor data into clear, actionable guidance for each plot.",
  },
];

const ProgramFeature: React.FC = () => {
  return (
    <section className="paper-grain bg-parchment-100 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we deliver"
          title={
            <>
              Modern agronomy,
              <br className="hidden sm:block" /> carried to the farm gate
            </>
          }
          intro="Four pillars connect rigorous science with everyday cultivation, so that progress in the lab reaches the people working the land."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <article
                key={i}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-pine-900/[0.08] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="absolute right-6 top-6 font-mono text-xs text-pine-900/25">
                  0{i + 1}
                </span>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pine-800/[0.06] text-pine-700 transition-colors duration-300 group-hover:bg-pine-800 group-hover:text-harvest-300">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-lg font-semibold text-pine-800">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pine-900/65">
                  {f.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramFeature;
