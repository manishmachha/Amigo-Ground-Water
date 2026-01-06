import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAmigoForm } from '@amigo/amigo-form-renderer';
import { TokenInterceptor } from './interceptors/TokenInterceptor';
import { LoaderInterceptor } from './interceptors/LoaderInterceptor';
import { AuthService } from './services/auth-service';
import { AccessControlService } from './services/access-control-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },

    provideAmigoForm(
      {
        apiBaseUrl: 'http://3.6.68.94/services/form-builder/forms/single-form',
      },
      () => inject(AuthService).getAuthToken()
    ),
    provideAppInitializer(() => {
      const acl = inject(AccessControlService);
      acl.loadAccessData(); // subscribe-based; loads fast
    }),
  ],
};
