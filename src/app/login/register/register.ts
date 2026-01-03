import { Component } from '@angular/core';

@Component({
  selector: 'app-register-screen',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  formId = 'cac18191-a787-4777-b96d-beeeaaaf1b5c';

  onFormSubmitted(event: any) {
    // If schema had submitApiUrl => event = { payload, response, action }
    // Else => event = raw payload (backward compatible)
    console.log('submitted event:', event);
  }

  onFormSubmitFailed(err: any) {
    console.error('submit failed:', err);
  }

}
