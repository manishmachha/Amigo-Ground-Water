import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface DistrictData {
  district: string;
  totalRigs: number;
  active: number;
  drillingToday: number;
  violations: number;
}

@Component({
  selector: 'app-rig-management',
  standalone: true,
  templateUrl: './rig-management.html',
  styleUrl: './rig-management.css',
  imports: [CommonModule, RouterModule]
})
export class RigManagement {

  stats = [
    {
      title: 'Total Registered Wells',
      value: '12,847',
      sub: '+234 this month',
      icon: 'bi-droplet',
      bg: 'bg-blue-100',
      color: 'text-blue-600'
    },
    {
      title: 'Domestic Wells',
      value: '7,234',
      sub: '56.3% of total',
      icon: 'bi-grid',
      bg: 'bg-green-100',
      color: 'text-green-600'
    },
    {
      title: 'Agricultural Wells',
      value: '3,891',
      sub: '30.3% of total',
      icon: 'bi-graph-up-arrow',
      bg: 'bg-amber-100',
      color: 'text-amber-600'
    },
    {
      title: 'Industrial / Commercial',
      value: '1,722',
      sub: '13.4% of total',
      icon: 'bi-activity',
      bg: 'bg-purple-100',
      color: 'text-purple-600'
    },
    {
      title: 'Active Piezometers',
      value: '456',
      sub: '89% reporting',
      icon: 'bi-geo-alt',
      bg: 'bg-cyan-100',
      color: 'text-cyan-600'
    },
    {
      title: 'Recharge Structures',
      value: '2,103',
      sub: '78% operational',
      icon: 'bi-droplet-half',
      bg: 'bg-teal-100',
      color: 'text-teal-600'
    },
  ];

  
 
}
