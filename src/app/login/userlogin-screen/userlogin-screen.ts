import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth-service';
import { Router } from '@angular/router';
import { TokenInterceptor } from '../../interceptors/TokenInterceptor';

type LoginMode = 'password' | 'otp';
@Component({
  selector: 'app-userlogin-screen',
  standalone: false,
  templateUrl: './userlogin-screen.html',
  styleUrl: './userlogin-screen.css',
})
export class UserloginScreen {

  constructor(private authService: AuthService, private router: Router) { }

  formId = 'e3346c85-4745-4a9e-9d9f-b4238cbb0778';



  onFormSubmitted(event: any) {
    // If schema had submitApiUrl => event = { payload, response, action }
    // Else => event = raw payload (backward compatible)
    console.log('submitted event:', event);
    if (event.response.success) {
      this.authService.setLoginStatus(true);
      this.authService.setAuthToken(event.response.data.token);
      this.authService.setUserRole(event.response.data.user.role.name);
      this.router.navigate(['/citizen-portal']);
      
    }
  }

  onFormSubmitFailed(err: any) {
    console.error('submit failed:', err);
  }



}
