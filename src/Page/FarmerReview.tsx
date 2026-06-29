import { useState, useEffect } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Download,
  User,
  MapPin,
  Briefcase,
  Images,
  ExternalLink,
  Award,
} from "lucide-react";
import { SpectralBand } from "../Components/UI";
import { farmerData, Farmer } from "../data/Mockfarmer";

const DRIVE_FOLDER_ID = "19KalviIUKlR2C4872BufiOXHLG9aCZv6";
const DRIVE_EMBED_URL = `https://drive.google.com/embeddedfolderview?id=${DRIVE_FOLDER_ID}#grid`;
const DRIVE_OPEN_URL = `https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}`;

const flattenFarmerData = (nestedData: typeof farmerData): Farmer[] => {
  const out: Farmer[] = [];
  Object.keys(nestedData).forEach((block) => {
    const blockData = (nestedData as any)[block];
    Object.keys(blockData).forEach((gp) => {
      blockData[gp].forEach((farmer: Farmer) => out.push(farmer));
    });
  });
  return out;
};

const formatDate = (dateStr: string): string => {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
};

export default function FarmerReview() {
  const allFarmers = flattenFarmerData(farmerData);

  const [farmers] = useState<Farmer[]>(allFarmers);
  const [filteredFarmers, setFilteredFarmers] = useState<Farmer[]>(allFarmers);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeBlock, setActiveBlock] = useState<string>("all");

  const farmersPerPage = 9;
  const totalPages = Math.max(1, Math.ceil(filteredFarmers.length / farmersPerPage));
  const blocks = ["all", ...Array.from(new Set(farmers.map((f) => f.block))).filter((b) => b !== "ARVR")];

  useEffect(() => {
    const results = farmers.filter((farmer) => {
      const matchesBlock = activeBlock === "all" || farmer.block === activeBlock;
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        farmer.farmerName.toLowerCase().includes(q) ||
        farmer.village.toLowerCase().includes(q) ||
        farmer.gramPanchayat.toLowerCase().includes(q);
      return matchesBlock && matchesSearch;
    });
    setFilteredFarmers(results);
    setCurrentPage(1);
  }, [searchTerm, farmers, activeBlock]);

  const indexOfLast = currentPage * farmersPerPage;
  const currentFarmers = filteredFarmers.slice(indexOfLast - farmersPerPage, indexOfLast);

  const handlePageChange = (p: number) => {
    if (p > 0 && p <= totalPages) setCurrentPage(p);
  };

  const handleSelectFarmer = (farmer: Farmer) => {
    setLoading(true);
    setSelectedFarmer(farmer);
    setTimeout(() => setLoading(false), 500);
  };

  const handleDownload = (farmer: Farmer) => {
    if (!farmer.pdfUrl) return;
    if (farmer.pdfUrl.startsWith("https://")) {
      window.open(farmer.pdfUrl, "_blank", "noopener,noreferrer");
      return;
    }
    const link = document.createElement("a");
    link.href = farmer.pdfUrl;
    link.download = `${farmer.farmerName}-certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="paper-grain min-h-screen bg-parchment-100">
      <section className="bg-pine-900">
        <div className="container-page py-14 sm:py-16">
          <span className="eyebrow text-harvest-300">Proof of Work</span>
          <h1 className="mt-4 font-display text-4xl font-semibold text-parchment-50 sm:text-5xl">
            Farmers trained
          </h1>
          <p className="mt-4 max-w-2xl text-base text-parchment-200/80">
            Registered participants across Gosani and Gumma blocks, each with a
            training certificate — alongside the full photo gallery from the
            training sessions.
          </p>
        </div>
        <SpectralBand />
      </section>

      <div className="container-page py-12 sm:py-16">
        {/* Training gallery (Google Drive) */}
        <section className="mb-14">
          <div className="overflow-hidden rounded-2xl border border-pine-900/[0.08] bg-white shadow-card">
            <div className="spectral-band h-1 w-full" />
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-spectral-500/10 text-spectral-600">
                  <Images className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-pine-800">
                    Training photo gallery
                  </h2>
                  <p className="mt-1 text-sm text-pine-900/60">
                    Photographs from the on-ground farmer training sessions,
                    hosted on Google Drive.
                  </p>
                </div>
              </div>
              <a
                href={DRIVE_OPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
              >
                <ExternalLink size={16} /> Open in Drive
              </a>
            </div>
            <div className="border-t border-pine-900/[0.06] bg-parchment-50 p-3 sm:p-4">
              <iframe
                src={DRIVE_EMBED_URL}
                title="Farmer training photo gallery"
                className="h-[26rem] w-full rounded-xl border border-pine-900/10 bg-white"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Farmer directory */}
        {selectedFarmer ? (
          <div className="mx-auto max-w-3xl">
            <button
              onClick={() => setSelectedFarmer(null)}
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-spectral-600 hover:text-spectral-500 focus-ring rounded"
            >
              <ChevronLeft size={16} /> Back to all farmers
            </button>

            <div className="card-surface overflow-hidden">
              <div className="spectral-band h-1 w-full" />
              <div className="p-7 sm:p-9">
                <div className="flex flex-col gap-4 border-b border-pine-900/[0.07] pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pine-800 font-display text-lg font-semibold text-harvest-300">
                      {selectedFarmer.farmerName.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-pine-800">
                        {selectedFarmer.farmerName}
                      </h2>
                      <p className="font-mono text-xs text-pine-900/55">
                        {selectedFarmer.documentNumber}
                      </p>
                    </div>
                  </div>
                  <button onClick={() => handleDownload(selectedFarmer)} className="btn-primary shrink-0">
                    <Download size={16} /> Certificate
                  </button>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="space-y-2.5">
                    <h3 className="eyebrow text-spectral-500">Participant</h3>
                    {[
                      ["Experience", selectedFarmer.experience],
                      ["Certificate Issued", selectedFarmer.issueDate ? formatDate(selectedFarmer.issueDate) : "—"],
                      ["Training Status", "Completed"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between border-b border-pine-900/[0.06] pb-2 text-sm">
                        <span className="text-pine-900/55">{label}</span>
                        <span className="font-medium text-pine-900/85">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="eyebrow text-spectral-500">Location</h3>
                    {[
                      ["Block", selectedFarmer.block],
                      ["Gram Panchayat", selectedFarmer.gramPanchayat],
                      ["Village", selectedFarmer.village],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between border-b border-pine-900/[0.06] pb-2 text-sm">
                        <span className="text-pine-900/55">{label}</span>
                        <span className="font-medium text-pine-900/85">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-xl bg-pine-50 px-4 py-3">
                  <CheckCircle size={16} className="text-spectral-600" />
                  <span className="text-sm font-medium text-pine-800">
                    Active participant in the Agri on Wheels programme
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-7 flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-pine-800/[0.06] text-pine-700">
                <Award className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-pine-800">
                  Farmer directory
                </h2>
                <p className="text-sm text-pine-900/60">
                  {farmers.length} registered farmers · tap a card for the certificate
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {blocks.map((block) => (
                  <button
                    key={block}
                    onClick={() => setActiveBlock(block)}
                    className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      activeBlock === block
                        ? "bg-pine-800 text-parchment-50"
                        : "bg-white text-pine-900/70 ring-1 ring-pine-900/10 hover:ring-pine-900/25"
                    }`}
                  >
                    {block === "all" ? "All Blocks" : block}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3.5 top-3 text-pine-900/40" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search name, village or GP…"
                  className="w-full rounded-full border border-pine-900/12 bg-white py-2.5 pl-10 pr-4 text-sm text-pine-900 placeholder:text-pine-900/40 focus:border-spectral-500 focus-ring"
                />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentFarmers.length > 0 ? (
                currentFarmers.map((farmer) => (
                  <button
                    key={farmer.id}
                    onClick={() => handleSelectFarmer(farmer)}
                    className="group flex flex-col rounded-2xl border border-pine-900/[0.08] bg-white p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pine-800/[0.06] font-display text-sm font-semibold text-pine-700">
                        {farmer.farmerName.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate font-display text-base font-semibold text-pine-800">
                          {farmer.farmerName}
                        </h3>
                        <p className="flex items-center gap-1 text-xs text-pine-900/55">
                          <MapPin className="h-3 w-3" /> {farmer.village}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-2 border-t border-pine-900/[0.06] pt-4 text-xs">
                      <div>
                        <p className="text-pine-900/45">Block</p>
                        <p className="font-medium text-pine-900/80">{farmer.block}</p>
                      </div>
                      <div>
                        <p className="text-pine-900/45">Gram Panchayat</p>
                        <p className="font-medium text-pine-900/80">{farmer.gramPanchayat}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-parchment-100 px-2.5 py-1 text-xs text-pine-900/65">
                        <Briefcase className="h-3 w-3" /> {farmer.experience}
                      </span>
                      <span className="rounded-full bg-spectral-500/10 px-2.5 py-1 text-xs font-semibold text-spectral-600">
                        Trained
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="col-span-full rounded-2xl border border-dashed border-pine-900/15 bg-white/60 py-16 text-center">
                  <User size={36} className="mx-auto text-pine-900/25" />
                  <p className="mt-3 text-sm font-medium text-pine-900/60">No farmers found</p>
                  <p className="mt-1 text-xs text-pine-900/40">Try a different search or filter</p>
                </div>
              )}
            </div>

            {filteredFarmers.length > farmersPerPage && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-pine-900/10 transition-colors hover:ring-pine-900/25 disabled:opacity-40 disabled:hover:ring-pine-900/10"
                >
                  <ChevronLeft size={18} className="text-pine-800" />
                </button>
                <span className="text-sm text-pine-900/70">
                  Page <span className="font-semibold text-pine-800">{currentPage}</span> of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-pine-900/10 transition-colors hover:ring-pine-900/25 disabled:opacity-40 disabled:hover:ring-pine-900/10"
                >
                  <ChevronRight size={18} className="text-pine-800" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {loading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-pine-950/40 backdrop-blur-sm">
          <div className="rounded-2xl bg-white p-6 shadow-lift">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-pine-900/10 border-t-spectral-500" />
            <p className="mt-4 text-sm text-pine-900/70">Loading certificate…</p>
          </div>
        </div>
      )}
    </div>
  );
}
