export interface NocScreenData {
  // Project Information
  projectName: string;
  projectCategory: string;
  nocType: string;
  projectStatus: string;
  noOfFlats: number;
  designPopulation: number;

  // Location Details
  district: string;
  mandal: string;
  villageTown: string;
  surveyNumbers: string;
  assessmentCategory: string;
  watershed: string;

}
export interface GroundwaterRequirement {
  type: string;
  daily: number;
  annual: number;
}

export interface Structure {
  type: string;
  specs: string;
  badge: string;
}

export interface RechargeData {
  structures: Structure[];
  piezometers: string;
}

