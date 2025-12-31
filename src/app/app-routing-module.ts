import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './auth/login/login';
import { PublicHome } from './public-home/public-home';
import { CitizenPortal } from './citizen-portal/citizen-portal';
import { WellRegister } from './well-register/well-register';
import { WellsAssets } from './wells-assets/wells-assets';
import { ReportViolation } from './report-violation/report-violation';
import { ApplyNoc } from './apply-noc/apply-noc';

const routes: Routes = [
  { path: '', redirectTo: 'login-signup', pathMatch: 'full' },
  { path: 'l', redirectTo: '/login/login-screen', pathMatch: 'full' },
  { path: 'login-signup', component: LoginSignupComponent },

  {
    path: 'login',
    loadChildren: () => import('./login/login-module').then((m) => m.LoginModule),
  },

  { path: 'public-home', component: PublicHome },
  { path: 'citizen-portal', component: CitizenPortal },
  { path: 'well-register', component: WellRegister },
  { path: 'wells-assets', component: WellsAssets },
  { path: 'report-voilation', component: ReportViolation},
  { path: 'apply-noc', component: ApplyNoc},
  {
    path: 'rig-management',
    loadChildren: () => import('./rig-management-module/rig-management-module-module').then((m) => m.RigManagementModuleModule),
  },
   {
    path: 'tanker-bulk-supply',
    loadChildren: () => import('./tanker-bulk-supply-module/tanker-bulk-supply-module-module').then((m) => m.TankerBulkSupplyModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }