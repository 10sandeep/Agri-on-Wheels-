import React, { useState } from 'react';
import { FileText, Download, Search, Calendar, CheckCircle, ChevronLeft } from 'lucide-react';
import TAX_INVOICE from '../assets/TAX_INVOICE.pdf';
import TAX_INVOICE2 from '../assets/TAX-INVOICE 2.pdf'
import DOCUMENT_CERTIFICATE from '../assets/INSTALLATION CERTIFICATE.pdf';

interface Document {
  id: string;
  type: 'invoice' | 'certificate';
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

const AgriDocumentDisplay: React.FC = () => {
  const [documents] = useState<Document[]>([
    {
      id: 'inv-2024-002',
      type: 'invoice',
      number: 'TSSPL/520/24-25',
      customerName: 'CENTURION UNIVERSITY OF TECHNOLOGY & MANAGEMENT',
      issueDate: '2025-03-25',
      amount: '₹8,14,200.00',
      serviceDetails: 'Envi Single User & Envi Crop Science Module',
      pdfUrl: TAX_INVOICE,
    },
    {
      id: 'cert-2024-002',
      type: 'certificate',
      number: 'CUTM/Central Store/PO/2024-25/0215',
      customerName: 'CENTURION UNIVERSITY OF TECHNOLOGY & MANAGEMENT',
      issueDate: '2025-03-11',
      installationDate: '2025-03-27',
      equipmentDetails: 'ENVI Maintenance and ENVI Crop Science (CS) Maintenance',
      warrantyPeriod: '24 months',
      company: 'ESRI India Technologies Limited',
      location: 'Centurion University Of Technology and Management,Village Alluri Nagar,PO-R Sitapur,Gajapati,Odisha,761211',
      technician: 'Rajesh Kumar',
      pdfUrl: DOCUMENT_CERTIFICATE,
    },
    {
      id: 'inv-2024-002',
      type: 'invoice',
      number: 'HSN Number: 8523',
      customerName: 'CENTURION UNIVERSITY OF TECHNOLOGY & MANAGEMENT',
      issueDate: '2025-03-26',
      amount: '₹3,48,100.00',
      serviceDetails: 'Agisoft Metashape Professional, Node-Locked license,Single',
      pdfUrl: TAX_INVOICE2,
    },
  ]);

  const [activeTab, setActiveTab] = useState<'all' | 'invoice' | 'certificate'>('all');
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDocuments = documents.filter(doc => {
    const matchesTab = activeTab === 'all' || doc.type === activeTab;
    const matchesSearch = doc.customerName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.number.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const formatDate = (dateStr: string): string => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDownload = (doc: Document) => {
    if (doc.pdfUrl) {
      const link = document.createElement('a');
      link.href = doc.pdfUrl;
      link.download = `${doc.type === 'invoice' ? 'Invoice' : 'Certificate'}-${doc.number.replace(/\//g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-4 md:mt-16 mb-4 md:mb-16">
      {/* Header */}
      <div className="bg-green-700 text-white p-4 md:p-6 rounded-t-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Document Portal</h2>
        <p className="text-sm md:text-base opacity-90">Access your tax invoices and installation certificates</p>
      </div>

      {selectedDocument ? (
        <div className="p-4 md:p-6">
          <button 
            onClick={() => setSelectedDocument(null)}
            className="flex items-center text-green-700 font-medium mb-4 md:mb-6 hover:underline text-sm md:text-base"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to all documents
          </button>

          <div className="border-b border-gray-200 pb-4 md:pb-6 mb-4 md:mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="mb-4 sm:mb-0">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  selectedDocument.type === 'invoice' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {selectedDocument.type === 'invoice' ? 'Tax Invoice' : 'Installation Certificate'}
                </span>
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mt-2">{selectedDocument.number}</h1>
              </div>
              <button 
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-3 py-2 rounded flex items-center text-sm w-full sm:w-auto justify-center"
                onClick={() => handleDownload(selectedDocument)}
              >
                <Download size={16} className="mr-2" />
                Download PDF
              </button>
            </div>
          </div>

          {selectedDocument.type === 'invoice' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">Invoice Details</h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Invoice Number</div>
                    <div className="w-1/2 font-medium text-gray-800 break-all">{selectedDocument.number}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Issue Date</div>
                    <div className="w-1/2 font-medium text-gray-800">{formatDate(selectedDocument.issueDate)}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Amount</div>
                    <div className="w-1/2 font-medium text-gray-800">{selectedDocument.amount}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Service Details</div>
                    <div className="w-1/2 font-medium text-gray-800 break-words">{selectedDocument.serviceDetails}</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4 mt-4 md:mt-0">Customer Information</h3>
                <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                  <div className="font-medium text-gray-800 mb-1 text-sm md:text-base break-words">{selectedDocument.customerName}</div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Customer ID: CUST-{selectedDocument.id.split('-').pop()}
                  </div>
                </div>
                <div className="mt-4 md:mt-6">
                  <div className="text-gray-500 mb-1 md:mb-2 text-sm md:text-base">Payment Status</div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    <span className="font-medium text-green-600 text-sm md:text-base">Paid</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">Certificate Details</h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Certificate Number</div>
                    <div className="w-1/2 font-medium text-gray-800 break-all">{selectedDocument.number}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Issue Date</div>
                    <div className="w-1/2 font-medium text-gray-800">{formatDate(selectedDocument.issueDate)}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Installation Date</div>
                    <div className="w-1/2 font-medium text-gray-800">{selectedDocument.installationDate && formatDate(selectedDocument.installationDate)}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Equipment</div>
                    <div className="w-1/2 font-medium text-gray-800 break-words">{selectedDocument.equipmentDetails}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Warranty Period</div>
                    <div className="w-1/2 font-medium text-gray-800">{selectedDocument.warrantyPeriod}</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4 mt-4 md:mt-0">Installation Information</h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Customer</div>
                    <div className="w-1/2 font-medium text-gray-800 break-words">{selectedDocument.customerName}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Location</div>
                    <div className="w-1/2 font-medium text-gray-800 text-xs md:text-sm break-words">{selectedDocument.location}</div>
                  </div>
                  <div className="flex border-b border-gray-100 pb-2 text-sm md:text-base">
                    <div className="w-1/2 text-gray-500">Technician</div>
                    <div className="w-1/2 font-medium text-gray-800">{selectedDocument.technician}</div>
                  </div>
                </div>
                <div className="mt-4 md:mt-6 p-2 md:p-3 bg-green-50 border border-green-100 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-600 mr-1 md:mr-2" />
                    <span className="text-green-800 font-medium text-xs md:text-sm">Installation Verified & Tested</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 md:p-6">
          <div className="flex flex-col mb-4 md:mb-6">
            {/* Tab navigation - Scrollable on mobile */}
            <div className="flex overflow-x-auto pb-2 mb-4 no-scrollbar">
              <button onClick={() => setActiveTab('all')} className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0 mr-2 ${
                activeTab === 'all' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                All Documents
              </button>
              <button onClick={() => setActiveTab('invoice')} className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0 mr-2 ${
                activeTab === 'invoice' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                Tax Invoices
              </button>
              <button onClick={() => setActiveTab('certificate')} className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0 ${
                activeTab === 'certificate' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                Installation Certificates
              </button>
            </div>
            
            {/* Search bar */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map(document => (
                <button
                  key={document.id}
                  onClick={() => setSelectedDocument(document)}
                  className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col">
                    <div>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                        document.type === 'invoice' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {document.type === 'invoice' ? 'Tax Invoice' : 'Installation Certificate'}
                      </span>
                      <h3 className="font-medium text-gray-800 mt-1 text-sm md:text-base break-all">{document.number}</h3>
                      <p className="text-gray-500 text-xs md:text-sm truncate">{document.customerName}</p>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar size={12} className="mr-1 flex-shrink-0" />
                        {formatDate(document.issueDate)}
                      </div>
                      {document.type === 'invoice' && (
                        <div className="font-medium text-gray-800 text-sm md:text-base">{document.amount}</div>
                      )}
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center py-8 md:py-12 bg-gray-50 rounded-lg">
                <FileText size={36} className="mx-auto text-gray-300 mb-3" />
                <p className="text-gray-500 text-sm md:text-base">No documents found</p>
                <p className="text-gray-400 text-xs mt-1">Try changing your search or filters</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Add global styles for scrollbar hiding */}
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
};

export default AgriDocumentDisplay;