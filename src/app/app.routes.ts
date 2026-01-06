import { Routes } from '@angular/router';
import { Posts } from './posts/posts';
import { ApplyNoc } from './apply-noc/apply-noc';
import { MonitoringCompliance } from './monitoring-compliance/monitoring-compliance';
import { NocPermissions } from './noc-permissions/noc-permissions';
import { publishFacade } from '@angular/compiler';
import { PublicHome } from './public-home/public-home';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.routes').then((m) => m.loginRoutes) },
  { path: 'posts', component: Posts },
  { path: 'noc-apply', component: ApplyNoc},
  { path: 'monitoring-compliances', component: MonitoringCompliance},
  { path: 'noc-permissions', component: NocPermissions},
  { path: 'public-home', component: PublicHome},
  { path: 'rig-management', loadChildren: () => import('./rig-management-module/rig-management.routes').then((m) => m.rigManagementRoutes) },
  { path: 'tanker-bulk', loadChildren: () => import('./tanker-bulk-supply-module/tanker-bulk-supply.routes').then((m) => m.TankerBulkSupplyRoutes) },

];
