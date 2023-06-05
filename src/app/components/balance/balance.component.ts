import { Component, OnInit } from '@angular/core';
import { userDetails } from 'src/app/shared/data/data';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  userDetails: userDetails =
    JSON.parse(localStorage.getItem('opti-user-detail')) ?? {};
  showBalance: Boolean = false;
  ngOnInit(): void {
    console.log(this.userDetails);
  }
  toggleBalance(): void {
    console.log('clicking');
    this.showBalance = !this.showBalance;
  }
}
