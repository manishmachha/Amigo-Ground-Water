import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreen } from './login-screen/login-screen';
import { RegisterScreen } from './register-screen/register-screen';
import { UserloginScreen } from './userlogin-screen/userlogin-screen';

const routes: Routes = [
  { path: 'register', component: RegisterScreen },
  { path: 'login', component: LoginScreen },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
