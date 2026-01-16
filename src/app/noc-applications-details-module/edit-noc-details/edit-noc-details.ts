import { Component, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AmigoFormComponent } from '@amigo/amigo-form-renderer';

@Component({
  selector: 'app-edit-noc-details',
  standalone: true,
  imports: [AmigoFormComponent],
  templateUrl: './edit-noc-details.html',
})
export class EditNocDetails {
  dialogRef = inject(MatDialogRef<EditNocDetails>);
  formId = '95d9dcf4-9e6b-4349-a8f6-2cfeaf5470c7';
  initialValues: any = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.mapDataToForm(data);
    }
  }

  mapDataToForm(data: any) {
    // Helper to parse numbers from strings like "168 m³"
    const parseNumber = (val: any) => {
      if (val === null || val === undefined) return null;
      if (typeof val === 'number') return val;
      if (typeof val === 'string') {
        const num = parseFloat(val.replace(/[^\d.-]/g, ''));
        return isNaN(num) ? null : num;
      }
      return null;
    };

    this.initialValues = {
      projectName: data.projectName,
      projectCategory: data.projectCategory,
      nocType: data.nocType, // Assuming these exist in the full API response
      applicantType: data.applicantType,
      projectStatus: data.status, // Mapping 'status' to 'projectStatus'
      applicantName: data.applicantName,
      organizationName: data.organizationName,
      mobileNumber: data.mobileNumber,
      email: data.email,
      addressLine1: data.addressLine1,
      villageTown: data.villageTown,
      mandal: data.mandal,
      district: data.district,
      surveyNumbers: data.surveyNumbers,
      latitude: data.latitude,
      longitude: data.longitude,
      watershedCode: data.watershedCode,
      assessmentCategory: data.category, // Mapping 'category' to 'assessmentCategory'
      freshWaterDaily: parseNumber(data.freshWaterDaily),
      freshWaterAnnual: parseNumber(data.freshWaterAnnual),
      primaryUse: data.primaryUse,
    };

    console.log('EditNocDetails Initial Values:', this.initialValues);
  }

  onFormSubmitted(event: any) {
    console.log('Form submitted:', event);
    this.dialogRef.close(true); // Close with success result
  }

  onFormSubmitFailed(err: any) {
    console.error('Form submit failed:', err);
  }
}
