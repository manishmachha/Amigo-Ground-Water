import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NocApplicationDetailsService } from '../../services/noc-application-details-service';
import { MatDialog } from '@angular/material/dialog';
import { EditNocDetails } from '../edit-noc-details/edit-noc-details';

export interface Role {
  name: string;
}

export interface AssignedTo {
  fullName?: string;
  role?: Role;
}

export interface NocApplication {
  id: string;
  projectName: string;
  projectCategory: string;
  applicationNumber: string;
  createdAt: string;

  assignedTo?: AssignedTo;

  currentStage: string;
  status: string;

  category?: string;
  district: string;

  freshWaterDaily: string;
  freshWaterAnnual: string;
}

@Component({
  selector: 'app-noc-application-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './noc-application-details.html',
  styleUrl: './noc-application-details.css',
})
export class NocApplicationDetails implements OnInit {
  applicationData = signal<NocApplication[]>([]);

  nocApplicationDetails = inject(NocApplicationDetailsService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Clicked Application ID:', id);

    if (id) {
      this.loadApplicationData(id);
    }
  }

  application: NocApplication = {
    id: '1',
    projectName: 'Green Valley Apartments Phase-2',
    projectCategory: 'Under Scrutiny',
    applicationNumber: 'APP/2024/0235',
    createdAt: '10/2/2024',

    currentStage: 'Field Investigation',
    status: 'In Progress',

    category: 'Critical',
    district: 'Hyderabad',

    freshWaterDaily: '168 m³',
    freshWaterAnnual: '61.3K m³/year',
  };

  loadApplicationData(id: string) {
    // const applicantId = "6e60aebc-ae10-4452-a599-e211ab54da2b"

    this.nocApplicationDetails.nocApplicantionDetails(id).subscribe({
      next: (res: any) => {
        console.log('applicant response', res);
        this.applicationData.set([res.data]);
        this.nocApplicationDetails.currentApplication.set(res.data);
        console.log('applicant res:', this.applicationData());
      },
      error: (err) => {
        console.error('Failed to load applications', err);
      },
    });
  }

  readonly dialog = inject(MatDialog);

  takeAction() {
    alert('Take Action Clicked');
  }

  openEditNocDialog() {
    const data = this.applicationData()[0];
    console.log('data', data.projectCategory);

    if (!data) return;

    this.dialog.open(EditNocDetails, {
      width: '800px',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      data: data,
    });
  }
}
