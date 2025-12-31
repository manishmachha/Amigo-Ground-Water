import { Component } from '@angular/core';

@Component({
  selector: 'app-citizen-profile',
  standalone: false,
  templateUrl: './citizen-profile.html',
  styleUrl: './citizen-profile.css',
})
export class CitizenProfile {
 formId = '3ee6e50f-f1ee-47b5-bef2-00ed62063224';

  onFormSubmitted(event: any) {
    // If schema had submitApiUrl => event = { payload, response, action }
    // Else => event = raw payload (backward compatible)
    console.log('submitted event:', event);
  }

  onFormSubmitFailed(err: any) {
    console.error('submit failed:', err);
  }
}
