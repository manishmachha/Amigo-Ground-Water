import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

export interface RegisteredRig {
  rigId: string;
  owner: string;
  type: string;
  district: string;
  regDate: string;
  validUntil: string;
  status: 'Active' | 'Suspended' | 'Seized';
}

@Component({
  selector: 'app-rig-management-registration-list',
  standalone: true,
  templateUrl: './rig-management-registration-list.html',
  styleUrl: './rig-management-registration-list.css',
  imports: [MatTable, CommonModule, MatPaginator, MatSort,  MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule]
})
export class RigManagementRegistrationList {

 displayedColumns: string[] = [
    'rigId',
    'owner',
    'type',
    'district',
    'regDate',
    'validUntil',
    'status',
    'actions'
  ];

  dataSource = new MatTableDataSource<RegisteredRig>([
    {
      rigId: 'RIG-2024-4521',
      owner: 'Sudhakar Drilling Services',
      type: 'DTH',
      district: 'Hyderabad',
      regDate: '2024-01-15',
      validUntil: '2026-01-14',
      status: 'Active'
    },
    {
      rigId: 'RIG-2024-3876',
      owner: 'Rajesh Bore Works',
      type: 'Rotary',
      district: 'Rangareddy',
      regDate: '2023-11-20',
      validUntil: '2025-11-19',
      status: 'Active'
    },
    {
      rigId: 'RIG-2024-4102',
      owner: 'Krishna Drilling Co.',
      type: 'DTH',
      district: 'Medchal',
      regDate: '2024-02-10',
      validUntil: '2026-02-09',
      status: 'Suspended'
    },
    {
      rigId: 'RIG-2024-3654',
      owner: 'Venkat Bore Services',
      type: 'Manual',
      district: 'Sangareddy',
      regDate: '2023-09-05',
      validUntil: '2025-09-04',
      status: 'Active'
    },
    {
      rigId: 'RIG-2024-4288',
      owner: 'Srinivas Drillers',
      type: 'Rotary',
      district: 'Karimnagar',
      regDate: '2024-03-12',
      validUntil: '2026-03-11',
      status: 'Seized'
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'bg-green-50 text-green-700';
      case 'Suspended':
        return 'bg-orange-50 text-orange-700';
      case 'Seized':
        return 'bg-red-50 text-red-700';
      default:
        return '';
    }
  }
}