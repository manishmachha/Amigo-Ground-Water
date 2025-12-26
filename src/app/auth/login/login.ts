import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-login-screen-dialogs',
  templateUrl: './login.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginSignupComponent {
  loading = false;
  showOtpField = false;
  errorMessage: string;
  loginForm: FormGroup;
  signupForm: FormGroup;

  isLoginMode = true; // 🔁 Toggle between Login & Signup

  //  Fixed role + utility
  readonly FIXED_ROLE = 'user';
  readonly UTILITY_ID = 'dfcfa630-2f2a-4ccf-888f-3f4fdd7204e8';

  //  Patterns
  readonly EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  readonly PHONE_PATTERN = /^[0-9]{10,15}$/;
  readonly PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,32}$/;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {
    //  Login form
    this.loginForm = this.fb.nonNullable.group({
      identifier: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      otp: [''],
    });

    //  Signup form
    this.signupForm = this.fb.nonNullable.group(
      {
        username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        email: ['', [Validators.pattern(this.EMAIL_PATTERN), Validators.maxLength(80)]],
        phone: ['', [Validators.pattern(this.PHONE_PATTERN)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32),
            Validators.pattern(this.PASSWORD_PATTERN),
          ],
        ],
      },
      {
        validators: [this.atLeastOneContactValidator.bind(this)],
      }
    );
  }

  ngOnInit(): void {
    if (this.loginService.getAuthToken()) {
      this.router.navigate(['/form-builder']);
    }
  }

  // convenience getters
  get lf() {
    return this.loginForm.controls;
  }

  get sf() {
    return this.signupForm.controls;
  }

  // Custom validator: either email or phone is required
  private atLeastOneContactValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email')?.value;
    const phone = control.get('phone')?.value;

    if (!email && !phone) {
      return { contactRequired: true };
    }

    return null;
  }

  // Toggle Login / Signup
  setMode(mode: 'login' | 'signup'): void {
    if ((mode === 'login' && this.isLoginMode) || (mode === 'signup' && !this.isLoginMode)) {
      return;
    }

    this.isLoginMode = mode === 'login';
    this.errorMessage = '';
    this.showOtpField = false;

    if (this.isLoginMode) {
      this.signupForm.reset();
    } else {
      this.loginForm.reset();
      this.enableOtpMode(false);
    }
  }

  /** Generate OTP */
  generateOtp(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.setLoading(true);
    this.errorMessage = '';

    const { identifier, password } = this.loginForm.getRawValue();
    const otpRequest = { identifier, password };

    this.loginService
      .getOtp(otpRequest)
      .pipe(finalize(() => this.setLoading(false)))
      .subscribe({
        next: () => {
          this.enableOtpMode(true);
          this.openSnackbar('✅ OTP sent successfully. Check your registered email or phone.');
        },
        error: (err) => this.handleError(err, 'Failed to generate OTP. Please try again.'),
      });
  }

  /** Verify OTP & Login */
  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.setLoading(true);
    this.errorMessage = '';

    const { identifier, password, otp } = this.loginForm.getRawValue();
    const creds = { identifier, password, otp };

    this.loginService
      .login(creds)
      .pipe(finalize(() => this.setLoading(false)))
      .subscribe({
        next: (res) => {
          console.log('Login response:', res);
          this.openSnackbar('Login successful! Redirecting...');
          
          sessionStorage.setItem('userName', res.user.name);
          this.loginService.setAuthToken(res.token);
          this.loginService.setLoginStatus(true);
          this.loginService.setUserRole(res.user.role);

          // Store user_id
          if (res.user?.user_id) {
            localStorage.setItem('userId', res.user.user_id);
            console.log('Stored userId:', res.user.user_id);
          } else {
            console.warn('User ID not found in response');
          }

          setTimeout(() => {
            this.router.navigate(['/form-builder']);
          }, 800);
        },
        error: (err) => this.handleError(err, 'Invalid OTP or credentials. Please try again.'),
      });
  }

  /** 🆕 Signup method  */
  signup(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.setLoading(true);
    this.errorMessage = '';

    const { username, name, email, phone, password } = this.signupForm.getRawValue();

    const payload: any = {
      username,
      name,
      role: this.FIXED_ROLE,
      utility_id: this.UTILITY_ID,
      contact_info: {},
      password,
    };

    if (email) {
      payload.contact_info.email = email;
    }
    if (phone) {
      payload.contact_info.phone = phone;
    }

    this.loginService
      .signUp(payload)
      .pipe(finalize(() => this.setLoading(false)))
      .subscribe({
        next: (res) => {
          console.log('Signup response:', res);
          this.openSnackbar('Account created successfully! Please login.');
          // switch to login mode & prefill identifier
          this.setMode('login');
          if (email || phone) {
            this.loginForm.patchValue({
              identifier: email || phone,
            });
          }
        },
        error: (err) => this.handleError(err, 'Failed to create account. Please try again.'),
      });
  }

  /**  toggle loading */
  private setLoading(value: boolean): void {
    this.loading = value;
  }

  /**  turn OTP mode on/off + validators */
  private enableOtpMode(enabled: boolean): void {
    this.showOtpField = enabled;
    const otpControl = this.lf['otp'];

    if (enabled) {
      otpControl.setValidators([Validators.required]);
    } else {
      otpControl.clearValidators();
      otpControl.reset();
    }

    otpControl.updateValueAndValidity();
  }

  private openSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  private handleError(err: any, fallbackMessage: string): void {
    this.errorMessage = err?.error?.message || fallbackMessage;
    this.openSnackbar(this.errorMessage);
    this.enableOtpMode(this.showOtpField);
  }
}
