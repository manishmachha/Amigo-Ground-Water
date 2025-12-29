import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './auth/login/login';
import { PublicHome } from './public-home/public-home';
import { CitizenPortal } from './citizen-portal/citizen-portal';
import { WellRegister } from './well-register/well-register';

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
  {path:'well-register',component:WellRegister}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}