import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export interface RigMovement {
  rigId: string;
  owner: string;
  from: string;
  to: string;
  movementDate: string;
  status: 'In Transit' | 'Reached' | 'Unauthorized';
}

@Component({
  selector: 'app-rig-management-movement-tracking',
  standalone: true,
  templateUrl: './rig-management-movement-tracking.html',
  styleUrl: './rig-management-movement-tracking.css',
    imports: [MatTable, CommonModule, MatPaginator, MatSort, MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule]

})
export class RigManagementMovementTracking {
    displayedColumns: string[] = [
    'rigId',
    'owner',
    'from',
    'to',
    'movementDate',
    'status',
    'actions'
  ];

  dataSource = new MatTableDataSource<RigMovement>([
    {
      rigId: 'RIG-2024-4521',
      owner: 'Sudhakar Drilling',
      from: 'Hyderabad',
      to: 'Gachibowli',
      movementDate: '2024-01-25',
      status: 'In Transit'
    },
    {
      rigId: 'RIG-2024-3876',
      owner: 'Rajesh Bore Works',
      from: 'Rangareddy',
      to: 'Shamshabad',
      movementDate: '2024-01-24',
      status: 'Reached'
    },
    {
      rigId: 'RIG-2024-4102',
      owner: 'Krishna Drilling',
      from: 'Medchal',
      to: 'Kompally',
      movementDate: '2024-01-23',
      status: 'Unauthorized'
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
      case 'In Transit':
        return 'bg-blue-50 text-blue-700';
      case 'Reached':
        return 'bg-green-50 text-green-700';
      case 'Unauthorized':
        return 'bg-red-50 text-red-700';
      default:
        return '';
    }
  }

  isUnauthorized(row: RigMovement): boolean {
    return row.status === 'Unauthorized';
  }


}
