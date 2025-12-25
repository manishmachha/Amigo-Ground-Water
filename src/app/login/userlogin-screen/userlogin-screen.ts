import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type LoginMode = 'password' | 'otp';
@Component({
  selector: 'app-userlogin-screen',
  standalone: false,
  templateUrl: './userlogin-screen.html',
  styleUrl: './userlogin-screen.css',
})
export class UserloginScreen implements OnInit {
  passwordForm!: FormGroup;
  otpForm!: FormGroup;

  mode: LoginMode = 'password';
  otpSent = false;
  showPassword = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // PASSWORD FORM
    this.passwordForm = this.fb.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false],
    });

    // OTP FORM
    this.otpForm = this.fb.group({
     mobile: ['', [Validators.required, this.emailOrMobileValidator]],
      otp: [''],
    });
  }

  emailOrMobileValidator(control: any) {
  const value = control.value;
  if (!value) return null;

  const mobileRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (mobileRegex.test(value) || emailRegex.test(value)) {
    return null; // ✅ valid
  }

  return { invalidContact: true }; // ❌ invalid
}


  switchMode(mode: LoginMode) {
    this.mode = mode;
    this.otpSent = false;

    this.passwordForm.reset({ remember: false });
    this.otpForm.reset();
  }

  loginWithPassword() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    console.log('Password Login', this.passwordForm.value);
  }

  sendOtp() {
    if (this.otpForm.get('mobile')?.invalid) {
      this.otpForm.get('mobile')?.markAsTouched();
      return;
    }

    this.otpSent = true;

    this.otpForm
      .get('otp')
      ?.setValidators([Validators.required, Validators.pattern(/^\d{6}$/)]);
    this.otpForm.get('otp')?.updateValueAndValidity();
  }


  verifyOtp() {
    if (this.otpForm.invalid) {
      this.otpForm.markAllAsTouched();
      return;
    }

    console.log('OTP Login', this.otpForm.value);
  }

  changeMobile() {
    this.otpSent = false;
    this.otpForm.get('otp')?.reset();
  }
}
