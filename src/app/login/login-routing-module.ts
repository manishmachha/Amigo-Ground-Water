import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreen } from './login-screen/login-screen';
import { RegisterScreen } from './register-screen/register-screen';
import { UserloginScreen } from './userlogin-screen/userlogin-screen';

const routes: Routes = [
  { path: 'register-screen', component: RegisterScreen },
    { path: 'login-screen', component: LoginScreen },
    { path: 'user-login', component: UserloginScreen}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
