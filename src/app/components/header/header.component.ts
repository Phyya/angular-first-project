import { Component, Input } from '@angular/core';
import { DateRange } from '@material-ui/icons';
// import { Done } from '@material-ui/icons';
// import { SvgIconComponent } from '@material-ui/icons';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() title: any;
  doneIcon: string = 'done';
  calendarIcon: string = 'Daterange';
}
