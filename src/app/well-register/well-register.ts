import { Component } from '@angular/core';

@Component({
  selector: 'app-well-register',
  standalone: false,
  templateUrl: './well-register.html',
  styleUrl: './well-register.css',
})
export class WellRegister {
  formId = '02acf12c-c4a5-4a82-a581-7eca93cae62d';

  onFormSubmitted(event: any) {
    // If schema had submitApiUrl => event = { payload, response, action }
    // Else => event = raw payload (backward compatible)
    console.log('submitted event:', event);
  }

  onFormSubmitFailed(err: any) {
    console.error('submit failed:', err);
  }
}
