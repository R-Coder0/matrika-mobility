// src/routes/serviceRouteMap.js

import AirportTransfersDelhi from "../pages/AirportTransfer/Delhi";
import AirportTransfersNoida from "../pages/AirportTransfer/Noida";
import AirportTransfersGurugram from "../pages/AirportTransfer/Gurugram";

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

export const serviceRouteMap = {
  // Airport Transfers
  "airpot-transport-in-delhi": AirportTransfersDelhi,
  "airpot-transport-in-noida": AirportTransfersNoida,
  "airpot-transport-in-gurugram": AirportTransfersGurugram,

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
};
