import { Component, inject, OnInit, signal } from '@angular/core';
import { ApplicantInfo } from '../../models/noc-application-details-applicant-model';
import { NocApplicationDetailsService } from '../../services/noc-application-details-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noc-application-details-applicant',
  templateUrl: './noc-application-details-applicant.html',
  styleUrl: './noc-application-details-applicant.css',
  imports:[CommonModule]
})
export class NocApplicationDetailsApplicant implements OnInit {

  applicantInfo = signal<ApplicantInfo []>([]);

  nocApplicantInfo = inject(NocApplicationDetailsService);

  ngOnInit(): void {
    this.loadApplicantInfo();
  }

  loadApplicantInfo() {
    const applicantId = '6e60aebc-ae10-4452-a599-e211ab54da2b';

    this.nocApplicantInfo.nocApplicantDetails(applicantId).subscribe({
      next: (res: any) => {
        console.log('API response', res);
        this.applicantInfo.set([res.data.applicant]); 
      },
      error: (err) => {
        console.error('Failed To Load Applicant Data', err);
      }
    });
  }
}
