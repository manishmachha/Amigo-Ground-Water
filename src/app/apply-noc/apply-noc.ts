import { Component } from '@angular/core';

@Component({
  selector: 'app-apply-noc',
  standalone: false,
  templateUrl: './apply-noc.html',
  styleUrl: './apply-noc.css',
})
export class ApplyNoc {
  formId = '95d9dcf4-9e6b-4349-a8f6-2cfeaf5470c7';

   onFormSubmitted(event: any) {
    // If schema had submitApiUrl => event = { payload, response, action }
    // Else => event = raw payload (backward compatible)
    console.log('submitted event:', event);
  }

  onFormSubmitFailed(err: any) {
    console.error('submit failed:', err);
  }

}
