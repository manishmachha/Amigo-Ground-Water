import { TAB } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


type Tab = 'personal' | 'contact' | 'documents' | 'security' | 'notifications';
// const formId = {form1:"614593df-46c1-40ca-94c2-9f38be704319",form2:"2e4c0744-4a7c-4a33-b1ad-ee2dffb23b97"};

@Component({
  selector: 'app-citizen-profile',
  standalone: false,
  templateUrl: './citizen-profile.html',
  styleUrl: './citizen-profile.css',
})
export class CitizenProfile {


formIdMap: Record<Tab, string> = {
  personal: 'b245b347-60b6-4798-9cb7-04860d9b7393',
  contact: '58d14e21-ab6d-462c-be52-7e3fb1fc8d59',
  documents: '800aeaef-1870-4c92-b0d7-ee1ab12da2d7',
  security: '2e4c0744-4a7c-4a33-b1ad-ee2dffb23b97 ',
  notifications: '614593df-46c1-40ca-94c2-9f38be704319',
};


  get currentFormId(): string {
  return this.formIdMap[this.activeTab];
}
    onFormSubmitted(event: any) {
      // If schema had submitApiUrl => event = { payload, response, action }
      // Else => event = raw payload (backward compatible)
      console.log('submitted event:', event);
    }

    onFormSubmitFailed(err: any) {
      console.error('submit failed:', err);
    }


activeTab: 'personal' | 'contact' | 'documents' | 'security' | 'notifications' = 'personal';
  editMode = {
  personal: false,
  contact: false,
  documents: false,
  security: false,
  notifications: false
};

  personalForm!: FormGroup;
  contactForm!: FormGroup;
  passwordForm!: FormGroup;
  notificationForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForms();
  }

  private initForms() {
    this.personalForm = this.fb.group({
      fullName: ['Rajesh Kumar'],
      dob: ['15-06-1985'],
      gender: ['Male'],
      aadhaar: ['XXXX-XXXX-1234'],
      pan: ['ABCDE1234F'],
    });

    this.contactForm = this.fb.group({
      email: ['rajesh.kumar@email.com'],
      mobile: ['+91 98765 43210'],
      altMobile: ['+91 87654 32109'],
      whatsapp: ['+91 98765 43210'],
      address1: ['H.No. 12-34/A, Street No. 5'],
      address2: ['Kukatpally'],
      city: ['Hyderabad'],
      district: ['Hyderabad'],
      state: ['Telangana'],
      pin: ['500072'],
    });

    this.passwordForm = this.fb.group({
      currentPassword: [''],
      newPassword: [''],
      confirmPassword: [''],
    });

    this.notificationForm = this.fb.group({
      appEmail: [true],
      appSMS: [true],
      appWhatsapp: [true],
      payEmail: [true],
      paySMS: [true],
      compEmail: [true],
      compWhatsapp: [true],
      compPortal: [true],
    });
  }

  switchTab(tab: Tab) {
    this.activeTab = tab;
  }

 enableEdit(tab: keyof typeof this.editMode) {
  this.editMode[tab] = true;
}
 cancelEdit(tab: keyof typeof this.editMode) {
  this.editMode[tab] = false;
}

 saveChanges(tab: keyof typeof this.editMode) {
  // API / amigo-form submit already handled
  this.editMode[tab] = false;
}
}
