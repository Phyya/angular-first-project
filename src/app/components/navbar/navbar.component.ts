import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user = JSON.parse(localStorage.getItem('opti-user-detail'));
  queryString = new URLSearchParams({
    balance: this.user.totalSavingsBalance,
  }).toString();
  url = `https://optiverse-mobile-app.netlify.app/home?${this.queryString}`;
  getBalance() {}
}
