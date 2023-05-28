import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() title: any;
  doneIcon: string = 'done';
  calendarIcon: string = 'Daterange';
  currentDate: string = new Date().toLocaleDateString();
}
