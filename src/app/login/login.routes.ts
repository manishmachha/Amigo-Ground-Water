// login.routes.ts
import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';

export const loginRoutes: Routes = [
  { path: '', component: Login },
  { path: 'register-screen', component: Register },
  { path: 'login-screen', component: Login },
];
