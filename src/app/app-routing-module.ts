import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/login/login-screen', pathMatch: 'full' },
  
  {
      path: 'login',
    loadChildren: () =>
      import('./login/login-module').then((m) => m.LoginModule),
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
