import { AmigoFormComponent } from '@amigo/amigo-form-renderer';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NocApplicationDetailsService } from '../../services/noc-application-details-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noc-application-details-approval',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './noc-application-details-approval.html',
  styleUrl: './noc-application-details-approval.css',
})
export class NocApplicationDetailsApproval implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private nocService = inject(NocApplicationDetailsService);

  applicationId: string | null = null;
  approveRemarks = '';
  rejectRemarks = '';
  isProcessing = false;

  ngOnInit() {
    this.route.parent?.paramMap.subscribe((params) => {
      this.applicationId = params.get('id');
    });
  }

  performAction(actionKey: 'APPROVE' | 'REJECT') {
    if (!this.applicationId) return;

    const remarks = actionKey === 'APPROVE' ? this.approveRemarks : this.rejectRemarks;

    if (!remarks.trim()) {
      alert('Please enter remarks before proceeding.');
      return;
    }

    if (!confirm(`Are you sure you want to ${actionKey} this application?`)) {
      return;
    }

    this.isProcessing = true;
    this.nocService.performAction(this.applicationId, actionKey, {}, remarks).subscribe({
      next: () => {
        alert(`Application ${actionKey === 'APPROVE' ? 'Approved' : 'Rejected'} Successfully`);
        this.router.navigate(['/noc-applications']);
        this.isProcessing = false;
      },
      error: (err) => {
        console.error('Action failed', err);
        alert('Failed to perform action. Please try again.');
        this.isProcessing = false;
      },
    });
  }
}
