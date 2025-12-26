import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authToken: string | null = sessionStorage.getItem('authToken');
  private isLoggedIn: boolean = sessionStorage.getItem('isLoggedIn') === 'true';
  private role: string | null = sessionStorage.getItem('userRole');

  constructor(private http: HttpClient) {}

  getOtp(otpRequest: any): Observable<any> {
    return this.http.post(
      'http://3.6.68.94/services/user/api/users/request-otp',
      otpRequest
    );
  }

  login(creds: any): Observable<any> {
    return this.http.post(
      'http://3.6.68.94/services/user/api/users/login',
      creds
    );
  }

  setAuthToken(token: string): void {
    this.authToken = token;
    sessionStorage.setItem('authToken', token);
  }

  getAuthToken(): string | null {
    return this.authToken;
  }

  setUserRole(role: string): void {
    this.role = role;
    sessionStorage.setItem('userRole', role);
  }
  getUserRole(): string | null {
    return this.role;
  }

  setLoginStatus(status: boolean): void {
    this.isLoggedIn = status;
    sessionStorage.setItem('isLoggedIn', String(status));
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    this.authToken = null;
    this.isLoggedIn = false;
    this.role = null;
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole');
  }
}
