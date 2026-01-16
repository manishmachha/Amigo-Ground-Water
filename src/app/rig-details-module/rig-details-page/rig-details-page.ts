import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RigOverview } from '../../models/rig-overview.model';
import { RigOverviewService } from '../../services/rig-details.service';




@Component({
  selector: 'app-rig-details-page',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './rig-details-page.html',
  styleUrl: './rig-details-page.css',
})



export class RigDetailsPage {

  router=inject(ActivatedRoute);
  overviewService=inject(RigOverviewService);
    rigState = inject(RigOverviewService);


  readonly rigId = '8da11780-2f25-47dd-bfc6-f32fe6ff9f71';

  rig!: RigOverview;
  loading = true;

   ngOnInit() {
    this.overviewService.getRigOverview(this.rigId).subscribe({
      next: (res) => {
        this.rig = res;
        this.rigState.setRig(res);
        this.loading = false;
      },
      error: (err) => {
        console.error('Rig overview API failed', err);
        this.loading = false;
      }
    });
  }


}
