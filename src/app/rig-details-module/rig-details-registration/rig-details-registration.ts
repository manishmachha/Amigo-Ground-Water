import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RigOverview } from '../../models/rig-overview.model';
import { RigOverviewService } from '../../services/rig-details.service';

@Component({
  selector: 'app-rig-details-registration',
  imports: [CommonModule],
  templateUrl: './rig-details-registration.html',
  styleUrl: './rig-details-registration.css',
})
export class RigDetailsRegistration {
rig!: RigOverview;

  rigState = inject(RigOverviewService);

  ngOnInit() {
    const data = this.rigState.getRig();
    if (data) {
      this.rig = data;
    }
  }

  getDaysRemaining(expiry: string | null): number | null {
    if (!expiry) return null;
    const diff =
      new Date(expiry).getTime() - new Date().getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }
}
