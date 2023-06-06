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
  date = new Date();
  options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

  formattedDate = this.date
    .toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .replace(/(\d+)(?:st|nd|rd|th)/, '$1<sup>$2</sup>');
}
