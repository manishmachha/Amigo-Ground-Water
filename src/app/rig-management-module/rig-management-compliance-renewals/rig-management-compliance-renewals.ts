import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export interface ComplianceRow {
  rigId: string;
  owner: string;
  registrationExpiry: string;
  daysLeft: string;
  status: 'Active' | 'Expiring Soon';
  violations: number;
  actionRequired: string;
}

@Component({
  selector: 'app-rig-management-compliance-renewals',
  standalone: true,
  templateUrl: './rig-management-compliance-renewals.html',
  styleUrl: './rig-management-compliance-renewals.css',
    imports: [MatTable, CommonModule, MatPaginator, MatSort, MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule]

})
export class RigManagementComplianceRenewals {
  displayedColumns: string[] = [
    'rigId',
    'owner',
    'registrationExpiry',
    'daysLeft',
    'status',
    'violations',
    'actionRequired',
    'actions'
  ];

  dataSource = new MatTableDataSource<ComplianceRow>([
    {
      rigId: 'RIG-2024-3654',
      owner: 'Venkat Bore Services',
      registrationExpiry: '2025-09-04',
      daysLeft: '223 days',
      status: 'Active',
      violations: 0,
      actionRequired: 'On Track',
    },
    {
      rigId: 'RIG-2024-2341',
      owner: 'Mahesh Drilling',
      registrationExpiry: '2024-03-15',
      daysLeft: '49 days',
      status: 'Expiring Soon',
      violations: 1,
      actionRequired: 'Renewal Due',
    },
    {
      rigId: 'RIG-2024-1987',
      owner: 'Ramesh Works',
      registrationExpiry: '2024-02-28',
      daysLeft: '34 days',
      status: 'Expiring Soon',
      violations: 0,
      actionRequired: 'Renewal Due',
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getStatusClass(status: string): string {
    return status === 'Active'
      ? 'bg-green-50 text-green-700'
      : 'bg-orange-50 text-orange-700';
  }
}