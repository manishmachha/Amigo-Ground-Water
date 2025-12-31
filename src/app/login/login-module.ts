import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  provideBrowserGlobalErrorListeners } from '@angular/core';

import { LoginRoutingModule } from './login-routing-module';
import { LoginScreen } from './login-screen/login-screen';
import { RegisterScreen } from './register-screen/register-screen';
import { ReactiveFormsModule } from '@angular/forms';
import { UserloginScreen } from './userlogin-screen/userlogin-screen';
import { AmigoFormComponent } from '../amigo-form-renderer/amigo-form.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TokenInterceptor } from '../interceptors/TokenInterceptor';
import { LoaderInterceptor } from '../interceptors/LoaderInterceptor';
import { provideAmigoForm } from '../amigo-form-renderer/config';


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
  ],

   providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    

    provideAmigoForm(
      {
        apiBaseUrl: 'http://3.6.68.94/services/form-builder/forms',
        // endpoints: {
        //   getFormById: (id) =>`/services/form-builder/forms/${id}`,
        // },
      },
      () => sessionStorage.getItem('authToken') // OR: () => inject(AuthService).getAuthToken()
    ),
  ],



})

export class LoginModule { }
