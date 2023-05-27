import { Component } from '@angular/core';
import { Scheduled } from 'src/app/interfaces/scheduled-savings';
import { ScheduledService } from 'src/app/services/scheduled/scheduled.service';

@Component({
  selector: 'app-schedule-savings',
  templateUrl: './schedule-savings.component.html',
  styleUrls: ['./schedule-savings.component.css'],
})
export class ScheduleSavingsComponent {
  dataSource: Scheduled[] = [
    {
      name: 'Fund Lockit',
      date: new Date(),
      amount: 5000,
    },
    {
      name: 'Fund Lockit',
      date: new Date(),
      amount: 5000,
    },
    {
      name: 'Fund Lockit',
      date: new Date(),
      amount: 5000,
    },
    {
      name: 'Fund Lockit',
      date: new Date(),
      amount: 5000,
    },
    {
      name: 'Fund Lockit',
      date: new Date(),
      amount: 5000,
    },
  ];
  constructor(private scheduledService: ScheduledService) {}
}
