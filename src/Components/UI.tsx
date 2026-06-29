import React from "react";

/**
 * The VNIR spectral band — the signature motif of this site.
 * It echoes the 421–977 nm wavelength range that underpins the
 * project's hyperspectral remote-sensing work.
 */
export const SpectralBand: React.FC<{ className?: string }> = ({
  className = "",
}) => <div className={`spectral-band h-[3px] w-full ${className}`} aria-hidden />;

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignment} gap-4`}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span
            className={`eyebrow ${light ? "text-harvest-300" : "text-spectral-500"}`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`max-w-3xl text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-parchment-50" : "text-pine-800"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            light ? "text-parchment-200/85" : "text-pine-900/70"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
};
