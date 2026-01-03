import { Component } from '@angular/core';

@Component({
  selector: 'app-submit-greviance',
  standalone: false,
  templateUrl: './submit-greviance.html',
  styleUrl: './submit-greviance.css',
})
export class SubmitGreviance {
 formId = '111df90b-b6da-42da-bf9e-a2fb37057e23';

  onFormSubmitted(event: any) {
    // If schema had submitApiUrl => event = { payload, response, action }
    // Else => event = raw payload (backward compatible)
    console.log('submitted event:', event);
  }

  onFormSubmitFailed(err: any) {
    console.error('submit failed:', err);
  }
 
}
