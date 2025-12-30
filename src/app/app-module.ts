import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/TokenInterceptor';
import { LoaderInterceptor } from './interceptors/LoaderInterceptor';
import { CommonModule } from '@angular/common';
import { PublicHome } from './public-home/public-home';
import { CitizenPortal } from './citizen-portal/citizen-portal';
import { WellRegister } from './well-register/well-register';
// import { AmigoFormComponent } from './amigo-form-renderer/amigo-form.component';
// import { provideAmigoForm } from './amigo-form-renderer/config';
import { AmigoFormComponent, provideAmigoForm } from '@amigo/amigo-form-renderer';

@NgModule({
  declarations: [App, PublicHome, CitizenPortal, WellRegister],
  imports: [BrowserModule,
     AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      AmigoFormComponent
    ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    provideAmigoForm(
    {
      apiBaseUrl: 'http://3.6.68.94/services/form-builder/forms',

    },
    () => sessionStorage.getItem('authToken')
  ),
  ],
  bootstrap: [App],
})
export class AppModule {}