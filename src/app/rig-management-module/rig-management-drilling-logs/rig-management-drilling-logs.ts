import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export interface DrillingLog {
  logId: string;
  rigId: string;
  wellId: string;
  owner: string;
  location: string;
  depth: string;
  date: string;
  status: 'Submitted' | 'Missing';
}

@Component({
  selector: 'app-rig-management-drilling-logs',
  standalone: true,
  templateUrl: './rig-management-drilling-logs.html',
  styleUrl: './rig-management-drilling-logs.css',
    imports: [MatTable, CommonModule, MatPaginator, MatSort, MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule]

})
export class RigManagementDrillingLogs {
displayedColumns: string[] = [
    'logId',
    'rigId',
    'wellId',
    'owner',
    'location',
    'depth',
    'date',
    'status',
    'actions'
  ];

  dataSource = new MatTableDataSource<DrillingLog>([
    {
      logId: 'LOG-2024-8901',
      rigId: 'RIG-2024-4521',
      wellId: 'WELL-HYD-12345',
      owner: 'Mr. Kumar',
      location: 'Gachibowli',
      depth: '85m',
      date: '2024-01-25',
      status: 'Submitted'
    },
    {
      logId: 'LOG-2024-8900',
      rigId: 'RIG-2024-3876',
      wellId: 'WELL-RR-67890',
      owner: 'ABC Industries',
      location: 'Shamshabad',
      depth: '120m',
      date: '2024-01-24',
      status: 'Submitted'
    },
    {
      logId: 'LOG-2024-8899',
      rigId: 'RIG-2024-4102',
      wellId: 'NOT DECLARED',
      owner: 'Unknown',
      location: 'Kompally',
      depth: '—',
      date: '—',
      status: 'Missing'
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getStatusClass(status: string): string {
    return status === 'Submitted'
      ? 'bg-green-50 text-green-700'
      : 'bg-red-50 text-red-700';
  }

  isMissing(row: DrillingLog): boolean {
    return row.status === 'Missing';
  }
}
