import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.username = params.get('username') ?? '';
      this.password = params.get('password') ?? '';
    });
    if (this.username && this.password) {
      const user = { username: this.username };
      this.dataService.setUserData(user);
      this.router.navigate(['/home']);
    }
  }

  login() {
    this.router.navigate(['/home']);
  }
}
