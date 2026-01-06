import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export interface RigViolation {
  caseId: string;
  rigId: string;
  owner: string;
  violationType: string;
  location: string;
  date: string;
  severity: 'High' | 'Medium';
  actionTaken: string;
}

@Component({
  selector: 'app-rig-management-voilation-offences',
  standalone: true,
  templateUrl: './rig-management-voilation-offences.html',
  styleUrl: './rig-management-voilation-offences.css',
  imports: [CommonModule, MatPaginator, MatSort, MatTable, MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule]
})
export class RigManagementVoilationOffences {
displayedColumns: string[] = [
    'caseId',
    'rigId',
    'owner',
    'violationType',
    'location',
    'date',
    'severity',
    'actionTaken',
    'details'
  ];

  dataSource = new MatTableDataSource<RigViolation>([
    {
      caseId: 'VIOL-2024-123',
      rigId: 'RIG-2024-4102',
      owner: 'Krishna Drilling Co.',
      violationType: 'Illegal Drilling',
      location: 'Kompally',
      date: '2024-01-23',
      severity: 'High',
      actionTaken: 'Seizure Initiated',
    },
    {
      caseId: 'VIOL-2024-118',
      rigId: 'RIG-2024-3456',
      owner: 'ABC Drillers',
      violationType: 'No Drilling Log',
      location: 'Medak',
      date: '2024-01-20',
      severity: 'Medium',
      actionTaken: 'Notice Issued',
    },
    {
      caseId: 'VIOL-2024-115',
      rigId: 'RIG-2024-2987',
      owner: 'XYZ Drilling',
      violationType: 'Prohibited Area',
      location: 'Nalgonda',
      date: '2024-01-18',
      severity: 'High',
      actionTaken: 'Penalty Issued',
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getSeverityClass(severity: string): string {
    return severity === 'High'
      ? 'bg-red-50 text-red-700'
      : 'bg-orange-50 text-orange-700';
  }
}