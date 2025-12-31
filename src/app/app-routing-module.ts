import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './auth/login/login';
import { PublicHome } from './public-home/public-home';
import { CitizenPortal } from './citizen-portal/citizen-portal';
import { WellRegister } from './well-register/well-register';
import { Dashboard } from './dashboard/dashboard';
import { NocPermissions } from './noc-permissions/noc-permissions';
import { MonitoringCompliance } from './monitoring-compliance/monitoring-compliance';
import { EnforcementViolations } from './enforcement-violations/enforcement-violations';

const routes: Routes = [
  { path: '', redirectTo: 'login-signup', pathMatch: 'full' },
  { path: 'l', redirectTo: '/login/login-screen', pathMatch: 'full' },
  { path: 'login-signup', component:LoginSignupComponent },

  {
    path: 'login',
    loadChildren: () => import('./login/login-module').then((m) => m.LoginModule),
  },

  {path: 'public-home',component:PublicHome},
  {path: 'citizen-portal',component:CitizenPortal},
  {path:'well-register',component:WellRegister},
  {path:'dashboard', component:Dashboard},
  {path:'noc', component:NocPermissions},
  {path:'monitoring-compliance', component:MonitoringCompliance},
  {path: 'enforcement-violations', component:EnforcementViolations}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}