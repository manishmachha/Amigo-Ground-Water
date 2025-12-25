import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-screen',
  standalone: false,
  templateUrl: './register-screen.html',
  styleUrl: './register-screen.css',
})
export class RegisterScreen implements OnInit {
  currentStep = 1;

  personalForm!: FormGroup;
  identityForm!: FormGroup;
  addressForm!: FormGroup;

  showPassword = false;
  showConfirmPassword = false;

  selectedFileName = '';


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalForm = this.fb.group({
      fullName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[A-Za-z ]+$/)]
      ],
      fatherName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[A-Za-z ]+$/)]
      ],
      gender: ['', Validators.required],

      mobile: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)]
      ],
      email: [
        '',
        [Validators.required, Validators.email]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
        ]
      ],
      confirmPassword: ['', Validators.required]
    },
      { validators: this.passwordMatchValidator }
    );

    this.identityForm = this.fb.group({
       idProofType: ['', Validators.required],
    idProofFile: [null, Validators.required],
    idProofNumber: ['', Validators.required],
  });

    this.addressForm = this.fb.group({
      doorNo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    street: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    mandal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    district: ['', Validators.required],
    village: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
    terms: [false, Validators.requiredTrue]
  });
  }

  next(): void {
    if (
      (this.currentStep === 1 && this.personalForm.valid) ||
      (this.currentStep === 2 && this.identityForm.valid)
    ) {
      this.currentStep++;
    }
  }

  back(): void {
    this.currentStep--;
  }

  completeRegistration(): void {
    if (this.addressForm.invalid) return;

    const payload = {
      ...this.personalForm.value,
      ...this.identityForm.value,
      ...this.addressForm.value
    };

    console.log('Registration Payload', payload);
    alert('Registration Completed Successfully');
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) return null;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  openFilePicker(fileInput: HTMLInputElement): void {
  if (!this.identityForm.get('idProofType')?.value) {
    alert('Please select ID Proof Type first');
    return;
  }
  fileInput.click();
}

  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) return;

  const file = input.files[0];
  this.selectedFileName = file.name;

  this.identityForm.patchValue({
    idProofFile: file
  });

  this.identityForm.get('idProofFile')?.updateValueAndValidity();
}

allowOnlyNumbers(event: KeyboardEvent): void {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }
}

}
