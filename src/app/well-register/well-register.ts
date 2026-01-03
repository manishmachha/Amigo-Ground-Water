import { Component } from '@angular/core';

@Component({
  selector: 'app-well-register',
  standalone: false,
  templateUrl: './well-register.html',
  styleUrl: './well-register.css',
})
export class WellRegister {
  formId = '8724ee6f-7fd5-4c8e-aac4-883134d1712f';

   onFormSubmitted(event: any) {
    // If schema had submitApiUrl => event = { payload, response, action }
    // Else => event = raw payload (backward compatible)
    console.log('submitted event:', event);
  }

  onFormSubmitFailed(err: any) {
    console.error('submit failed:', err);
  }
}
