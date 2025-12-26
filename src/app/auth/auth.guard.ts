import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { LoginService } from '../services/login-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.ensureAuthenticated(state.url);
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    const url = '/' + segments.map((segment) => segment.path).join('/');
    return this.ensureAuthenticated(url);
  }

  private ensureAuthenticated(redirectUrl: string): boolean | UrlTree {
    const token = this.loginService.getAuthToken();

    if (token) {
      return true;
    }

    return this.router.createUrlTree(['/login'], {
      queryParams: redirectUrl ? { returnUrl: redirectUrl } : undefined,
    });
  }
}
