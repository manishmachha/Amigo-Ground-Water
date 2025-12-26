import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'http://3.6.68.94/services/user/api/users';
  private authToken: string | null = sessionStorage.getItem('authToken');
  private isLoggedIn: boolean = sessionStorage.getItem('isLoggedIn') === 'true';
  private role: string | null = sessionStorage.getItem('userRole');

  constructor(private http: HttpClient) {}

  getOtp(otpRequest: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/request-otp`, otpRequest);
  }

  login(creds: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, creds);
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

  logout(): Observable<any> {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole');
    const headers = this.authToken ? { Authorization: `Bearer ${this.authToken}` } : {};
    return this.http.post(`${this.baseUrl}/logout`, { headers })
  }

  signUp(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }
}
