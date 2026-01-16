import { AmigoFormComponent } from '@amigo/amigo-form-renderer';
import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-register-drilling-rig',
  standalone: true,
  imports: [AmigoFormComponent],
  templateUrl: './new-register-drilling-rig.html',
  styleUrl: './new-register-drilling-rig.css',
})
export class NewRegisterDrillingRig {

  router = inject(Router);
  snackBar = inject(MatSnackBar)
  
  formId = '5963cd04-0e3b-48d9-944b-a305fc87ed92';

  onFormSubmitted(event: any) {
    console.log('submitted event:', event);

    if (event?.response?.success) {

      // Show SnackBar
      this.snackBar.open(
        'NOC Form submitted successfully',
        'Close',
        {
          duration: 3000,          // 3 seconds
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        }
      );

      // Navigate AFTER snackbar shows
      setTimeout(() => {
        this.router.navigate(['/noc-applications']);
      }, 3000);
    }
  }

  onFormSubmitFailed(err: any) {
    this.snackBar.open(
      'Failed to submit NOC form',
      'Close',
      {
        duration: 3000,
        panelClass: ['error-snackbar']
      }
    );
    console.error('submit failed:', err);
  }
}
