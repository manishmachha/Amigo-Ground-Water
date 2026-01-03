import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Userlogin } from './userlogin/userlogin';

const routes: Routes = [
  { path: 'register-screen', component: Register },
  { path: 'login-screen', component: Login },
  { path: 'user-login', component: Userlogin }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
