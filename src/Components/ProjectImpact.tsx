import React from "react";

interface Metric {
  value: string;
  label: string;
  detail: string;
}

const metrics: Metric[] = [
  { value: "20", label: "Farmers Trained", detail: "Across Gosani & Gumma blocks" },
  { value: "2", label: "Districts Covered", detail: "Gajapati & Khordha, Odisha" },
  { value: "150", label: "Spectral Bands", detail: "421.5–977.4 nm VNIR range" },
  { value: "1.39M", label: "Soil Pixels Analysed", detail: "Hyperspectral soil profiling" },
];

const ProjectImpact: React.FC = () => {
  return (
    <section className="bg-pine-800 text-parchment-50">
      <div className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="relative pl-5"
            >
              <span className="spectral-band absolute left-0 top-1 h-[calc(100%-0.5rem)] w-[3px] rounded-full" />
              <div className="font-display text-4xl font-semibold leading-none tracking-tight text-harvest-300 sm:text-5xl">
                {m.value}
              </div>
              <div className="mt-3 text-sm font-semibold text-parchment-50">
                {m.label}
              </div>
              <div className="mt-1 text-xs leading-relaxed text-parchment-200/65">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImpact;
