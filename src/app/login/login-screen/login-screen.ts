import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  standalone: false,
  templateUrl: './login-screen.html',
  styleUrl: './login-screen.css',
})
export class LoginScreen implements OnInit {
  loginForm!: FormGroup;
  otpSent = false;
  selectedRole = 'Citizen';

  roles = ['Citizen', 'NOC Holder', 'Tanker Supplier', 'Rig Owner'];
  formId = '8724ee6f-7fd5-4c8e-aac4-883134d1712f';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      otp: [''],
    });
  }

  sendOtp(): void {
    if (this.loginForm.get('mobile')?.invalid) {
      this.loginForm.get('mobile')?.markAsTouched();
      return;
    }

    this.otpSent = true;
    this.loginForm.get('otp')?.setValidators([Validators.required, Validators.pattern(/^\d{6}$/)]);
    this.loginForm.get('otp')?.updateValueAndValidity();
  }

  verifyOtp(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log('Login Success', this.loginForm.value, this.selectedRole);
  }

  changeNumber(): void {
    this.otpSent = false;
    this.loginForm.get('otp')?.reset();
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}