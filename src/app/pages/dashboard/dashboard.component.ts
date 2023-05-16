import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  username: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.username = '';
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const user = this.dataService.getUserData();
      this.username = user.username ?? '';
    });
  }
}
