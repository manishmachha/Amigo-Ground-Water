import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing-module';
import { LoginScreen } from './login-screen/login-screen';
import { RegisterScreen } from './register-screen/register-screen';
import { ReactiveFormsModule } from '@angular/forms';
import { UserloginScreen } from './userlogin-screen/userlogin-screen';


@NgModule({
  declarations: [
    RegisterScreen,
        LoginScreen,
        UserloginScreen
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
