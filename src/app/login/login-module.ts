import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideBrowserGlobalErrorListeners } from '@angular/core';

import { Login } from './login/login';
import { Register } from './register/register';
import { ReactiveFormsModule } from '@angular/forms';
import { Userlogin } from './userlogin/userlogin';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TokenInterceptor } from '../interceptors/TokenInterceptor';
import { LoaderInterceptor } from '../interceptors/LoaderInterceptor';
import { AmigoFormComponent, provideAmigoForm} from '@amigo/amigo-form-renderer';
import { AuthService } from '../services/auth-service';


@NgModule({
  declarations: [],

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },

    provideAmigoForm(
      {
        apiBaseUrl: 'http://3.6.68.94/services/form-builder/forms/single-form'
      },
       () => inject(AuthService).getAuthToken()
    ),
  ],
})
export class LoginModule {}
