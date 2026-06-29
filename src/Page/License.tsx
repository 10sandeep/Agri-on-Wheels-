import React, { useState } from "react";
import {
  FileText,
  Download,
  Search,
  CheckCircle,
  ChevronLeft,
  Award,
  ReceiptText,
} from "lucide-react";
import { SpectralBand } from "../Components/UI";
import TAX_INVOICE from "../assets/TAX_INVOICE.pdf";
import TAX_INVOICE2 from "../assets/TAX-INVOICE 2.pdf";
import DOCUMENT_CERTIFICATE from "../assets/INSTALLATION CERTIFICATE.pdf";

interface DocItem {
  id: string;
  type: "invoice" | "certificate";
  number: string;
  customerName: string;
  issueDate: string;
  amount?: string;
  serviceDetails?: string;
  installationDate?: string;
  equipmentDetails?: string;
  warrantyPeriod?: string;
  company?: string;
  location?: string;
  technician?: string;
  pdfUrl?: string;
}

const documents: DocItem[] = [
  {
    id: "inv-2024-002",
    type: "invoice",
    number: "TSSPL/520/24-25",
    customerName: "CENTURION UNIVERSITY OF TECHNOLOGY & MANAGEMENT",
    issueDate: "2025-03-25",
    amount: "₹8,14,200.00",
    serviceDetails: "Envi Single User & Envi Crop Science Module",
    pdfUrl: TAX_INVOICE,
  },
  {
    id: "cert-2024-002",
    type: "certificate",
    number: "CUTM/Central Store/PO/2024-25/0215",
    customerName: "CENTURION UNIVERSITY OF TECHNOLOGY & MANAGEMENT",
    issueDate: "2025-03-11",
    installationDate: "2025-03-27",
    equipmentDetails: "ENVI Maintenance and ENVI Crop Science (CS) Maintenance",
    warrantyPeriod: "24 months",
    company: "ESRI India Technologies Limited",
    location:
      "Centurion University Of Technology and Management, Village Alluri Nagar, PO-R Sitapur, Gajapati, Odisha, 761211",
    technician: "Rajesh Kumar",
    pdfUrl: DOCUMENT_CERTIFICATE,
  },
  {
    id: "inv-2024-003",
    type: "invoice",
    number: "HSN Number: 8523",
    customerName: "CENTURION UNIVERSITY OF TECHNOLOGY & MANAGEMENT",
    issueDate: "2025-03-26",
    amount: "₹3,48,100.00",
    serviceDetails: "Agisoft Metashape Professional, Node-Locked license, Single",
    pdfUrl: TAX_INVOICE2,
  },
];

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const License: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "invoice" | "certificate">("all");
  const [selected, setSelected] = useState<DocItem | null>(null);
  const [query, setQuery] = useState("");

  const filtered = documents.filter((d) => {
    const matchesTab = activeTab === "all" || d.type === activeTab;
    const matchesSearch =
      d.customerName.toLowerCase().includes(query.toLowerCase()) ||
      d.number.toLowerCase().includes(query.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleDownload = (doc: DocItem) => {
    if (!doc.pdfUrl) return;
    const link = document.createElement("a");
    link.href = doc.pdfUrl;
    link.download = `${doc.type === "invoice" ? "Invoice" : "Certificate"}-${doc.number.replace(
      /\//g,
      "-"
    )}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tabs: { key: "all" | "invoice" | "certificate"; label: string }[] = [
    { key: "all", label: "All Documents" },
    { key: "invoice", label: "Tax Invoices" },
    { key: "certificate", label: "Certificates" },
  ];

  return (
    <div className="paper-grain min-h-screen bg-parchment-100">
      <section className="bg-pine-900">
        <div className="container-page py-14 sm:py-16">
          <span className="eyebrow text-harvest-300">License &amp; Procurement</span>
          <h1 className="mt-4 font-display text-4xl font-semibold text-parchment-50 sm:text-5xl">
            Document portal
          </h1>
          <p className="mt-4 max-w-2xl text-base text-parchment-200/80">
            Verified tax invoices and installation certificates for the
            software and equipment procured under this project.
          </p>
        </div>
        <SpectralBand />
      </section>

      <section className="container-page py-12 sm:py-16">
        {selected ? (
          <div className="mx-auto max-w-3xl">
            <button
              onClick={() => setSelected(null)}
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-spectral-600 hover:text-spectral-500 focus-ring rounded"
            >
              <ChevronLeft size={16} /> Back to all documents
            </button>

            <div className="card-surface overflow-hidden">
              <div className="spectral-band h-1 w-full" />
              <div className="p-7 sm:p-9">
                <div className="flex flex-col gap-4 border-b border-pine-900/[0.07] pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        selected.type === "invoice"
                          ? "bg-spectral-500/12 text-spectral-600"
                          : "bg-harvest-100 text-harvest-800"
                      }`}
                    >
                      {selected.type === "invoice" ? "Tax Invoice" : "Installation Certificate"}
                    </span>
                    <h2 className="mt-3 break-all font-display text-2xl font-semibold text-pine-800">
                      {selected.number}
                    </h2>
                  </div>
                  <button onClick={() => handleDownload(selected)} className="btn-primary shrink-0">
                    <Download size={16} /> Download PDF
                  </button>
                </div>

                <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {(selected.type === "invoice"
                    ? [
                        ["Issue Date", formatDate(selected.issueDate)],
                        ["Amount", selected.amount],
                        ["Service", selected.serviceDetails],
                        ["Customer", selected.customerName],
                      ]
                    : [
                        ["Issue Date", formatDate(selected.issueDate)],
                        ["Installation Date", selected.installationDate && formatDate(selected.installationDate)],
                        ["Equipment", selected.equipmentDetails],
                        ["Warranty", selected.warrantyPeriod],
                        ["Vendor", selected.company],
                        ["Location", selected.location],
                      ]
                  ).map(([label, value]) => (
                    <div key={label as string} className="border-b border-pine-900/[0.06] pb-3">
                      <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-pine-900/50">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-pine-900/85">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex items-center gap-2 rounded-xl bg-pine-50 px-4 py-3">
                  <CheckCircle size={16} className="text-spectral-600" />
                  <span className="text-sm font-medium text-pine-800">
                    {selected.type === "invoice" ? "Payment verified · Paid" : "Installation verified & tested"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {tabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      activeTab === t.key
                        ? "bg-pine-800 text-parchment-50"
                        : "bg-white text-pine-900/70 ring-1 ring-pine-900/10 hover:ring-pine-900/25"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3.5 top-3 text-pine-900/40" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search documents…"
                  className="w-full rounded-full border border-pine-900/12 bg-white py-2.5 pl-10 pr-4 text-sm text-pine-900 placeholder:text-pine-900/40 focus:border-spectral-500 focus-ring"
                />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.length > 0 ? (
                filtered.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setSelected(doc)}
                    className="group flex flex-col rounded-2xl border border-pine-900/[0.08] bg-white p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                          doc.type === "invoice"
                            ? "bg-spectral-500/10 text-spectral-600"
                            : "bg-harvest-100 text-harvest-700"
                        }`}
                      >
                        {doc.type === "invoice" ? <ReceiptText size={18} /> : <Award size={18} />}
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide ${
                          doc.type === "invoice"
                            ? "bg-spectral-500/10 text-spectral-600"
                            : "bg-harvest-100 text-harvest-800"
                        }`}
                      >
                        {doc.type === "invoice" ? "Invoice" : "Certificate"}
                      </span>
                    </div>
                    <h3 className="break-all font-display text-base font-semibold text-pine-800">
                      {doc.number}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-pine-900/55">{doc.customerName}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-pine-900/[0.06] pt-4">
                      <span className="font-mono text-[0.7rem] text-pine-900/50">
                        {formatDate(doc.issueDate)}
                      </span>
                      {doc.amount && (
                        <span className="font-display text-sm font-semibold text-pine-800">
                          {doc.amount}
                        </span>
                      )}
                    </div>
                  </button>
                ))
              ) : (
                <div className="col-span-full rounded-2xl border border-dashed border-pine-900/15 bg-white/60 py-16 text-center">
                  <FileText size={36} className="mx-auto text-pine-900/25" />
                  <p className="mt-3 text-sm font-medium text-pine-900/60">No documents found</p>
                  <p className="mt-1 text-xs text-pine-900/40">Try a different search or filter</p>
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default License;
