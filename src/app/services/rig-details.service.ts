import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RigOverview } from '../models/rig-overview.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RigOverviewService {
  private http = inject(HttpClient);

  getRigOverview(rigId: string) {
    return this.http
      .get<any>(`http://13.200.126.121:3000/api/v1/rigs/${rigId}`)
      .pipe(map(res => res.data as RigOverview));
  }

  rigSubject = new BehaviorSubject<RigOverview | null>(null);
  rig$ = this.rigSubject.asObservable();

  setRig(rig: RigOverview) {
    this.rigSubject.next(rig);
  }

  getRig(): RigOverview | null {
    return this.rigSubject.value;
  }
}
