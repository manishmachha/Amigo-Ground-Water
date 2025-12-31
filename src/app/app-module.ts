import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/TokenInterceptor';
import { LoaderInterceptor } from './interceptors/LoaderInterceptor';
import { provideAmigoForm } from './amigo-form-renderer/config';
import { CommonModule } from '@angular/common';
import { PublicHome } from './public-home/public-home';
import { CitizenPortal } from './citizen-portal/citizen-portal';
import { WellRegister } from './well-register/well-register';
import { AmigoFormComponent } from './amigo-form-renderer/amigo-form.component';
import { Dashboard } from './dashboard/dashboard';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NocPermissions } from './noc-permissions/noc-permissions';
import { MonitoringCompliance } from './monitoring-compliance/monitoring-compliance';
import { EnforcementViolations } from './enforcement-violations/enforcement-violations';
import { ReportViolation } from './report-violation/report-violation';
import { WellsAssets } from './wells-assets/wells-assets';
import { ApplyNoc } from './apply-noc/apply-noc';

@NgModule({
  declarations: [App, PublicHome, CitizenPortal, WellRegister, Dashboard, NocPermissions, MonitoringCompliance, EnforcementViolations,App, PublicHome, CitizenPortal, WellRegister, ReportViolation, WellsAssets, ApplyNoc],
  imports: [BrowserModule,
     AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      AmigoFormComponent,
      MatCardModule,
      MatTableModule,
      MatChipsModule,
      MatButtonModule,
      MatDividerModule,
      MatPaginatorModule, // ✅ REQUIRED
    MatSortModule ,
     BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AmigoFormComponent,
    ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    

    provideAmigoForm(
      {
        apiBaseUrl: 'http://3.6.68.94/services/form-builder/forms/single-form',
        // endpoints: {
        //   getFormById: (id) => `/services/form-builder/forms/${id}`,
        // },
      },
      () => sessionStorage.getItem('authToken') // OR: () => inject(AuthService).getAuthToken()
    ),
  ],



  bootstrap: [App],
})
export class AppModule {}