import { Routes } from "@angular/router";
import { RigDetailsPage } from "./rig-details-page/rig-details-page";
import { RigDetailsOverview } from "./rig-details-overview/rig-details-overview";
import { RigDetailsRegistration } from "./rig-details-registration/rig-details-registration";
import { RigDetailsMovementHistory } from "./rig-details-movement-history/rig-details-movement-history";
import { RigDetailsDrillingLogs } from "./rig-details-drilling-logs/rig-details-drilling-logs";
import { RigDetailsOwnerDetails } from "./rig-details-owner-details/rig-details-owner-details";
import { RigDetailsTimeline } from "./rig-details-timeline/rig-details-timeline";





export const RigDetails: Routes = [

  { path: '', component:RigDetailsPage ,
    children:[ 
        { path: '', redirectTo: 'summary', pathMatch: 'full' },
        {path: 'overview',component:RigDetailsOverview},
        {path: 'registration',component:RigDetailsRegistration},
        {path:'movement-history',component:RigDetailsMovementHistory},
        {path:'drilling-logs',component:RigDetailsDrillingLogs},
        {path:'owner-details',component:RigDetailsOwnerDetails},
        {path:'timeline',component:RigDetailsTimeline}
 
    ]
  },

 ];
