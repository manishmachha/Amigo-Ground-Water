import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  otpSent = false;
  selectedRole = 'Citizen';

  roles = ['Citizen', 'NOC Holder', 'Tanker Supplier', 'Rig Owner'];

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