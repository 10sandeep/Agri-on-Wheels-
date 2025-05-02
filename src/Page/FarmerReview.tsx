import { useState, useEffect } from 'react';
import { Search, FileText, ChevronLeft, ChevronRight, Calendar, CheckCircle, Download, User, MapPin, Briefcase } from 'lucide-react';
import { farmerData, Farmer } from '../data/Mockfarmer';

// Farmer interface
// interface Farmer {
//   id: string;
//   farmerName: string;
//   block: string;
//   gramPanchayat: string;
//   village: string;
//   experience: string;
//   issueDate: string;
//   documentNumber: string;
//   pdfUrl: string;
// }

// Function to flatten the nested farmer data structure
const flattenFarmerData = (nestedData) => {
  const flattenedArray: Farmer[] = [];
  
  // Iterate through blocks
  Object.keys(nestedData).forEach(block => {
    // Iterate through gram panchayats
    Object.keys(nestedData[block]).forEach(gramPanchayat => {
      // Add all farmers from this gram panchayat to our array
      nestedData[block][gramPanchayat].forEach(farmer => {
        flattenedArray.push(farmer);
      });
    });
  });
  
  return flattenedArray;
};

export default function FarmerReview() {
  // Import nested farmer data structure from your mock data
//   const farmerData = {
//     // PARALAKHEMUNDI BLOCK
//     "Paralakhemundi": {
//       // Jiranga GP
//       "Jiranga": [
//         {
//           id: "farmer-001",
//           farmerName: "Rajesh Pradhan",
//           block: "Paralakhemundi",
//           gramPanchayat: "Jiranga",
//           village: "Jiranga",
//           experience: "5-10 years",
//           issueDate: "2024-03-15",
//           documentNumber: "ODI-GAJ-2024-10001",
//           pdfUrl: "/farmers/Paralakhemundi/Jiranga/farmer-001-Rajesh_Pradhan.pdf"
//         },
//         {
//           id: "farmer-002",
//           farmerName: "Suresh Behera",
//           block: "Paralakhemundi",
//           gramPanchayat: "Jiranga",
//           village: "Karadasing",
//           experience: "3-5 years",
//           issueDate: "2024-04-22",
//           documentNumber: "ODI-GAJ-2024-10002",
//           pdfUrl: "/farmers/Paralakhemundi/Jiranga/farmer-002-Suresh_Behera.pdf"
//         }
//       ],
//       // Narayanpur GP
//       "Narayanpur": [
//         {
//           id: "farmer-003",
//           farmerName: "Bhabani Mahapatra",
//           block: "Paralakhemundi",
//           gramPanchayat: "Narayanpur",
//           village: "Narayanpur",
//           experience: "10+ years",
//           issueDate: "2024-01-10",
//           documentNumber: "ODI-GAJ-2024-10003",
//           pdfUrl: "/farmers/Paralakhemundi/Narayanpur/farmer-003-Bhabani_Mahapatra.pdf"
//         },
//         {
//           id: "farmer-004",
//           farmerName: "Devraj Jena",
//           block: "Paralakhemundi",
//           gramPanchayat: "Narayanpur",
//           village: "Chikatiguda",
//           experience: "1-3 years",
//           issueDate: "2024-02-18",
//           documentNumber: "ODI-GAJ-2024-10004",
//           pdfUrl: "/farmers/Paralakhemundi/Narayanpur/farmer-004-Devraj_Jena.pdf"
//         }
//       ],
//       "Kashinagar": [
//         {
//           id: "farmer-005",
//           farmerName: "Manoj Sahoo",
//           block: "Paralakhemundi",
//           gramPanchayat: "Kashinagar",
//           village: "Kashinagar",
//           experience: "5-10 years",
//           issueDate: "2024-05-07",
//           documentNumber: "ODI-GAJ-2024-10005",
//           pdfUrl: "/farmers/Paralakhemundi/Kashinagar/farmer-005-Manoj_Sahoo.pdf"
//         },
//         {
//           id: "farmer-006",
//           farmerName: "Ramesh Patra",
//           block: "Paralakhemundi",
//           gramPanchayat: "Kashinagar",
//           village: "Gurandi",
//           experience: "3-5 years",
//           issueDate: "2024-04-12",
//           documentNumber: "ODI-GAJ-2024-10006",
//           pdfUrl: "/farmers/Paralakhemundi/Kashinagar/farmer-006-Ramesh_Patra.pdf"
//         }
//       ],
//       "Parabadi": [
//         {
//           id: "farmer-007",
//           farmerName: "Prakash Mohanty",
//           block: "Paralakhemundi",
//           gramPanchayat: "Parabadi",
//           village: "Parabadi",
//           experience: "10+ years",
//           issueDate: "2024-06-20",
//           documentNumber: "ODI-GAJ-2024-10007",
//           pdfUrl: "/farmers/Paralakhemundi/Parabadi/farmer-007-Prakash_Mohanty.pdf"
//         },
//         {
//           id: "farmer-008",
//           farmerName: "Deepak Majhi",
//           block: "Paralakhemundi",
//           gramPanchayat: "Parabadi",
//           village: "Nalaghat",
//           experience: "1-3 years",
//           issueDate: "2024-03-05",
//           documentNumber: "ODI-GAJ-2024-10008",
//           pdfUrl: "/farmers/Paralakhemundi/Parabadi/farmer-008-Deepak_Majhi.pdf"
//         }
//       ],
//       "Gurandi": [
//         {
//           id: "farmer-009",
//           farmerName: "Narayan Nayak",
//           block: "Paralakhemundi",
//           gramPanchayat: "Gurandi",
//           village: "Gurandi",
//           experience: "5-10 years",
//           issueDate: "2024-02-28",
//           documentNumber: "ODI-GAJ-2024-10009",
//           pdfUrl: "/farmers/Paralakhemundi/Gurandi/farmer-009-Narayan_Nayak.pdf"
//         },
//         {
//           id: "farmer-010",
//           farmerName: "Binod Sabar",
//           block: "Paralakhemundi",
//           gramPanchayat: "Gurandi",
//           village: "Badagam",
//           experience: "3-5 years",
//           issueDate: "2024-01-15",
//           documentNumber: "ODI-GAJ-2024-10010",
//           pdfUrl: "/farmers/Paralakhemundi/Gurandi/farmer-010-Binod_Sabar.pdf"
//         }
//       ]
//     },
//     "Gumma": {
//       "Alluri": [
//         {
//           id: "farmer-011",
//           farmerName: "Jagdish Panigrahi",
//           block: "Gumma",
//           gramPanchayat: "Alluri",
//           village: "Alluri",
//           experience: "10+ years",
//           issueDate: "2024-03-18",
//           documentNumber: "ODI-GAJ-2024-10011",
//           pdfUrl: "/farmers/Gumma/Alluri/farmer-011-Jagdish_Panigrahi.pdf"
//         },
//         {
//           id: "farmer-012",
//           farmerName: "Vinod Behera",
//           block: "Gumma",
//           gramPanchayat: "Alluri",
//           village: "Kainpur",
//           experience: "1-3 years",
//           issueDate: "2024-05-10",
//           documentNumber: "ODI-GAJ-2024-10012",
//           pdfUrl: "/farmers/Gumma/Alluri/farmer-012-Vinod_Behera.pdf"
//         }
//       ],
//       "Chandiput": [
//         {
//           id: "farmer-013",
//           farmerName: "Pramod Swain",
//           block: "Gumma",
//           gramPanchayat: "Chandiput",
//           village: "Chandiput",
//           experience: "5-10 years",
//           issueDate: "2024-04-25",
//           documentNumber: "ODI-GAJ-2024-10013",
//           pdfUrl: "/farmers/Gumma/Chandiput/farmer-013-Pramod_Swain.pdf"
//         },
//         {
//           id: "farmer-014",
//           farmerName: "Chittaranjan Sahu",
//           block: "Gumma",
//           gramPanchayat: "Chandiput",
//           village: "Hadubhangi",
//           experience: "3-5 years",
//           issueDate: "2024-02-19",
//           documentNumber: "ODI-GAJ-2024-10014",
//           pdfUrl: "/farmers/Gumma/Chandiput/farmer-014-Chittaranjan_Sahu.pdf"
//         }
//       ]
//     },
//     "Mohana": {
//       "Laxmipur": [
//         {
//           id: "farmer-021",
//           farmerName: "Santosh Sahoo",
//           block: "Mohana",
//           gramPanchayat: "Laxmipur",
//           village: "Laxmipur",
//           experience: "5-10 years",
//           issueDate: "2024-03-12",
//           documentNumber: "ODI-GAJ-2024-10021",
//           pdfUrl: "/farmers/Mohana/Laxmipur/farmer-021-Santosh_Sahoo.pdf"
//         },
//         {
//           id: "farmer-022",
//           farmerName: "Hitesh Jena",
//           block: "Mohana",
//           gramPanchayat: "Laxmipur",
//           village: "Haripur",
//           experience: "3-5 years",
//           issueDate: "2024-06-18",
//           documentNumber: "ODI-GAJ-2024-10022",
//           pdfUrl: "/farmers/Mohana/Laxmipur/farmer-022-Hitesh_Jena.pdf"
//         }
//       ]
//     }
//   };

  // Flatten the nested data structure to an array of farmers
  const allFarmers = flattenFarmerData(farmerData);
  
  const [farmers] = useState<Farmer[]>(allFarmers);
  const [filteredFarmers, setFilteredFarmers] = useState<Farmer[]>(allFarmers);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeBlock, setActiveBlock] = useState<string>('all');
  
  const farmersPerPage = 10;
  const totalPages = Math.ceil(filteredFarmers.length / farmersPerPage);
  
  // Get unique blocks for filter options
  const blocks = ['all', ...Array.from(new Set(farmers.map(farmer => farmer.block)))];
  
  useEffect(() => {
    const results = farmers.filter(farmer => {
      const matchesBlock = activeBlock === 'all' || farmer.block === activeBlock;
      const matchesSearch = 
        farmer.farmerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        farmer.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
        farmer.gramPanchayat.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesBlock && matchesSearch;
    });
    setFilteredFarmers(results);
    setCurrentPage(1);
  }, [searchTerm, farmers, activeBlock]);
  
  const indexOfLastFarmer = currentPage * farmersPerPage;
  const indexOfFirstFarmer = indexOfLastFarmer - farmersPerPage;
  const currentFarmers = filteredFarmers.slice(indexOfFirstFarmer, indexOfLastFarmer);
  
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  
  const handleSelectFarmer = (farmer) => {
    setLoading(true);
    setSelectedFarmer(farmer);
    // Simulate loading
    setTimeout(() => setLoading(false), 800);
  };
  
  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDownload = (farmer: Farmer) => {
    if (farmer.pdfUrl) {
      alert(`Downloading Farmer Information for ${farmer.farmerName}`);
      // In a real app, this would trigger a download
      console.log(`Download initiated for ${farmer.pdfUrl}`);
    }
  };

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      <div className="bg-green-700 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Agri on Wheels - Farmer Directory</h1>
        <p className="text-green-100">Registered farmers information portal</p>
      </div>
      
      {selectedFarmer ? (
        <div className="p-4 md:p-6 mx-auto w-full max-w-4xl bg-white rounded-lg shadow-md mt-4">
          <button 
            onClick={() => setSelectedFarmer(null)}
            className="flex items-center text-green-700 font-medium mb-4 hover:underline"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to all farmers
          </button>

          <div className="border-b border-gray-200 pb-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold text-gray-800">{selectedFarmer.farmerName}</h1>
                <div className="text-gray-500 text-sm mt-1">Document ID: {selectedFarmer.documentNumber}</div>
              </div>
              <button 
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-3 py-2 rounded flex items-center text-sm w-full sm:w-auto justify-center"
                onClick={() => handleDownload(selectedFarmer)}
              >
                <Download size={16} className="mr-2" />
                Download Certificate
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Farmer Details</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-3">
                  <User size={20} className="text-green-600 mr-2" />
                  <span className="font-medium text-gray-800">Personal Information</span>
                </div>
                <div className="space-y-2">
                  <div className="flex border-b border-gray-100 pb-2">
                    <div className="w-1/2 text-gray-500">Name</div>
                    <div className="w-1/2 font-medium text-gray-800">{selectedFarmer.farmerName}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2">
                    <div className="w-1/2 text-gray-500">Experience</div>
                    <div className="w-1/2 font-medium text-gray-800">{selectedFarmer.experience}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2">
                    <div className="w-1/2 text-gray-500">Certificate Issue Date</div>
                    <div className="w-1/2 font-medium text-gray-800">{formatDate(selectedFarmer.issueDate)}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Briefcase size={20} className="text-green-600 mr-2" />
                  <span className="font-medium text-gray-800">Farming Information</span>
                </div>
                <div className="space-y-2">
                  <div className="flex border-b border-gray-100 pb-2">
                    <div className="w-1/2 text-gray-500">Experience Level</div>
                    <div className="w-1/2 font-medium text-gray-800">{selectedFarmer.experience}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2">
                    <div className="w-1/2 text-gray-500">Training Status</div>
                    <div className="w-1/2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Location Information</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <MapPin size={20} className="text-green-600 mr-2" />
                  <span className="font-medium text-gray-800">Address Details</span>
                </div>
                <div className="space-y-2">
                  <div className="flex border-b border-gray-100 pb-2">
                    <div className="w-1/2 text-gray-500">Block</div>
                    <div className="w-1/2 font-medium text-gray-800">{selectedFarmer.block}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2">
                    <div className="w-1/2 text-gray-500">Gram Panchayat</div>
                    <div className="w-1/2 font-medium text-gray-800">{selectedFarmer.gramPanchayat}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2">
                    <div className="w-1/2 text-gray-500">Village</div>
                    <div className="w-1/2 font-medium text-gray-800">{selectedFarmer.village}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">Active Participant in Agri on Wheels Program</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 mx-auto w-full max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col mb-4">
              {/* Block selection - Scrollable on mobile */}
              <div className="flex overflow-x-auto pb-2 mb-4 no-scrollbar">
                <button 
                  onClick={() => setActiveBlock('all')} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap mr-2 ${
                    activeBlock === 'all' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Blocks
                </button>
                {blocks.filter(block => block !== 'all').map(block => (
                  <button 
                    key={block}
                    onClick={() => setActiveBlock(block)} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap mr-2 ${
                      activeBlock === block ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {block}
                  </button>
                ))}
              </div>
              
              {/* Search bar */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search by farmer name, village or gram panchayat..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              </div>
            </div>

            <div className="space-y-3">
              {currentFarmers.length > 0 ? (
                currentFarmers.map(farmer => (
                  <button
                    key={farmer.id}
                    onClick={() => handleSelectFarmer(farmer)}
                    className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col">
                      <h3 className="font-medium text-gray-800">{farmer.farmerName}</h3>
                      <div className="mt-1 grid grid-cols-3 gap-2 text-xs text-gray-500">
                        <div>
                          <span className="font-medium">Block:</span> {farmer.block}
                        </div>
                        <div>
                          <span className="font-medium">GP:</span> {farmer.gramPanchayat}
                        </div>
                        <div>
                          <span className="font-medium">Village:</span> {farmer.village}
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                          <Briefcase size={12} className="mr-1" />
                          {farmer.experience} experience
                        </div>
                        <div className="text-xs px-2 py-1 bg-green-100 rounded text-green-800 font-medium">
                          Active
                        </div>
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                  <User size={36} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500">No farmers found</p>
                  <p className="text-gray-400 text-xs mt-1">Try changing your search or filters</p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {currentFarmers.length > 0 && (
              <div className="mt-4 flex items-center justify-between">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full hover:bg-gray-200 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'}`}
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="text-sm text-gray-700">
                  Page {currentPage} of {totalPages} 
                  <span className="ml-1 text-gray-500">({filteredFarmers.length} farmers)</span>
                </div>
                
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full hover:bg-gray-200 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'}`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
            <p className="mt-4 text-gray-700">Loading farmer information...</p>
          </div>
        </div>
      )}
      
      {/* Scrollbar styles */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}