// Farmer interface
export interface Farmer {
    id: string;
    farmerName: string;
    block: string;
    gramPanchayat: string;
    village: string;
    experience: string;
    issueDate: string;
    documentNumber: string;
    pdfUrl: string;
  }
  
  // Organized by block and gram panchayat for easier PDF management
  export const farmerData = {
    // PARALAKHEMUNDI BLOCK
    "Paralakhemundi": {
      // Jiranga GP
      "Jiranga": [
        {
          id: "farmer-001",
          farmerName: "Rajesh Pradhan",
          block: "Paralakhemundi",
          gramPanchayat: "Jiranga",
          village: "Jiranga",
          experience: "5-10 years",
          issueDate: "2024-03-15",
          documentNumber: "ODI-GAJ-2024-10001",
          pdfUrl: "/farmers/Paralakhemundi/Jiranga/farmer-001-Rajesh_Pradhan.pdf"
        },
        {
          id: "farmer-002",
          farmerName: "Suresh Behera",
          block: "Paralakhemundi",
          gramPanchayat: "Jiranga",
          village: "Karadasing",
          experience: "3-5 years",
          issueDate: "2024-04-22",
          documentNumber: "ODI-GAJ-2024-10002",
          pdfUrl: "/farmers/Paralakhemundi/Jiranga/farmer-002-Suresh_Behera.pdf"
        }
      ],
      // Narayanpur GP
      "Narayanpur": [
        {
          id: "farmer-003",
          farmerName: "Bhabani Mahapatra",
          block: "Paralakhemundi",
          gramPanchayat: "Narayanpur",
          village: "Narayanpur",
          experience: "10+ years",
          issueDate: "2024-01-10",
          documentNumber: "ODI-GAJ-2024-10003",
          pdfUrl: "/farmers/Paralakhemundi/Narayanpur/farmer-003-Bhabani_Mahapatra.pdf"
        },
        {
          id: "farmer-004",
          farmerName: "Devraj Jena",
          block: "Paralakhemundi",
          gramPanchayat: "Narayanpur",
          village: "Chikatiguda",
          experience: "1-3 years",
          issueDate: "2024-02-18",
          documentNumber: "ODI-GAJ-2024-10004",
          pdfUrl: "/farmers/Paralakhemundi/Narayanpur/farmer-004-Devraj_Jena.pdf"
        }
      ],
      // Kashinagar GP
      "Kashinagar": [
        {
          id: "farmer-005",
          farmerName: "Manoj Sahoo",
          block: "Paralakhemundi",
          gramPanchayat: "Kashinagar",
          village: "Kashinagar",
          experience: "5-10 years",
          issueDate: "2024-05-07",
          documentNumber: "ODI-GAJ-2024-10005",
          pdfUrl: "/farmers/Paralakhemundi/Kashinagar/farmer-005-Manoj_Sahoo.pdf"
        },
        {
          id: "farmer-006",
          farmerName: "Ramesh Patra",
          block: "Paralakhemundi",
          gramPanchayat: "Kashinagar",
          village: "Gurandi",
          experience: "3-5 years",
          issueDate: "2024-04-12",
          documentNumber: "ODI-GAJ-2024-10006",
          pdfUrl: "/farmers/Paralakhemundi/Kashinagar/farmer-006-Ramesh_Patra.pdf"
        }
      ],
      // Parabadi GP
      "Parabadi": [
        {
          id: "farmer-007",
          farmerName: "Prakash Mohanty",
          block: "Paralakhemundi",
          gramPanchayat: "Parabadi",
          village: "Parabadi",
          experience: "10+ years",
          issueDate: "2024-06-20",
          documentNumber: "ODI-GAJ-2024-10007",
          pdfUrl: "/farmers/Paralakhemundi/Parabadi/farmer-007-Prakash_Mohanty.pdf"
        },
        {
          id: "farmer-008",
          farmerName: "Deepak Majhi",
          block: "Paralakhemundi",
          gramPanchayat: "Parabadi",
          village: "Nalaghat",
          experience: "1-3 years",
          issueDate: "2024-03-05",
          documentNumber: "ODI-GAJ-2024-10008",
          pdfUrl: "/farmers/Paralakhemundi/Parabadi/farmer-008-Deepak_Majhi.pdf"
        }
      ],
      // Gurandi GP
      "Gurandi": [
        {
          id: "farmer-009",
          farmerName: "Narayan Nayak",
          block: "Paralakhemundi",
          gramPanchayat: "Gurandi",
          village: "Gurandi",
          experience: "5-10 years",
          issueDate: "2024-02-28",
          documentNumber: "ODI-GAJ-2024-10009",
          pdfUrl: "/farmers/Paralakhemundi/Gurandi/farmer-009-Narayan_Nayak.pdf"
        },
        {
          id: "farmer-010",
          farmerName: "Binod Sabar",
          block: "Paralakhemundi",
          gramPanchayat: "Gurandi",
          village: "Badagam",
          experience: "3-5 years",
          issueDate: "2024-01-15",
          documentNumber: "ODI-GAJ-2024-10010",
          pdfUrl: "/farmers/Paralakhemundi/Gurandi/farmer-010-Binod_Sabar.pdf"
        }
      ]
    },
  
    // GUMMA BLOCK
    "Gumma": {
      // Alluri GP
      "Alluri": [
        {
          id: "farmer-011",
          farmerName: "Jagdish Panigrahi",
          block: "Gumma",
          gramPanchayat: "Alluri",
          village: "Alluri",
          experience: "10+ years",
          issueDate: "2024-03-18",
          documentNumber: "ODI-GAJ-2024-10011",
          pdfUrl: "/farmers/Gumma/Alluri/farmer-011-Jagdish_Panigrahi.pdf"
        },
        {
          id: "farmer-012",
          farmerName: "Vinod Behera",
          block: "Gumma",
          gramPanchayat: "Alluri",
          village: "Kainpur",
          experience: "1-3 years",
          issueDate: "2024-05-10",
          documentNumber: "ODI-GAJ-2024-10012",
          pdfUrl: "/farmers/Gumma/Alluri/farmer-012-Vinod_Behera.pdf"
        }
      ],
      // Chandiput GP
      "Chandiput": [
        {
          id: "farmer-013",
          farmerName: "Pramod Swain",
          block: "Gumma",
          gramPanchayat: "Chandiput",
          village: "Chandiput",
          experience: "5-10 years",
          issueDate: "2024-04-25",
          documentNumber: "ODI-GAJ-2024-10013",
          pdfUrl: "/farmers/Gumma/Chandiput/farmer-013-Pramod_Swain.pdf"
        },
        {
          id: "farmer-014",
          farmerName: "Chittaranjan Sahu",
          block: "Gumma",
          gramPanchayat: "Chandiput",
          village: "Hadubhangi",
          experience: "3-5 years",
          issueDate: "2024-02-19",
          documentNumber: "ODI-GAJ-2024-10014",
          pdfUrl: "/farmers/Gumma/Chandiput/farmer-014-Chittaranjan_Sahu.pdf"
        }
      ],
      // Cheligada GP
      "Cheligada": [
        {
          id: "farmer-015",
          farmerName: "Balaram Rath",
          block: "Gumma",
          gramPanchayat: "Cheligada",
          village: "Cheligada",
          experience: "10+ years",
          issueDate: "2024-06-05",
          documentNumber: "ODI-GAJ-2024-10015",
          pdfUrl: "/farmers/Gumma/Cheligada/farmer-015-Balaram_Rath.pdf"
        },
        {
          id: "farmer-016",
          farmerName: "Mahendra Parida",
          block: "Gumma",
          gramPanchayat: "Cheligada",
          village: "Kerandi",
          experience: "1-3 years",
          issueDate: "2024-03-22",
          documentNumber: "ODI-GAJ-2024-10016",
          pdfUrl: "/farmers/Gumma/Cheligada/farmer-016-Mahendra_Parida.pdf"
        }
      ],
      // Badagada GP
      "Badagada": [
        {
          id: "farmer-017",
          farmerName: "Biswajit Panda",
          block: "Gumma",
          gramPanchayat: "Badagada",
          village: "Badagada",
          experience: "5-10 years",
          issueDate: "2024-01-30",
          documentNumber: "ODI-GAJ-2024-10017",
          pdfUrl: "/farmers/Gumma/Badagada/farmer-017-Biswajit_Panda.pdf"
        },
        {
          id: "farmer-018",
          farmerName: "Akshaya Nayak",
          block: "Gumma",
          gramPanchayat: "Badagada",
          village: "Khandada",
          experience: "3-5 years",
          issueDate: "2024-05-15",
          documentNumber: "ODI-GAJ-2024-10018",
          pdfUrl: "/farmers/Gumma/Badagada/farmer-018-Akshaya_Nayak.pdf"
        }
      ],
      // Ramagiri GP
      "Ramagiri": [
        {
          id: "farmer-019",
          farmerName: "Padmalochan Dalai",
          block: "Gumma",
          gramPanchayat: "Ramagiri",
          village: "Ramagiri",
          experience: "10+ years",
          issueDate: "2024-04-08",
          documentNumber: "ODI-GAJ-2024-10019",
          pdfUrl: "/farmers/Gumma/Ramagiri/farmer-019-Padmalochan_Dalai.pdf"
        },
        {
          id: "farmer-020",
          farmerName: "Muna Swain",
          block: "Gumma",
          gramPanchayat: "Ramagiri",
          village: "Samiapali",
          experience: "1-3 years",
          issueDate: "2024-02-14",
          documentNumber: "ODI-GAJ-2024-10020",
          pdfUrl: "/farmers/Gumma/Ramagiri/farmer-020-Muna_Swain.pdf"
        }
      ]
    },
  
    // MOHANA BLOCK
    "Mohana": {
      // Laxmipur GP
      "Laxmipur": [
        {
          id: "farmer-021",
          farmerName: "Santosh Sahoo",
          block: "Mohana",
          gramPanchayat: "Laxmipur",
          village: "Laxmipur",
          experience: "5-10 years",
          issueDate: "2024-03-12",
          documentNumber: "ODI-GAJ-2024-10021",
          pdfUrl: "/farmers/Mohana/Laxmipur/farmer-021-Santosh_Sahoo.pdf"
        },
        {
          id: "farmer-022",
          farmerName: "Hitesh Jena",
          block: "Mohana",
          gramPanchayat: "Laxmipur",
          village: "Haripur",
          experience: "3-5 years",
          issueDate: "2024-06-18",
          documentNumber: "ODI-GAJ-2024-10022",
          pdfUrl: "/farmers/Mohana/Laxmipur/farmer-022-Hitesh_Jena.pdf"
        }
      ],
      // Mohana GP
      "Mohana": [
        {
          id: "farmer-023",
          farmerName: "Prakash Naik",
          block: "Mohana",
          gramPanchayat: "Mohana",
          village: "Mohana",
          experience: "10+ years",
          issueDate: "2024-05-22",
          documentNumber: "ODI-GAJ-2024-10023",
          pdfUrl: "/farmers/Mohana/Mohana/farmer-023-Prakash_Naik.pdf"
        },
        {
          id: "farmer-024",
          farmerName: "Debasis Mohanty",
          block: "Mohana",
          gramPanchayat: "Mohana",
          village: "Chandragiri",
          experience: "1-3 years",
          issueDate: "2024-04-11",
          documentNumber: "ODI-GAJ-2024-10024",
          pdfUrl: "/farmers/Mohana/Mohana/farmer-024-Debasis_Mohanty.pdf"
        }
      ],
      // Adaba GP
      "Adaba": [
        {
          id: "farmer-025",
          farmerName: "Jagannath Behera",
          block: "Mohana",
          gramPanchayat: "Adaba",
          village: "Adaba",
          experience: "5-10 years",
          issueDate: "2024-01-20",
          documentNumber: "ODI-GAJ-2024-10025",
          pdfUrl: "/farmers/Mohana/Adaba/farmer-025-Jagannath_Behera.pdf"
        },
        {
          id: "farmer-026",
          farmerName: "Sushant Mallick",
          block: "Mohana",
          gramPanchayat: "Adaba",
          village: "Siali",
          experience: "3-5 years",
          issueDate: "2024-02-25",
          documentNumber: "ODI-GAJ-2024-10026",
          pdfUrl: "/farmers/Mohana/Adaba/farmer-026-Sushant_Mallick.pdf"
        }
      ],
      // Chandragiri GP
      "Chandragiri": [
        {
          id: "farmer-027",
          farmerName: "Anil Mohapatra",
          block: "Mohana",
          gramPanchayat: "Chandragiri",
          village: "Chandragiri",
          experience: "10+ years",
          issueDate: "2024-03-28",
          documentNumber: "ODI-GAJ-2024-10027",
          pdfUrl: "/farmers/Mohana/Chandragiri/farmer-027-Anil_Mohapatra.pdf"
        },
        {
          id: "farmer-028",
          farmerName: "Rakesh Panda",
          block: "Mohana",
          gramPanchayat: "Chandragiri",
          village: "Jhinkipada",
          experience: "1-3 years",
          issueDate: "2024-05-17",
          documentNumber: "ODI-GAJ-2024-10028",
          pdfUrl: "/farmers/Mohana/Chandragiri/farmer-028-Rakesh_Panda.pdf"
        }
      ],
      // Ashurabandh GP
      "Ashurabandh": [
        {
          id: "farmer-029",
          farmerName: "Manohar Sahu",
          block: "Mohana",
          gramPanchayat: "Ashurabandh",
          village: "Ashurabandh",
          experience: "5-10 years",
          issueDate: "2024-04-30",
          documentNumber: "ODI-GAJ-2024-10029",
          pdfUrl: "/farmers/Mohana/Ashurabandh/farmer-029-Manohar_Sahu.pdf"
        },
        {
          id: "farmer-030",
          farmerName: "Bijay Samal",
          block: "Mohana",
          gramPanchayat: "Ashurabandh",
          village: "Putasing",
          experience: "3-5 years",
          issueDate: "2024-02-08",
          documentNumber: "ODI-GAJ-2024-10030",
          pdfUrl: "/farmers/Mohana/Ashurabandh/farmer-030-Bijay_Samal.pdf"
        }
      ]
    },
  
    // RAYAGADA BLOCK
    "Rayagada": {
      // Rayagada GP
      "Rayagada": [
        {
          id: "farmer-031",
          farmerName: "Sumanta Mohanta",
          block: "Rayagada",
          gramPanchayat: "Rayagada",
          village: "Rayagada",
          experience: "10+ years",
          issueDate: "2024-01-12",
          documentNumber: "ODI-GAJ-2024-10031",
          pdfUrl: "/farmers/Rayagada/Rayagada/farmer-031-Sumanta_Mohanta.pdf"
        },
        {
          id: "farmer-032",
          farmerName: "Bhagirathi Panda",
          block: "Rayagada",
          gramPanchayat: "Rayagada",
          village: "Raikala",
          experience: "1-3 years",
          issueDate: "2024-05-20",
          documentNumber: "ODI-GAJ-2024-10032",
          pdfUrl: "/farmers/Rayagada/Rayagada/farmer-032-Bhagirathi_Panda.pdf"
        }
      ],
      // Gaiba GP
      "Gaiba": [
        {
          id: "farmer-033",
          farmerName: "Dillip Rout",
          block: "Rayagada",
          gramPanchayat: "Gaiba",
          village: "Gaiba",
          experience: "5-10 years",
          issueDate: "2024-03-08",
          documentNumber: "ODI-GAJ-2024-10033",
          pdfUrl: "/farmers/Rayagada/Gaiba/farmer-033-Dillip_Rout.pdf"
        },
        {
          id: "farmer-034",
          farmerName: "Prafulla Das",
          block: "Rayagada",
          gramPanchayat: "Gaiba",
          village: "Tarasingi",
          experience: "3-5 years",
          issueDate: "2024-06-12",
          documentNumber: "ODI-GAJ-2024-10034",
          pdfUrl: "/farmers/Rayagada/Gaiba/farmer-034-Prafulla_Das.pdf"
        }
      ],
      // Kerandi GP
      "Kerandi": [
        {
          id: "farmer-035",
          farmerName: "Girish Sahoo",
          block: "Rayagada",
          gramPanchayat: "Kerandi",
          village: "Kerandi",
          experience: "10+ years",
          issueDate: "2024-04-17",
          documentNumber: "ODI-GAJ-2024-10035",
          pdfUrl: "/farmers/Rayagada/Kerandi/farmer-035-Girish_Sahoo.pdf"
        },
        {
          id: "farmer-036",
          farmerName: "Harekrushna Parida",
          block: "Rayagada",
          gramPanchayat: "Kerandi",
          village: "Gumula",
          experience: "1-3 years",
          issueDate: "2024-02-23",
          documentNumber: "ODI-GAJ-2024-10036",
          pdfUrl: "/farmers/Rayagada/Kerandi/farmer-036-Harekrushna_Parida.pdf"
        }
      ],
      // Gumma GP (under Rayagada block)
      "Gumma": [
        {
          id: "farmer-037",
          farmerName: "Rabindra Pradhan",
          block: "Rayagada",
          gramPanchayat: "Gumma",
          village: "Gumma",
          experience: "5-10 years",
          issueDate: "2024-01-25",
          documentNumber: "ODI-GAJ-2024-10037",
          pdfUrl: "/farmers/Rayagada/Gumma/farmer-037-Rabindra_Pradhan.pdf"
        },
        {
          id: "farmer-038",
          farmerName: "Sanjib Biswal",
          block: "Rayagada",
          gramPanchayat: "Gumma",
          village: "Khandara",
          experience: "3-5 years",
          issueDate: "2024-05-28",
          documentNumber: "ODI-GAJ-2024-10038",
          pdfUrl: "/farmers/Rayagada/Gumma/farmer-038-Sanjib_Biswal.pdf"
        }
      ],
      // Padmapur GP
      "Padmapur": [
        {
          id: "farmer-039",
          farmerName: "Umakant Nayak",
          block: "Rayagada",
          gramPanchayat: "Padmapur",
          village: "Padmapur",
          experience: "10+ years",
          issueDate: "2024-03-14",
          documentNumber: "ODI-GAJ-2024-10039",
          pdfUrl: "/farmers/Rayagada/Padmapur/farmer-039-Umakant_Nayak.pdf"
        },
        {
          id: "farmer-040",
          farmerName: "Bikash Swain",
          block: "Rayagada",
          gramPanchayat: "Padmapur",
          village: "Bheja",
          experience: "1-3 years",
          issueDate: "2024-06-26",
          documentNumber: "ODI-GAJ-2024-10040",
          pdfUrl: "/farmers/Rayagada/Padmapur/farmer-040-Bikash_Swain.pdf"
        }
      ]
    },
  
    // KASINAGAR BLOCK
    "Kasinagar": {
      // Kasinagar GP
      "Kasinagar": [
        {
          id: "farmer-041",
          farmerName: "Durga Prasad Mohanty",
          block: "Kasinagar",
          gramPanchayat: "Kasinagar",
          village: "Kasinagar",
          experience: "5-10 years",
          issueDate: "2024-04-05",
          documentNumber: "ODI-GAJ-2024-10041",
          pdfUrl: "/farmers/Kasinagar/Kasinagar/farmer-041-Durga_Prasad_Mohanty.pdf"
        },
        {
          id: "farmer-042",
          farmerName: "Bhagaban Pradhan",
          block: "Kasinagar",
          gramPanchayat: "Kasinagar",
          village: "Dombala",
          experience: "3-5 years",
          issueDate: "2024-02-11",
          documentNumber: "ODI-GAJ-2024-10042",
          pdfUrl: "/farmers/Kasinagar/Kasinagar/farmer-042-Bhagaban_Pradhan.pdf"
        }
      ],
      // Gandahati GP
      "Gandahati": [
        {
          id: "farmer-043",
          farmerName: "Raghunath Sahoo",
          block: "Kasinagar",
          gramPanchayat: "Gandahati",
          village: "Gandahati",
          experience: "10+ years",
          issueDate: "2024-05-16",
          documentNumber: "ODI-GAJ-2024-10043",
          pdfUrl: "/farmers/Kasinagar/Gandahati/farmer-043-Raghunath_Sahoo.pdf"
        },
        {
          id: "farmer-044",
          farmerName: "Srikant Majhi",
          block: "Kasinagar",
          gramPanchayat: "Gandahati",
          village: "Bhatisipu",
          experience: "1-3 years",
          issueDate: "2024-03-21",
          documentNumber: "ODI-GAJ-2024-10044",
          pdfUrl: "/farmers/Kasinagar/Gandahati/farmer-044-Srikant_Majhi.pdf"
        }
      ],
      // Jemadeipentha GP
      "Jemadeipentha": [
        {
          id: "farmer-045",
          farmerName: "Jitendra Behera",
          block: "Kasinagar",
          gramPanchayat: "Jemadeipentha",
          village: "Jemadeipentha",
          experience: "5-10 years",
          issueDate: "2024-01-18",
          documentNumber: "ODI-GAJ-2024-10045",
          pdfUrl: "/farmers/Kasinagar/Jemadeipentha/farmer-045-Jitendra_Behera.pdf"
        },
        {
          id: "farmer-046",
          farmerName: "Kishore Mohanty",
          block: "Kasinagar",
          gramPanchayat: "Jemadeipentha",
          village: "Butisingh",
          experience: "3-5 years",
          issueDate: "2024-06-30",
          documentNumber: "ODI-GAJ-2024-10046",
          pdfUrl: "/farmers/Kasinagar/Jemadeipentha/farmer-046-Kishore_Mohanty.pdf"
        }
      ],
      // Merapalli GP
      "Merapalli": [
        {
          id: "farmer-047",
          farmerName: "Dillip Biswal",
          block: "Kasinagar",
          gramPanchayat: "Merapalli",
          village: "Merapalli",
          experience: "10+ years",
          issueDate: "2024-04-28",
          documentNumber: "ODI-GAJ-2024-10047",
          pdfUrl: "/farmers/Kasinagar/Merapalli/farmer-047-Dillip_Biswal.pdf"
        },
        {
          id: "farmer-048",
          farmerName: "Bibhuti Mohapatra",
          block: "Kasinagar",
          gramPanchayat: "Merapalli",
          village: "Khajuripada",
          experience: "1-3 years",
          issueDate: "2024-02-15",
          documentNumber: "ODI-GAJ-2024-10048",
          pdfUrl: "/farmers/Kasinagar/Merapalli/farmer-048-Bibhuti_Mohapatra.pdf"
        }
      ],
      // Serango GP
      "Serango": [
        {
          id: "farmer-049",
          farmerName: "Niranjan Sahoo",
          block: "Kasinagar",
          gramPanchayat: "Serango",
          village: "Serango",
          experience: "5-10 years",
          issueDate: "2024-03-11",
          documentNumber: "ODI-GAJ-2024-10049",
          pdfUrl: "/farmers/Kasinagar/Serango/farmer-049-Niranjan_Sahoo.pdf"
        },
        {
          id: "farmer-050",
          farmerName: "Sahadev Mahanta",
          block: "Kasinagar",
          gramPanchayat: "Serango",
          village: "Kuriusing",
          experience: "3-5 years",
          issueDate: "2024-05-25",
          documentNumber: "ODI-GAJ-2024-10050",
          pdfUrl: "/farmers/Kasinagar/Serango/farmer-050-Sahadev_Mahanta.pdf"
        }
      ]
    },
  
    // R.UDAYAGIRI BLOCK
    "R.Udayagiri": {
      // R.Udayagiri GP
      "R.Udayagiri": [
        {
          id: "farmer-051",
          farmerName: "Debaraj Swain",
          block: "R.Udayagiri",
          gramPanchayat: "R.Udayagiri",
          village: "R.Udayagiri",
          experience: "10+ years",
          issueDate: "2024-06-15",
          documentNumber: "ODI-GAJ-2024-10051",
          pdfUrl: "/farmers/RUdayagiri/RUdayagiri/farmer-051-Debaraj_Swain.pdf"
        },
      ]
    }}