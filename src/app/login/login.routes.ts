// login.routes.ts
import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Userlogin } from './userlogin/userlogin';

export const loginRoutes: Routes = [
  { path: '', component: Userlogin },
  { path: 'register-screen', component: Register },
  { path: 'login-screen', component: Login },
];
