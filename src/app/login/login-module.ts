import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing-module';
import { LoginScreen } from './login-screen/login-screen';
import { RegisterScreen } from './register-screen/register-screen';
import { ReactiveFormsModule } from '@angular/forms';
import { UserloginScreen } from './userlogin-screen/userlogin-screen';
import { AmigoFormComponent } from '../amigo-form-renderer/amigo-form.component';


@NgModule({
  declarations: [
    RegisterScreen,
        LoginScreen,
        UserloginScreen
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,AmigoFormComponent
  ]
})
export class LoginModule { }
