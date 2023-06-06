import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent {
  @Input() value: number = 20;
  getValue(): number {
    return Number.isInteger(this.value)
      ? Number(this.value)
      : Number(this.value.toFixed(2));
  }
}
