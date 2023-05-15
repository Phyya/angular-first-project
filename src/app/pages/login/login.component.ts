import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.username = params.get('username') ?? '';
      this.password = params.get('password') ?? '';
    });
  }

  login() {
    // Add your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.router.navigate(['/savestar']); // Replace '/another-path' with the desired path
  }
}
