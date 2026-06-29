import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "./UI";

interface Person {
  role: string;
  name: string;
  title: string;
  affiliation: string;
  location: string;
  email: string;
  phone?: string;
}

const people: Person[] = [
  {
    role: "Principal Investigator",
    name: "Dr. Saurav Burman",
    title: "Associate Professor, MSSoA",
    affiliation: "Centurion University of Technology and Management",
    location: "Parlakhemundi, Odisha",
    email: "saurav.burman@cutm.ac.in",
  },
  {
    role: "Project Manager",
    name: "Saneev Kumar Das",
    title: "Assistant Professor, Department of CSE",
    affiliation: "Centurion University of Technology and Management",
    location: "Bhubaneswar, Odisha",
    email: "saneev.das@cutm.ac.in",
    phone: "+91 79780 29866",
  },
];

const initials = (name: string) =>
  name
    .replace(/^Dr\.?\s+/i, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

const Leadership: React.FC = () => {
  return (
    <section className="paper-grain bg-parchment-100 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="The people behind it"
          title="Project leadership"
          intro="The initiative is directed by faculty at Centurion University, bridging agricultural science and computing to keep the work grounded and accountable."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {people.map((p) => (
            <article
              key={p.email}
              className="group relative overflow-hidden rounded-2xl border border-pine-900/[0.08] bg-white shadow-card transition-all duration-300 hover:shadow-lift"
            >
              <div className="spectral-band h-1 w-full" />
              <div className="p-7 sm:p-8">
                <span className="eyebrow text-spectral-500">{p.role}</span>
                <div className="mt-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pine-800 font-display text-lg font-semibold text-harvest-300">
                    {initials(p.name)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-pine-800">
                      {p.name}
                    </h3>
                    <p className="text-sm text-pine-900/70">{p.title}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 border-t border-pine-900/[0.07] pt-6 text-sm">
                  <p className="flex items-start gap-3 text-pine-900/70">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-spectral-600" />
                    <span>
                      {p.affiliation}
                      <br />
                      {p.location}
                    </span>
                  </p>
                  <a
                    href={`mailto:${p.email}`}
                    className="flex items-center gap-3 font-medium text-pine-800 transition-colors hover:text-spectral-600 focus-ring rounded"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-spectral-600" />
                    {p.email}
                  </a>
                  {p.phone && (
                    <a
                      href={`tel:${p.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 font-medium text-pine-800 transition-colors hover:text-spectral-600 focus-ring rounded"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-spectral-600" />
                      {p.phone}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
