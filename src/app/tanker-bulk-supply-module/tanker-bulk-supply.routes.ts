import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TankerBulkSupply } from './tanker-bulk-supply/tanker-bulk-supply';
import { TankerBulkSupplyOverview } from './tanker-bulk-supply-overview/tanker-bulk-supply-overview';
import { TankerBulkSupplySuppliersFleet } from './tanker-bulk-supply-suppliers-fleet/tanker-bulk-supply-suppliers-fleet';
import { TankerBulkSupplyFillingStation } from './tanker-bulk-supply-filling-station/tanker-bulk-supply-filling-station';
import { TankerBulkSupplyTripLogsTracking } from './tanker-bulk-supply-trip-logs-tracking/tanker-bulk-supply-trip-logs-tracking';
import { TankerBulkSupplyBillingRevenue } from './tanker-bulk-supply-billing-revenue/tanker-bulk-supply-billing-revenue';
import { TankerBulkSupplyViolationsEnforcement } from './tanker-bulk-supply-violations-enforcement/tanker-bulk-supply-violations-enforcement';

export const TankerBulkSupplyRoutes: Routes = [
   {
      path: '', component: TankerBulkSupply,
      children: [
        {
          path: '', redirectTo: 'overview', pathMatch: 'full'
        },
        { path: 'overview', component: TankerBulkSupplyOverview },
        { path: 'suppliers', component: TankerBulkSupplySuppliersFleet},
        { path: 'filling', component: TankerBulkSupplyFillingStation},
        { path: 'trip-log', component: TankerBulkSupplyTripLogsTracking },
        { path: 'billing', component: TankerBulkSupplyBillingRevenue},
        { path: 'violations', component: TankerBulkSupplyViolationsEnforcement}
      ],
    },
];
