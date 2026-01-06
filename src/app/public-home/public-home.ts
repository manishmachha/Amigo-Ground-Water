import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-public-home',
  standalone: true,
  templateUrl: './public-home.html',
  styleUrl: './public-home.css',
  imports: [CommonModule, FormsModule]
})
export class PublicHome {
searchText = '';

  quickActions = [
    {
      title: 'Apply for NOC',
      description: 'Submit new NOC application online',
      icon: 'bi-file-earmark-text',
      bg: 'bg-blue-500',
      iconColor: 'text-white'
    },
    {
      title: 'Track Application',
      description: 'Check NOC application status',
      icon: 'bi-search',
      bg: 'bg-green-500',
      iconColor: 'text-white'
    },
    {
      title: 'Report Unauthorized Well',
      description: 'Report illegal groundwater extraction',
      icon: 'bi-exclamation-triangle',
      bg: 'bg-orange-500',
      iconColor: 'text-white'
    },
    {
      title: 'Public Notices',
      description: 'View government orders and notices',
      icon: 'bi-info-circle',
      bg: 'bg-purple-500',
      iconColor: 'text-white'
    }
  ];

   districts = [
    {
      name: 'Hyderabad',
      status: 'Critical',
      statusColor: 'text-red-600',
      trendIcon: 'bi-graph-down-arrow',
      trendColor: 'text-red-500'
    },
    {
      name: 'Rangareddy',
      status: 'Semi-Critical',
      statusColor: 'text-orange-500',
      trendIcon: 'bi-graph-down-arrow',
      trendColor: 'text-red-500'
    },
    {
      name: 'Medchal-Malkajgiri',
      status: 'Semi-Critical',
      statusColor: 'text-orange-500',
      trendIcon: 'bi-dash',
      trendColor: 'text-gray-400'
    },
    {
      name: 'Sangareddy',
      status: 'Safe',
      statusColor: 'text-green-600',
      trendIcon: 'bi-graph-up-arrow',
      trendColor: 'text-green-500'
    }
  ];

  // Recent notices
  notices = [
    {
      type: 'Regulation',
      title: 'GWER-2023 Tariff Revision',
      date: '15/1/2024'
    },
    {
      type: 'Notice',
      title: 'Flow Meter Installation Deadline Extended',
      date: '10/1/2024'
    },
    {
      type: 'Alert',
      title: 'Critical Zone Restrictions - Hyderabad',
      date: '5/1/2024'
    }
  ];

  contactCards = [
    {
      title: 'Helpline',
      icon: 'bi-telephone',
      bg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      value: '040-23111111',
      subText: 'Mon–Fri, 10 AM – 5 PM'
    },
    {
      title: 'Email Support',
      icon: 'bi-envelope',
      bg: 'bg-green-100',
      iconColor: 'text-green-600',
      value: 'support@tggroundwater.gov.in',
      subText: 'Response within 48 hours'
    },
    {
      title: 'Head Office',
      icon: 'bi-geo-alt',
      bg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      value: 'Jalasoudha, Errum Manzil',
      subText: 'Hyderabad - 500082'
    }
  ];

  footerLinks = {
    quick: [
      'Apply for NOC',
      'Track Application',
      'Groundwater Status',
      'Public Notices'
    ],
    resources: [
      'GWER-2023 Guidelines',
      'WALTA Act',
      'NOC Application Forms',
      'FAQs'
    ]
  };

}
