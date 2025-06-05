import React, { useState } from 'react';
import { X, Eye, Calendar, Tag, Info, Download } from 'lucide-react';
import SIPI from '../assets/Processed Output/sipi.jpg'
import SAVI from '../assets/Processed Output/savi.jpg'
import RVI from '../assets/Processed Output/rvi.jpg'
import PSRI from '../assets/Processed Output/psri.jpg'
import OSAVI from '../assets/Processed Output/osavi.jpg'
import NGRDI from '../assets/Processed Output/ngrdi.jpg'
import NDRE from '../assets/Processed Output/ndre.jpg'
import GNDVI from '../assets/Processed Output/gndvi.jpg'
import NDVI from '../assets/Processed Output/ndvi.jpg'
import EVI from '../assets/Processed Output/evi.jpg'
import DATT from '../assets/Processed Output/datt.jpg'
import BSI from '../assets/Processed Output/bsi.jpg'

const ProcessedOutputPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCameraType, setSelectedCameraType] = useState('all');

  // Sample data - replace with your actual processed images
  const processedImages = [
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

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Filter images based on camera type
  const filteredImages = selectedCameraType === 'all' 
    ? processedImages 
    : processedImages.filter(image => image.cameraType === selectedCameraType);

  const getCameraTypeColor = (type) => {
    switch(type) {
      case 'multispectral': return 'bg-blue-600';
      case 'hyperspectral': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Processed Output Gallery
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            View your AI-enhanced images and detailed processing information
          </p>
          
          {/* Camera Type Filter */}
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedCameraType('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCameraType === 'all'
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Images
            </button>
            <button
              onClick={() => setSelectedCameraType('multispectral')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCameraType === 'multispectral'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              Multispectral Imaging
            </button>
            <button
              onClick={() => setSelectedCameraType('hyperspectral')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCameraType === 'hyperspectral'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              Hyperspectral Imaging
            </button>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
              onClick={() => openModal(image)}
            >
              <div className="relative group">
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-64 object-cover aspect-square"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`${getCameraTypeColor(image.cameraType)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {image.category}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {image.cameraType}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {image.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{image.processedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag size={16} />
                    {/* <span>{image.processingTime}</span> */}
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  All copyrights belong to Saneev Kumar Das.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-5xl w-full my-6 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedImage.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 max-h-[80vh] overflow-y-auto">
              {/* Image */}
              <div className="space-y-4">
                <img
                  src={selectedImage.fullImage}
                  alt={selectedImage.title}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-s text-gray-500 text-center">
                  © All rights reserved. This work is the intellectual property of Saneev Kumar Das. Unauthorized use, reproduction, or distribution is strictly prohibited.
                </p>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Description
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                {/* SIPI Details Section */}
                {selectedImage.sipiDetails && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      SIPI (Structure Insensitive Vegetation Index)
                    </h4>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        {selectedImage.sipiDetails.definition}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Formula</h5>
                      <div className="bg-white p-3 rounded border font-mono text-center text-lg">
                        {selectedImage.sipiDetails.formula}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Parameters</h5>
                      <div className="space-y-2">
                        {selectedImage.sipiDetails.parameters.map((param, index) => (
                          <div key={index} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                            <span className="font-mono font-semibold text-blue-600 min-w-[60px]">
                              {param.name}:
                            </span>
                            <span className="text-gray-700">{param.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Main Uses of SIPI</h5>
                      <div className="space-y-3">
                        {selectedImage.sipiDetails.mainUses.map((use, index) => (
                          <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                            <h6 className="font-semibold text-gray-900 mb-1">{use.title}</h6>
                            <p className="text-gray-600 text-sm leading-relaxed">{use.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessedOutputPage;