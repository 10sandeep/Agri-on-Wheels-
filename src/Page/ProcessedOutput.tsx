import React, { useState } from "react";
import {
  X,
  Calendar,
  Tag,
  Download,
  FileText,
  Layers,
  Microscope,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { SpectralBand } from "../Components/UI";
import SIPI from "../assets/Processed Output/sipi.jpg";
import SAVI from "../assets/Processed Output/savi.jpg";
import RVI from "../assets/Processed Output/rvi.jpg";
import PSRI from "../assets/Processed Output/psri.jpg";
import OSAVI from "../assets/Processed Output/osavi.jpg";
import NGRDI from "../assets/Processed Output/ngrdi.jpg";
import NDRE from "../assets/Processed Output/ndre.jpg";
import GNDVI from "../assets/Processed Output/gndvi.jpg";
import NDVI from "../assets/Processed Output/ndvi.jpg";
import EVI from "../assets/Processed Output/evi.jpg";
import DATT from "../assets/Processed Output/datt.jpg";
import BSI from "../assets/Processed Output/bsi.jpg";
import SOIL_HSI from "../assets/Hyperspectral/Soil_Analytics_HSI_Report.pdf";
import CAMPUS_HSI from "../assets/Hyperspectral/University_Campus_CUTM_BBSR_HSI_Report.pdf";

interface UseItem {
  title: string;
  description: string;
}
interface ParamItem {
  name: string;
  description: string;
}
interface SipiDetails {
  definition: string;
  formula: string;
  parameters: ParamItem[];
  mainUses: UseItem[];
}
interface ProcessedImage {
  id: number;
  title: string;
  thumbnail: string;
  fullImage: string;
  description: string;
  processedDate: string;
  category: string;
  cameraType: string;
  algorithm: string;
  sipiDetails: SipiDetails;
}

interface HyperReport {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  pages: string;
  highlights: string[];
  pdfUrl: string;
  fileName: string;
}

const hyperReports: HyperReport[] = [
  {
    id: "soil-hsi",
    title: "Soil Hyperspectral Analysis",
    subtitle: "Corning microHSI 410 SHARK · VNIR soil health profile",
    location: "Mouza Kusumati · Jatani · Khordha, Odisha",
    date: "2026-05-20",
    pages: "31 pages",
    highlights: [
      "150 bands across 421.5–977.4 nm",
      "1.39M soil pixels · 7 property maps",
      "BhuNaksha cadastral records integrated",
    ],
    pdfUrl: SOIL_HSI,
    fileName: "Soil_Analytics_HSI_Report.pdf",
  },
  {
    id: "campus-hsi",
    title: "University Campus VNIR Analysis",
    subtitle: "Airborne hyperspectral · vegetation, soil & built environment",
    location: "CUTM Campus · Bhubaneswar, Odisha",
    date: "2026-04-22",
    pages: "38 pages",
    highlights: [
      "18 analysis techniques · NDVI to SAM",
      "PCA, MNF, Random Forest land-cover",
      "Red-edge & chlorophyll vegetation health",
    ],
    pdfUrl: CAMPUS_HSI,
    fileName: "University_Campus_CUTM_BBSR_HSI_Report.pdf",
  },
];

const ProcessedOutputPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ProcessedImage | null>(null);
  const [selectedCameraType, setSelectedCameraType] = useState<
    "all" | "multispectral" | "hyperspectral"
  >("all");
  const [viewerPdf, setViewerPdf] = useState<HyperReport | null>(null);

  const processedImages: ProcessedImage[] = [
    {
      id: 1,
      title: "SIPI (Structure Insensitive Pigment Index)",
      thumbnail: SIPI,
      fullImage: SIPI,
      description: "Remote sensing analysis using Structure Insensitive Pigment Index to assess vegetation stress and pigment content.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "SIPI Analysis",
      sipiDetails: {
        definition: "The Structure Insensitive Pigment Index (SIPI) is a vegetation index used in remote sensing to assess plant stress and pigment content, particularly carotenoids and chlorophyll. It helps in analyzing the physiological status of vegetation without being significantly affected by the structure of the canopy (like leaf angle or density).",
        formula: "SIPI = (R₈₀₀ - R₄₄₅) / (R₈₀₀ + R₆₈₀)",
        parameters: [
          { name: "R₈₀₀", description: "Reflectance in the near-infrared region (around 800 nm)" },
          { name: "R₄₄₅", description: "Reflectance in the blue region (around 445 nm)" },
          { name: "R₆₈₀", description: "Reflectance in the red region (around 680 nm)" }
        ],
        mainUses: [
          {
            title: "Detecting Plant Stress",
            description: "SIPI is sensitive to changes in the ratio of carotenoids to chlorophyll, which often changes during stress conditions like drought, nutrient deficiency, or disease."
          },
          {
            title: "Monitoring Vegetation Health",
            description: "A high SIPI value generally indicates higher carotenoid levels (stress), while a lower value indicates a healthy chlorophyll-rich plant."
          },
          {
            title: "Crop Monitoring and Precision Agriculture",
            description: "Helps farmers or agronomists make informed decisions about irrigation, fertilization, or pest control by identifying stressed regions in fields."
          },
          {
            title: "Ecosystem and Forest Studies",
            description: "Useful in analyzing large-scale vegetation conditions over time in ecosystems, helping in biodiversity and conservation efforts."
          },
          {
            title: "Structure Insensitivity",
            description: "Unlike some vegetation indices (like NDVI), SIPI minimizes the effect of plant structure, making it more reliable across different plant types and canopy densities."
          }
        ]
      },
      
    },
     {
      id: 2,
      title: "SAVI (Soil-Adjusted Vegetation Index)",
      thumbnail: SAVI,
      fullImage: SAVI,
      description: "The SAVI (Soil-Adjusted Vegetation Index) is a vegetation index used in remote sensing to assess vegetation health while minimizing the influence of soil brightness, especially in areas where vegetation cover is sparse.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "SAVI Analysis",
      sipiDetails: {
        definition: "The SAVI (Soil-Adjusted Vegetation Index) is a vegetation index used in remote sensing to assess vegetation health while minimizing the influence of soil brightness, especially in areas where vegetation cover is sparse.",
        formula: "SAVI = (NIR - Red) × (1+L) / (NIR + Red+ L)",
        parameters: [
          { name: "NIR", description: "Reflectance in the Near-Infrared band" },
          { name: "Red", description: "Reflectance in the Red band" },
          { name: "L", description: "Soil brightness correction factor (usually L = 0.5)" }
        ],
        mainUses: [
          {
            title: "Minimizing Soil Effect",
            description: "SAVI is specifically designed to reduce the impact of soil reflectance, which is significant in areas with sparse or moderate vegetation."
          },
          {
            title: "Vegetation Health Monitoring",
            description: "Like NDVI, SAVI measures plant vigor and photosynthetic activity but is more reliable in semi-arid or patchy vegetation environments."
          },
          {
            title: "Crop Monitoring and Precision Agriculture",
            description: "Helps farmers or agronomists make informed decisions about irrigation, fertilization, or pest control by identifying stressed regions in fields."
          },
          {
            title: "Agricultural Applications",
            description: "Useful in precision agriculture to monitor crop growth in early stages when crops are not fully covering the soil."
          },
          {
            title: " Land Degradation and Desertification Studies",
            description: "Helps detect early signs of land degradation, especially in dry regions where bare soil is common."
          }
        ]
      },
    },
      {
      id: 3,
      title: "RVI (Ratio Vegetation Index) ",
      thumbnail: RVI,
      fullImage: RVI,
      description: "RVI (Ratio Vegetation Index) is a simple remote sensing index that estimates vegetation cover, biomass, and plant health by comparing near-infrared (NIR) to red reflectance.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "RVI Analysis",
      sipiDetails: {
        definition: "The RVI (Ratio Vegetation Index) is one of the simplest vegetation indices used in remote sensing to estimate vegetation cover, biomass, and plant vigor by comparing the reflectance in the near-infrared (NIR) and red bands.",
        formula: "RVI = NIR / Red",
        parameters: [
          { name: "NIR", description: "Reflectance in the near-infrared band" },
          { name: "Red", description: "Reflectance in the red band" },
        
        ],
        mainUses: [
          {
            title: " Assessing Vegetation Density",
            description: "RVI values increase with more vegetation. Healthy green vegetation reflects more NIR and absorbs red, resulting in higher RVI values."
          },
          {
            title: "Estimating Plant Biomass",
            description: "RVI has a positive correlation with above-ground biomass and leaf area index (LAI), making it useful in agricultural and ecological studies."
          },
          {
            title: "Monitoring Crop Growth",
            description: "Used to track crop development stages and detect yield variability across fields."
          },
          {
            title: "Early Remote Sensing Index",
            description: "As one of the earliest vegetation indices, RVI laid the foundation for more complex indices like NDVI, SAVI, and EVI."
          },
        ]
      },
    },
      {
      id: 4,
      title: "PSRI (Plant Senescence Reflectance Index)",
      thumbnail: PSRI,
      fullImage: PSRI,
      description: "PSRI (Plant Senescence Reflectance Index) detects plant aging or stress by measuring changes in pigment composition, especially the ratio of carotenoids to chlorophyll.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "PSRI Analysis",
      sipiDetails: {
        definition: "The PSRI (Plant Senescence Reflectance Index) is a vegetation index used to detect plant senescence—the aging or decline of vegetation—by measuring changes in pigment composition, particularly the ratio of carotenoids to chlorophyll.",
        formula: "PSRI = (Red - Blue) / NRI",
        parameters: [
          { name: "Red", description: "Reflectance in the red band (~680 nm)" },
          { name: "Blue", description: "Reflectance in the blue band (~470 nm)" },
          { name: "NIR", description: "Reflectance in the near-infrared band (~800 nm)" }
        ],
        mainUses: [
          {
            title: "Detecting Plant Senescence",
            description: "PSRI increases as chlorophyll degrades and carotenoid content rises—indicating aging, stress, or leaf yellowing."
          },
          {
            title: "Assessing Vegetation Stress",
            description: "Useful in identifying stress conditions such as drought, nutrient deficiency, or disease."
          },
          {
            title: "Ecosystem Monitoring",
            description: "Applied in seasonal studies of vegetation to understand changes in plant life cycles."
          },
          {
            title: "Monitoring Crop Maturity",
            description: "Helps in determining harvest timing by identifying when crops are entering senescence."
          },
       
        ]
      },
    },
      {
      id: 5,
      title: "OSAVI (Optimized Soil-Adjusted Vegetation Index)",
      thumbnail:OSAVI,
      fullImage: OSAVI,
      description: "OSAVI (Optimized Soil-Adjusted Vegetation Index) measures vegetation health in sparse areas by minimizing soil brightness effects, offering better accuracy than SAVI.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "OSAVI Analysis",
      sipiDetails: {
        definition: "The OSAVI (Optimized Soil-Adjusted Vegetation Index) is a vegetation index used to estimate vegetation cover and health, especially in areas with low or sparse vegetation, by reducing the influence of soil brightness more effectively than SAVI.",
        formula: "OSAVI = (NIR- Red) / (NIR+Red +0.16)",
        parameters: [
          { name: "NIR ", description: " Near-infrared reflectance" },
          { name: "Red", description: "Red reflectance" },
          { name: "0.16", description: "Optimized soil adjustment factor" }
        ],
        mainUses: [
          {
            title: "Monitoring Vegetation in Sparse Areas",
            description: "Designed for areas with low vegetation cover, where soil reflectance can distort measurements."
          },
          {
            title: "Improved Over SAVI",
            description: "Uses a fixed and smaller soil adjustment factor (0.16), making it simpler and more stable than SAVI (which uses a variable L)."
          },
          {
            title: "Agricultural and Environmental Monitoring",
            description: "Used for crop health monitoring, land degradation, and ecosystem assessment."
          },
          {
            title: " Remote Sensing Analysis",
            description: "Helps accurately estimate plant biomass, chlorophyll content, and photosynthetic activity."
          },
          {
            title: "Structure Insensitivity",
            description: "Unlike some vegetation indices (like NDVI), SIPI minimizes the effect of plant structure, making it more reliable across different plant types and canopy densities."
          }
        ]
      },

    },
     {
      id: 6,
      title: "NGRDI (Normalized Green-Red Difference Index)",
      thumbnail: NGRDI,
      fullImage: NGRDI,
      description: "NGRDI (Normalized Green-Red Difference Index) measures vegetation greenness and health using red and green reflectance, ideal for low-cost, RGB-based remote sensing.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "NGRDI Analysis",
      sipiDetails: {
        definition: "The Structure Insensitive Pigment Index (SIPI) is a vegetation index used in remote sensing to assess plant stress and pigment content, particularly carotenoids and chlorophyll. It helps in analyzing the physiological status of vegetation without being significantly affected by the structure of the canopy (like leaf angle or density).",
        formula: "NGRDI = (Green - Red) / (Green + Red)",
        parameters: [
          { name: "Green", description: "Reflectance in the green band" },
          { name: "Red", description: "Reflectance in the red band" }
        ],
        mainUses: [
          {
            title: " Assessing Vegetation Greenness",
            description: "Indicates the presence and vigor of green vegetation based on color reflectance."
          },
          {
            title: "Crop Health Monitoring",
            description: "Helps detect healthy crops vs. stressed or diseased areas, especially in early growth stages."
          },
          {
            title: "Suitable for RGB Cameras",
            description: "Works well with standard digital cameras or drones, since it only requires green and red bands (no NIR needed)."
          },
          {
            title: " Low-Cost Remote Sensing",
            description: "Ideal for low-budget agricultural or ecological monitoring projects."
          },
        ]
      },
      
    },
     {
      id: 7,
      title: "NDRE (Normalized Difference Red Edge Index)",
      thumbnail: NDRE,
      fullImage: NDRE,
      description: "NDRE (Normalized Difference Red Edge Index) measures plant health and chlorophyll content, especially in mature crops, by using NIR and red edge reflectance.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "NDRE Analysis",
      sipiDetails: {
        definition: "The Structure Insensitive Pigment Index (SIPI) is a vegetation index used in remote sensing to assess plant stress and pigment content, particularly carotenoids and chlorophyll. It helps in analyzing the physiological status of vegetation without being significantly affected by the structure of the canopy (like leaf angle or density).",
        formula: "NDRE = (NIR - RedEdge) / (NIR + RedEdge)",
        parameters: [
          { name: "NIR ", description: "Near-infrared reflectance" },
          { name: "RedEdge", description: "Reflectance in the red edge band (around 705–740 nm)" },
        ],
        mainUses: [
          {
            title: "Chlorophyll and Nitrogen Monitoring",
            description: "Sensitive to chlorophyll concentration, making it useful for fertility management and nitrogen tracking in crops."
          },
          {
            title: "Late-Season Crop Monitoring",
            description: "Performs better than NDVI in dense vegetation, where NDVI tends to saturate."
          },
          {
            title: "Precision Agriculture",
            description: "Helps optimize fertilizer use, detect stress, and improve yield forecasting."
          },
          {
            title: " Advanced Crop Health Analysis",
            description: "Used in drone and satellite imagery for in-season crop scouting and management decisions."
          },
        ]
      },
   
    },
     {
      id: 8,
      title: "GNDVI (Green Normalized Difference Vegetation Index)",
      thumbnail: GNDVI,
      fullImage: GNDVI,
      description: "GNDVI measures vegetation health and vigor by using green and near-infrared reflectance, offering better sensitivity to chlorophyll than NDVI.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "GNDVI Analysis",
      sipiDetails: {
        definition: "GNDVI (Green Normalized Difference Vegetation Index) is a vegetation index used to assess plant health, chlorophyll content, and photosynthetic activity, especially effective in dense vegetation.",
        formula: "GNDVI = (NIR - Green) / (NIR + Green)",
        parameters: [
          { name: "NIR", description: "Near-infrared reflectance" },
          { name: "Green", description: " Green band reflectance" },
        ],
        mainUses: [
          {
            title: "Monitoring Crop Health and Stress",
            description: "GNDVI helps identify early signs of crop stress due to factors like drought, disease, or nutrient deficiencies.Healthy crops reflect more near-infrared (NIR) light and less green light, while stressed or damaged plants reflect differently."
          },
          {
            title: "Estimating Chlorophyll and Nitrogen Levels",
            description: "GNDVI is more sensitive to chlorophyll content than NDVI because it uses the green band instead of red.Since chlorophyll is directly linked to nitrogen (an essential nutrient for plant growth), GNDVI can indirectly indicate nitrogen availability in crops."
          },
          {
            title: "Useful for Precision Agriculture",
            description: "Precision agriculture relies on site-specific data to optimize inputs (fertilizer, water, pesticides) and maximize yield."
          },
          {
            title: "Better for Dense Canopies Compared to NDVI",
            description: "NDVI can saturate (lose sensitivity) in areas with high vegetation density, making it less accurate.GNDVI uses the green band, which retains more sensitivity even when the canopy is dense."
          },
        ]
      },
    
    },
     {
      id: 9,
      title: "NDVI (Normalized Difference Vegetation Index)",
      thumbnail: NDVI,
      fullImage: NDVI,
      description: "NDVI (Normalized Difference Vegetation Index) is a widely used remote sensing tool to assess the presence and health of green vegetation by measuring the difference between near-infrared and red light reflectance.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "NDVI Analysis",
      sipiDetails: {
        definition: "The NDVI (Normalized Difference Vegetation Index) is one of the most widely used vegetation indices in remote sensing and precision agriculture. It helps assess whether the target being observed contains live green vegetation or not.",
        formula: "NDVI = (NIR - Red) / ( NIR+ Red)",
        parameters: [
          { name: "NIR", description: "Near-infrared reflectance" },
          { name: "Red", description: "Reflectance in the red band" },
        ],
        mainUses: [
          {
            title: " Assessing Plant Health",
            description: "Healthy vegetation reflects more NIR and less red light.NDVI values close to +1 indicate healthy, dense green vegetation."
          },
          {
            title: " Monitoring Crop Growth",
            description: "Used in agriculture to track crop development and detect stress or disease."
          },
          {
            title: "Land Cover Classification",
            description: "Helps distinguish between vegetation, water bodies, and barren land."
          },
          {
            title: "Remote Sensing Applications",
            description: "Used by satellites and drones for large-scale environmental monitoring."
          },
          {
            title: " Drought and Climate Impact Studies",
            description: "NDVI trends reveal the effects of droughts or climate shifts on vegetation."
          }
        ]
      },
  
    },
     {
      id: 10,
      title: "EVI (Enhanced Vegetation Index)",
      thumbnail: EVI,
      fullImage: EVI,
      description: "The EVI (Enhanced Vegetation Index) is used to monitor vegetation health and canopy density, especially in areas with dense vegetation or high atmospheric distortion.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "EVI Analysis",
      sipiDetails: {
        definition: "EVI (Enhanced Vegetation Index) improves vegetation monitoring in dense or hazy areas by correcting for atmospheric and soil effects, offering more accurate plant health assessments than NDVI.",
        formula: "EVI = G ×  (NIR- Red) / (NIR + C₁ ×Red -  C₂ × Blue + L)",
        parameters: [
          { name: "NIR", description: "Near-infrared reflectance" },
          { name: "Red", description: "Red reflectance" },
          { name: "Blue", description: " Blue reflectance" },
            { name: "G,C₁,C₂,L", description: "Coefficients (commonly G = 2.5, C₁ = 6, C₂ = 7.5, L = 1)" }
        ],
        mainUses: [
          {
            title: "Improves accuracy in dense vegetation areas",
            description: " Unlike NDVI, EVI avoids saturation in lush forests and crop fields."
          },
          {
            title: "Reduces atmospheric and soil background noise",
            description: "Offers more reliable data under hazy or dusty conditions."
          },
          {
            title: "Accurate monitoring of canopy structure and biomass",
            description: " Ideal for forestry, agriculture, and ecosystem studies."
          },
          
        ]
      },
  
    },
     {
      id: 11,
      title: "DATT (Datt Vegetation Index) ",
      thumbnail: DATT,
      fullImage: DATT,
      description: "The DATT (Datt Vegetation Index) is used to assess vegetation health and chlorophyll content by analyzing the reflectance in green and near-infrared (NIR) spectral bands.",
      processedDate: "2025-06-03",
      category: "Vegetation Analysis",
      cameraType: "multispectral",
      algorithm: "DATT Analysis",
      sipiDetails: {
        definition: "DATT (Datt Vegetation Index) estimates plant health by measuring chlorophyll content using green and NIR reflectance, ideal for early stress detection and crop monitoring.",
        formula: "DATT = ( R850 - R710) / (R850 - R680)",
        parameters: [
          { name: "R850", description: "Reflectance at 850 nm (near-infrared)" },
          { name: "R710", description: "Reflectance at 710 nm (red edge)" },
          { name: "R₆₈₀", description: "Reflectance in the red region (around 680 nm)" }
        ],
        mainUses: [
          {
            title: " Chlorophyll Content Estimation",
            description: "DATT is highly sensitive to the amount of chlorophyll in plant leaves.Since chlorophyll is directly related to photosynthesis, its measurement helps assess plant productivity and vigor."
          },
          {
            title: "Early Plant Stress Detection",
            description: "Plants often show changes in chlorophyll content before visible symptoms of stress appear.This early warning allows for timely intervention, improving crop outcomes."
          },
          {
            title: " Crop Health Monitoring in Precision Agriculture",
            description: "Farmers and agronomists use DATT in remote sensing and drone-based monitoring systems to:Evaluate the health status of crops in real-time,Create vegetation maps that highlight areas needing attention."
          },
          {
            title: "Phenological and Growth Stage Tracking",
            description: "DATT can help track plant development stages by reflecting pigment changes over time."
          },
          {
            title: " Vegetation Mapping and Land Use Monitoring",
            description: "In environmental and ecological studies, DATT is used to:Classify vegetation types,Monitor forest health,Detect land degradation or deforestation"
          }
        ]
      },
    },
  ];

  const filteredImages =
    selectedCameraType === "all"
      ? processedImages
      : processedImages.filter((image) => image.cameraType === selectedCameraType);

  const showMultispectral = selectedCameraType === "all" || selectedCameraType === "multispectral";
  const showHyperspectral = selectedCameraType === "all" || selectedCameraType === "hyperspectral";

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });

  const handleDownloadPdf = (report: HyperReport) => {
    const link = document.createElement("a");
    link.href = report.pdfUrl;
    link.download = report.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tabs: { key: "all" | "multispectral" | "hyperspectral"; label: string }[] = [
    { key: "all", label: "All Outputs" },
    { key: "multispectral", label: "Multispectral" },
    { key: "hyperspectral", label: "Hyperspectral" },
  ];

  return (
    <div className="paper-grain min-h-screen bg-parchment-100">
      <section className="bg-pine-900">
        <div className="container-page py-14 sm:py-16">
          <span className="eyebrow text-harvest-300">Proof of Work</span>
          <h1 className="mt-4 font-display text-4xl font-semibold text-parchment-50 sm:text-5xl">
            Processed outputs
          </h1>
          <p className="mt-4 max-w-2xl text-base text-parchment-200/80">
            Remote-sensing analysis from the field — multispectral vegetation
            indices and full hyperspectral soil &amp; land-cover reports.
          </p>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setSelectedCameraType(t.key)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  selectedCameraType === t.key
                    ? "bg-harvest-300 text-pine-900"
                    : "bg-parchment-50/10 text-parchment-200/80 ring-1 ring-parchment-50/15 hover:bg-parchment-50/15"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <SpectralBand />
      </section>

      <div className="container-page py-12 sm:py-16">
        {/* Hyperspectral reports */}
        {showHyperspectral && (
          <section className="mb-16">
            <div className="mb-7 flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-pine-800/[0.06] text-pine-700">
                <Microscope className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-pine-800">
                  Hyperspectral reports
                </h2>
                <p className="text-sm text-pine-900/60">
                  Full VNIR analysis · view in browser or download the PDF
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {hyperReports.map((r) => (
                <article
                  key={r.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-pine-900/[0.08] bg-white shadow-card transition-all duration-300 hover:shadow-lift"
                >
                  <div className="spectral-band h-1 w-full" />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-laterite/10 text-laterite">
                        <FileText className="h-6 w-6" strokeWidth={1.6} />
                      </div>
                      <span className="rounded-full bg-pine-800/[0.06] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-pine-900/60">
                        {r.pages}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-semibold text-pine-800">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-pine-900/65">{r.subtitle}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-pine-900/55">
                      <span className="inline-flex items-center gap-1.5">
                        <Tag className="h-3.5 w-3.5" /> {r.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> {formatDate(r.date)}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2 border-t border-pine-900/[0.06] pt-5">
                      {r.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-pine-900/70">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-spectral-500" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-3 pt-1">
                      <button onClick={() => setViewerPdf(r)} className="btn-primary">
                        <FileText size={16} /> View report
                      </button>
                      <button onClick={() => handleDownloadPdf(r)} className="btn-ghost">
                        <Download size={16} /> Download PDF
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Multispectral indices */}
        {showMultispectral && (
          <section>
            <div className="mb-7 flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-pine-800/[0.06] text-pine-700">
                <Layers className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-pine-800">
                  Multispectral indices
                </h2>
                <p className="text-sm text-pine-900/60">
                  Drone-captured vegetation &amp; soil indices · tap a card for details
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-pine-900/[0.08] bg-white text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-pine-900/5">
                    <img
                      src={image.thumbnail}
                      alt={image.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-pine-950/0 transition-colors duration-300 group-hover:bg-pine-950/25">
                      <span className="translate-y-2 rounded-full bg-parchment-50 px-4 py-2 text-xs font-semibold text-pine-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View analysis
                      </span>
                    </div>
                    <span className="absolute left-3 top-3 rounded-full bg-spectral-600/90 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-white backdrop-blur">
                      {image.cameraType}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-base font-semibold leading-snug text-pine-800">
                      {image.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-pine-900/60">
                      {image.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-pine-900/[0.06] pt-4 text-xs text-pine-900/50">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> {formatDate(image.processedDate)}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-spectral-600">
                        Details <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Multispectral detail modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-pine-950/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="my-6 w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="spectral-band h-1 w-full" />
            <div className="flex items-center justify-between border-b border-pine-900/[0.07] p-6">
              <h3 className="pr-6 font-display text-xl font-semibold text-pine-800">
                {selectedImage.title}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-pine-900/50 hover:bg-pine-900/5 hover:text-pine-800"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid max-h-[78vh] grid-cols-1 gap-8 overflow-y-auto p-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-pine-900/[0.08]">
                  <img src={selectedImage.fullImage} alt={selectedImage.title} className="w-full" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-spectral-500/10 px-3 py-1 text-xs font-medium text-spectral-600">
                    {selectedImage.category}
                  </span>
                  <span className="rounded-full bg-pine-800/[0.06] px-3 py-1 text-xs font-medium text-pine-900/70">
                    {selectedImage.algorithm}
                  </span>
                  <span className="rounded-full bg-pine-800/[0.06] px-3 py-1 text-xs font-medium text-pine-900/70">
                    {formatDate(selectedImage.processedDate)}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="eyebrow text-spectral-500">Definition</h4>
                  <p className="mt-2 text-sm leading-relaxed text-pine-900/75">
                    {selectedImage.sipiDetails.definition}
                  </p>
                </div>

                <div className="rounded-xl bg-pine-50 p-4">
                  <h4 className="eyebrow text-pine-700">Formula</h4>
                  <div className="mt-2 rounded-lg border border-pine-900/[0.08] bg-white px-4 py-3 text-center font-mono text-sm text-pine-800">
                    {selectedImage.sipiDetails.formula}
                  </div>
                </div>

                <div>
                  <h4 className="eyebrow text-spectral-500">Parameters</h4>
                  <div className="mt-3 space-y-2">
                    {selectedImage.sipiDetails.parameters.map((param, idx) => (
                      <div key={idx} className="flex gap-3 rounded-lg bg-parchment-100 p-3">
                        <span className="shrink-0 font-mono text-sm font-semibold text-laterite">
                          {param.name}
                        </span>
                        <span className="text-sm text-pine-900/70">{param.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="eyebrow text-spectral-500">Main uses</h4>
                  <div className="mt-3 space-y-3">
                    {selectedImage.sipiDetails.mainUses.map((use, idx) => (
                      <div key={idx} className="border-l-2 border-spectral-500 pl-4">
                        <p className="text-sm font-semibold text-pine-800">{use.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-pine-900/65">
                          {use.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hyperspectral PDF viewer modal */}
      {viewerPdf && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-pine-950/90 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 border-b border-parchment-50/10 bg-pine-900 px-5 py-3.5">
            <div className="min-w-0">
              <p className="truncate font-display text-base font-semibold text-parchment-50">
                {viewerPdf.title}
              </p>
              <p className="truncate text-xs text-parchment-200/60">{viewerPdf.subtitle}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={viewerPdf.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-parchment-50/20 px-4 py-2 text-xs font-semibold text-parchment-50 transition-colors hover:bg-parchment-50/10"
              >
                <ExternalLink size={14} /> New tab
              </a>
              <button
                onClick={() => handleDownloadPdf(viewerPdf)}
                className="inline-flex items-center gap-1.5 rounded-full bg-harvest-300 px-4 py-2 text-xs font-semibold text-pine-900 transition-colors hover:bg-harvest-200"
              >
                <Download size={14} /> Download
              </button>
              <button
                onClick={() => setViewerPdf(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-parchment-50 hover:bg-parchment-50/10"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <object
            data={`${viewerPdf.pdfUrl}#view=FitH`}
            type="application/pdf"
            className="flex-1 bg-pine-950"
          >
            <iframe
              src={`${viewerPdf.pdfUrl}#view=FitH`}
              title={viewerPdf.title}
              className="h-full w-full"
            />
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center text-parchment-200">
              <FileText className="h-12 w-12 text-parchment-200/50" />
              <p className="text-sm">
                Your browser can’t display the PDF inline.
              </p>
              <button onClick={() => handleDownloadPdf(viewerPdf)} className="btn-primary">
                <Download size={16} /> Download the report
              </button>
            </div>
          </object>
        </div>
      )}
    </div>
  );
};

export default ProcessedOutputPage;
