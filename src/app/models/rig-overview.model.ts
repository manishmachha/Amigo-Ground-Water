export interface RigOverview {
  id: string;
  registrationNumber: string;
  rigName: string;
  rigType: string;
  make: string;
  model: string;
  capacity: string;
  yearOfManufacture: number;
  status: string;
  operationalStatus: string;

  firmName: string;
  ownerName: string;
  ownerContact: string;

  currentDistrict: string;
  currentMandal: string;
  currentVillage: string;
  currentLatitude: string;
  currentLongitude: string;
   totalWellsDrilled: number;


   registrationDate: string;
  registrationExpiryDate: string;
      drillingDiameter: string;
  engineHorsepower: string;
    totalInspections: number;
  totalViolations: number;

  documents: RigDocument[];
}

export interface RigDocument {
  id: string;
  name: string;
  url: string;
  isVerified: boolean;
   createdAt: string;
    updatedAt: string;
}
