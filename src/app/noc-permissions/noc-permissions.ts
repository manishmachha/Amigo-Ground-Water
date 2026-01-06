import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-noc-permissions',
  standalone: true,
  templateUrl: './noc-permissions.html',
  styleUrl: './noc-permissions.css',
  imports: [CommonModule]
})
export class NocPermissions {
applicationCategories = [
  { name: 'Mining', value: 156, percent: 25 },
  { name: 'Industrial', value: 324, percent: 45 },
  { name: 'Residential Apartments', value: 445, percent: 60 },
  { name: 'Packaged Water', value: 189, percent: 35 },
  { name: 'Bulk Water Supplier', value: 133, percent: 30 }
];

districtSummary = [
  { district: 'Hyderabad', total: 234, critical: 12 },
  { district: 'Rangareddy', total: 189, critical: 8 },
  { district: 'Medchal-Malkajgiri', total: 156, critical: 15 },
  { district: 'Sangareddy', total: 123, critical: 5 },
  { district: 'Karimnagar', total: 98, critical: 3 }
];
}
