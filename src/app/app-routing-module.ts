import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './auth/login/login';

const routes: Routes = [
  { path: '', redirectTo: 'login-signup', pathMatch: 'full' },
  { path: 'l', redirectTo: '/login/login-screen', pathMatch: 'full' },
  { path: 'login-signup', component:LoginSignupComponent },

  {
    path: 'login',
    loadChildren: () => import('./login/login-module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
