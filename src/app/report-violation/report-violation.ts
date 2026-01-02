import { Component } from '@angular/core';

@Component({
  selector: 'app-report-violation',
  standalone: false,
  templateUrl: './report-violation.html',
  styleUrl: './report-violation.css',
})
export class ReportViolation {
  formId = '02acf12c-c4a5-4a82-a581-7eca93cae62d';

  onFormSubmitted(event: any) {
    // If schema had submitApiUrl => event = { payload, response, action }
    // Else => event = raw payload (backward compatible)
    console.log('submitted event:', event);
  }

  onFormSubmitFailed(err: any) {
    console.error('submit failed:', err);
  }

  cards = [
    {
      title: 'Confidential Reporting',
      description:
        'Your identity will be protected. Anonymous reporting is also available.',
      icon: 'bi-exclamation-triangle',
      iconColor: 'text-orange-600',
      border: 'border-orange-200',
      bg: 'from-orange-50 to-red-50',
    },
    {
      title: 'Field Verification',
      description:
        'Our team will inspect the reported location within 3 working days.',
      icon: 'bi-geo-alt',
      iconColor: 'text-blue-600',
      border: 'border-blue-200',
      bg: 'from-blue-50 to-cyan-50',
    },
    {
      title: 'Action Taken',
      description:
        'Confirmed violations will be subject to enforcement action under WALTA.',
      icon: 'bi-check-circle',
      iconColor: 'text-green-600',
      border: 'border-green-200',
      bg: 'from-green-50 to-emerald-50',
    },
  ];


  openFormBuilder() {
  window.open(
    'http://localhost:62132/form-builder',
  );
}

}
