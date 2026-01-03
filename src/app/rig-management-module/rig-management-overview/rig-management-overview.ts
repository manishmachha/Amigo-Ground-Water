import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface DistrictData {
  district: string;
  totalRigs: number;
  active: number;
  drillingToday: number;
  violations: number;
}

@Component({
  selector: 'app-rig-management-overview',
  standalone: false,
  templateUrl: './rig-management-overview.html',
  styleUrl: './rig-management-overview.css',
})
export class RigManagementOverview {
 displayedColumns: string[] = [
    'district',
    'totalRigs',
    'active',
    'drillingToday',
    'violations'
  ];

  dataSource = new MatTableDataSource<DistrictData>([
    {
      district: 'Hyderabad',
      totalRigs: 245,
      active: 198,
      drillingToday: 45,
      violations: 8
    },
    {
      district: 'Rangareddy',
      totalRigs: 189,
      active: 156,
      drillingToday: 32,
      violations: 6
    },
    {
      district: 'Medchal-Malkajgiri',
      totalRigs: 167,
      active: 142,
      drillingToday: 28,
      violations: 5
    },
     {
      district: 'Medchal-Malkajgiri',
      totalRigs: 167,
      active: 142,
      drillingToday: 28,
      violations: 5
    },
     {
      district: 'Medchal-Malkajgiri',
      totalRigs: 167,
      active: 142,
      drillingToday: 28,
      violations: 5
    },
     {
      district: 'Medchal-Malkajgiri',
      totalRigs: 167,
      active: 142,
      drillingToday: 28,
      violations: 5
    },
     {
      district: 'Medchal-Malkajgiri',
      totalRigs: 167,
      active: 142,
      drillingToday: 28,
      violations: 5
    },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
