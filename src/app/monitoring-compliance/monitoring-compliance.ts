import { AfterViewInit, ViewChild,Component } from '@angular/core';
// import Chart from 'chart.js/auto';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-monitoring-compliance',
  standalone: true,
  templateUrl: './monitoring-compliance.html',
  styleUrl: './monitoring-compliance.css',
  imports: [CommonModule, MatPaginator, MatSort, MatTable, MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule]
})
export class MonitoringCompliance {



//  ngAfterViewInit(): void {
//     this.loadWaterLevelTrendChart();
//     this.loadDistrictComplianceChart();
//     this.alertsDataSource.sort = this.sort;
//   }
  @ViewChild(MatSort) sort!: MatSort;


   alertColumns = [
    'alertId',
    'type',
    'location',
    'district',
    'severity',
    'value',
    'timestamp',
    'status',
    'actions'
  ];

  alertsDataSource = new MatTableDataSource([
    {
      alertId: 'ALT-2024-1456',
      type: 'Water Level Critical',
      location: 'Piezometer #P-HYD-234',
      district: 'Hyderabad',
      severity: 'High',
      value: '5.2m (below threshold 6.0m)',
      timestamp: '2024-01-25 08:30 AM',
      status: 'Active'
    },
    {
      alertId: 'ALT-2024-1455',
      type: 'Flow Meter Offline',
      location: 'NOC-IND-2023-4567',
      district: 'Rangareddy',
      severity: 'Medium',
      value: 'No data for 48hrs',
      timestamp: '2024-01-25 07:15 AM',
      status: 'Active'
    },
    {
      alertId: 'ALT-2024-1454',
      type: 'Quality Parameter Breach',
      location: 'Piezometer #P-MDK-089',
      district: 'Medak',
      severity: 'High',
      value: 'TDS: 1850 mg/L (limit 1500)',
      timestamp: '2024-01-24 09:45 PM',
      status: 'Acknowledged'
    },
    {
      alertId: 'ALT-2024-1453',
      type: 'Missing WL Submission',
      location: 'NOC-MIN-2022-3421',
      district: 'Nalgonda',
      severity: 'Low',
      value: '15+ days overdue',
      timestamp: '2024-01-24 06:30 PM',
      status: 'Active'
    }
  ]);

  severityClass(severity: string) {
    return {
      'bg-red-100 text-red-700': severity === 'High',
      'bg-orange-100 text-orange-700': severity === 'Medium',
      'bg-yellow-100 text-yellow-700': severity === 'Low',
    };
  }

  statusClass(status: string) {
    return {
      'bg-red-100 text-red-700': status === 'Active',
      'bg-gray-100 text-gray-700': status === 'Acknowledged',
    };
  }

  // loadWaterLevelTrendChart() {
  //   new Chart('waterLevelTrendChart', {
  //     type: 'line',
  //     data: {
  //       labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //       datasets: [
  //         {
  //           label: 'Average',
  //           data: [12.4, 11.7, 10.1, 9.5, 8.7, 9.2],
  //           borderColor: '#2563EB',
  //           backgroundColor: '#2563EB',
  //           tension: 0.35,
  //           pointRadius: 4,
  //         },
  //         {
  //           label: 'Maximum',
  //           data: [18.5, 17.3, 15.6, 14.8, 13.4, 14.1],
  //           borderColor: '#EF4444',
  //           backgroundColor: '#EF4444',
  //           tension: 0.35,
  //           pointRadius: 4,
  //         },
  //         {
  //           label: 'Minimum',
  //           data: [8.1, 7.4, 6.8, 6.0, 5.2, 5.9],
  //           borderColor: '#10B981',
  //           backgroundColor: '#10B981',
  //           tension: 0.35,
  //           pointRadius: 4,
  //         },
  //       ],
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: {
  //           position: 'bottom',
  //           labels: {
  //             usePointStyle: true,
  //             boxWidth: 8,
  //           },
  //         },
  //       },
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //           grid: { color: '#E5E7EB' },
  //           ticks: { stepSize: 5 },
  //         },
  //         x: {
  //           grid: { display: false },
  //         },
  //       },
  //     },
  //   });
  // }

  // loadDistrictComplianceChart() {
  //   new Chart('districtComplianceChart', {
  //     type: 'bar',
  //     data: {
  //       labels: ['Hyderabad', 'Rangareddy', 'Medak', 'Nalgonda', 'Karimnagar'],
  //       datasets: [
  //         {
  //           label: 'Water Level',
  //           data: [92, 88, 78, 85, 90],
  //           backgroundColor: '#3B82F6',
  //         },
  //         {
  //           label: 'Water Quality',
  //           data: [88, 92, 83, 87, 85],
  //           backgroundColor: '#10B981',
  //         },
  //         {
  //           label: 'Flow Meters',
  //           data: [85, 79, 72, 81, 83],
  //           backgroundColor: '#F59E0B',
  //         },
  //       ],
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: {
  //           position: 'bottom',
  //           labels: {
  //             boxWidth: 12,
  //           },
  //         },
  //       },
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //           max: 100,
  //           grid: { color: '#E5E7EB' },
  //         },
  //         x: {
  //           grid: { display: false },
  //         },
  //       },
  //     },
  //   });
  // }
}
