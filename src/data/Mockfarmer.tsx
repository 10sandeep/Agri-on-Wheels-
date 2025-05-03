// Import PDF files
import FARMER1 from "../assets/Balabadra Bangama.pdf";
import FARMER2 from "../assets/Brunda Basupati.pdf";
import FARMER3 from "../assets/Budu Sobar.pdf";
import FARMER4 from "../assets/Daumbhurudhar Bhuyan.pdf";
import FARMER5 from "../assets/Gajendranath Sahu.pdf";
import FARMER6 from "../assets/Ganta Dasu.pdf";
import FARMER7 from "../assets/Godagami Romai.pdf";
import FARMER8 from "../assets/Jalumuru Sanjebrao.pdf";
import FARMER9 from "../assets/Kaitash Basupati.pdf";
import FARMER10 from "../assets/Kari Pagadalu.pdf";
import FARMER11 from "../assets/Kunti Basanpati.pdf";
import FARMER12 from "../assets/Pala Sabarya.pdf";
import FARMER13 from "../assets/Routhu Varma.pdf";
import FARMER14 from "../assets/Sasuram Pavani.pdf";
import FARMER15 from "../assets/Balabadra Bangama.pdf";
import FARMER16 from "../assets/Sudam Choudhary.pdf";

// Farmer interface
export interface Farmer {
  id: string;
  farmerName: string;
  block: string;
  gramPanchayat: string;
  village: string;
  experience: string;
  documentNumber: string;
  pdfUrl: string;
}

// Corrected farmer data structure
export const farmerData = {
  // GOSANI BLOCK
  Gosani: {
    Uppalada: [
      {
        id: "farmer-001",
        farmerName: "Balabadra Bangama",
        block: "Gosani",
        gramPanchayat: "Uppalada",
        village: "Rajasitapur",
        experience: "25 years",
        documentNumber: "ODI-GAJ-2024-10001",
        pdfUrl: FARMER1,
      },
      {
        id: "farmer-007",
        farmerName: "Godagami Romai",
        block: "Gosani",
        gramPanchayat: "Uppalada",
        village: "Rajasitapur",
        experience: "15 years",
        documentNumber: "ODI-GAJ-2024-10007",
        pdfUrl: FARMER7,
      },
      {
        id: "farmer-012",
        farmerName: "Pala Sabarya",
        block: "Gosani",
        gramPanchayat: "Uppalada",
        village: "Rajasitapur",
        experience: "30 years",
        documentNumber: "ODI-GAJ-2024-10012",
        pdfUrl: FARMER12,
      },
    ],
    Bomika: [
      {
        id: "farmer-004",
        farmerName: "Daumbhurudhar Bhuyan",
        block: "Gosani",
        gramPanchayat: "Bomika",
        village: "Bomika",
        experience: "20 years",
        documentNumber: "ODI-GAJ-2024-10004",
        pdfUrl: FARMER4,
      },
      {
        id: "farmer-013",
        farmerName: "Routhu Varma",
        block: "Gosani",
        gramPanchayat: "Bomika",
        village: "Bomika",
        experience: "15 years",
        documentNumber: "ODI-GAJ-2024-10013",
        pdfUrl: FARMER13,
      },
      {
        id: "farmer-015",
        farmerName: "Someswar Palak",
        block: "Gosani",
        gramPanchayat: "Bomika",
        village: "Bomika",
        experience: "15 years",
        documentNumber: "ODI-GAJ-2024-10015",
        pdfUrl: FARMER15,
      },
      {
        id: "farmer-016",
        farmerName: "Sudam Choudhary",
        block: "Gosani",
        gramPanchayat: "Bomika",
        village: "Bomika",
        experience: "30 years",
        documentNumber: "ODI-GAJ-2024-10016",
        pdfUrl: FARMER16,
      },
    ],
    Katalkaitha: [
      {
        id: "farmer-014",
        farmerName: "Sasuram Pavani",
        block: "Gosani",
        gramPanchayat: "Katalkaitha",
        village: "Puduni",
        experience: "7 years",
        documentNumber: "ODI-GAJ-2024-10014",
        pdfUrl: FARMER14,
      },
    ],
  },

  // GUMMA BLOCK
  Gumma: {
    Gumma: [
      {
        id: "farmer-011",
        farmerName: "Kunti Basanpati",
        block: "Gumma",
        gramPanchayat: "Gumma",
        village: "Burjango",
        experience: "15 years",
        documentNumber: "ODI-GAJ-2024-10011",
        pdfUrl: FARMER11,
      },
      {
        id: "farmer-010",
        farmerName: "Kari Pagadalu",
        block: "Gumma",
        gramPanchayat: "Gumma",
        village: "Burjango",
        experience: "25 years",
        documentNumber: "ODI-GAJ-2024-10010",
        pdfUrl: FARMER10,
      },
      {
        id: "farmer-009",
        farmerName: "Kaitash Basupati",
        block: "Gumma",
        gramPanchayat: "Gumma",
        village: "Burjango",
        experience: "10 years",
        documentNumber: "ODI-GAJ-2024-10009",
        pdfUrl: FARMER9,
      },
      {
        id: "farmer-008",
        farmerName: "Jalumuru Sanjebrao",
        block: "Gumma",
        gramPanchayat: "Gumma",
        village: "Jeeba",
        experience: "15 years",
        documentNumber: "ODI-GAJ-2024-10008",
        pdfUrl: FARMER8,
      },
      {
        id: "farmer-006",
        farmerName: "Ganta Dasu",
        block: "Gumma",
        gramPanchayat: "Gumma",
        village: "Burjango",
        experience: "30 years",
        documentNumber: "ODI-GAJ-2024-10006",
        pdfUrl: FARMER6,
      },
      {
        id: "farmer-005",
        farmerName: "Gajendranath Sahu",
        block: "Gumma",
        gramPanchayat: "Gumma",
        village: "Burjango",
        experience: "20 years",
        documentNumber: "ODI-GAJ-2024-10005",
        pdfUrl: FARMER5,
      },
      {
        id: "farmer-003",
        farmerName: "Budu Sobar",
        block: "Gumma",
        gramPanchayat: "Gumma",
        village: "Tarangada",
        experience: "10 years",
        documentNumber: "ODI-GAJ-2024-10003",
        pdfUrl: FARMER3,
      },
      {
        id: "farmer-002",
        farmerName: "Barunda Basupati",
        block: "Gumma",
        gramPanchayat: "Gumma",
        village: "Burjango",
        experience: "20 years",
        documentNumber: "ODI-GAJ-2024-10002",
        pdfUrl: FARMER2,
      },
    ],
  },
};
