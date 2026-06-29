import React from "react";
import { Truck, RadioTower, Users, Laptop } from "lucide-react";
import { SectionHeading } from "./UI";
import OUTREACH from "../assets/Proof of work/image1.jpg";

const outreach = [
  {
    icon: Truck,
    title: "Mobile Training Units",
    description: "Equipped vans bring tools and demonstrations directly to villages.",
  },
  {
    icon: RadioTower,
    title: "Real-Time Connectivity",
    description: "Live expert consultations and updates from the field as work happens.",
  },
  {
    icon: Users,
    title: "On-Ground Mentorship",
    description: "Agronomists and trainers walk the plots alongside the farmers.",
  },
  {
    icon: Laptop,
    title: "Digital Resources",
    description: "Course material and farming references that stay with the community.",
  },
];

const MobileOutreachUnit: React.FC = () => {
  return (
    <section className="bg-parchment-50 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Reaching remote farms"
              title="The outreach unit on the road"
              intro="Where infrastructure is thin, the programme itself travels — bringing education, technology and real-time support to farmers who would otherwise be left out."
            />
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src={OUTREACH}
                alt="Field training session in a rural setting"
                className="h-64 w-full object-cover sm:h-72"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {outreach.map((o, i) => {
              const Icon = o.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-pine-900/[0.08] bg-white p-7 shadow-card transition-all duration-300 hover:border-spectral-500/30 hover:shadow-lift"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-spectral-500/10 text-spectral-600">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-pine-800">
                    {o.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-pine-900/65">
                    {o.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileOutreachUnit;
