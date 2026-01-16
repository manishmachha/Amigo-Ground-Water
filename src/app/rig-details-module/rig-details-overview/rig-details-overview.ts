import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RigDetailsPage } from '../rig-details-page/rig-details-page';
import { RigOverviewService } from '../../services/rig-details.service';
import { RigOverview } from '../../models/rig-overview.model';
@Component({
  selector: 'app-rig-details-overview',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './rig-details-overview.html',
  styleUrl: './rig-details-overview.css',
})
export class RigDetailsOverview implements OnInit {

  overviewService = inject(RigOverviewService);
  rigState = inject(RigOverviewService);


  rig!: RigOverview;

  loading = true;

ngOnInit() {
    const storedRig = this.rigState.getRig();

    if (storedRig) {
      this.rig = storedRig;
    }
  }
}
