import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() options: string[] = [];
  selectedOption: string = '';

  onSelect(event: any) {
    const selectedValue = event.target.value;
    this.selectedOption = selectedValue;
  }
}
