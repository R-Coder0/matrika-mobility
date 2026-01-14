// src/routes/serviceRouteMap.js

import AirportTransfersDelhi from "../pages/AirportTransfer/Delhi";
import AirportTransfersNoida from "../pages/AirportTransfer/Noida";
import AirportTransfersGurugram from "../pages/AirportTransfer/Gurugram";
import AirportTransfersBangalore from "../pages/AirportTransfer/Banglore";
import AirportTransfersMumbai from "../pages/AirportTransfer/Muumbai";
import AirportTransfersHyderabad from "../pages/AirportTransfer/Hyderabad";

import LocalOutstationDelhi from "../pages/localOutstation/Delhi";
import LocalOutstationNoida from "../pages/localOutstation/Noida";
import LocalOutstationGurugram from "../pages/localOutstation/Gurugaon";

import LongTermFixedRentalDelhi from "../pages/LongFixRental/Delhi";
import LongTermFixedRentalNoida from "../pages/LongFixRental/Noida";
import LongTermFixedRentalGurugram from "../pages/LongFixRental/Gurugram";

import MICEDelhi from "../pages/MICE/Delhi";
import MICENoida from "../pages/MICE/Noida";
import MICEGurugram from "../pages/MICE/Gurugram";

import CorporateDelhiPage from "../pages/corporate/CorporateDelhi";
import CorporateNoidaPage from "../pages/corporate/CorporateNoida";
import CorporateGurgaonPage from "../pages/corporate/CorporateGurugaon";
import CorporateBangalorePage from "../pages/corporate/CorporateBanglore";
import CorporateHyderabadPage from "../pages/corporate/CorporateHyderabad";
import CorporateMumbaiPage from "../pages/corporate/CorporateMumbai";

export const serviceRouteMap = {
  // Airport Transfers
  "airport-transport-in-delhi": AirportTransfersDelhi,
  "airport-transport-in-noida": AirportTransfersNoida,
  "airport-transport-in-gurugram": AirportTransfersGurugram,
  "airport-transport-in-bangalore": AirportTransfersBangalore,
  "airport-transport-in-mumbai": AirportTransfersMumbai,
  "airport-transport-in-hyderabad": AirportTransfersHyderabad,

  // Local & Outstation
  "local-outstation-service-in-delhi": LocalOutstationDelhi,
  "local-outstation-service-in-noida": LocalOutstationNoida,
  "local-outstation-service-in-gurugram": LocalOutstationGurugram,

  // Long Term Fixed
  "long-term-fixed-rental-delhi": LongTermFixedRentalDelhi,
  "long-term-fixed-rental-noida": LongTermFixedRentalNoida,
  "long-term-fixed-rental-gurugram": LongTermFixedRentalGurugram,

  // MICE
  "mice-in-delhi": MICEDelhi,
  "mice-in-noida": MICENoida,
  "mice-in-gurugram": MICEGurugram,

  // Corporate
  "corporate-car-rental-delhi": CorporateDelhiPage,
  "corporate-car-rental-noida": CorporateNoidaPage,
  "corporate-car-rental-gurugram": CorporateGurgaonPage,
  "corporate-car-rental-bangalore": CorporateBangalorePage,
  "corporate-car-rental-hyderabad": CorporateHyderabadPage,
  "corporate-car-rental-mumbai": CorporateMumbaiPage,
};
