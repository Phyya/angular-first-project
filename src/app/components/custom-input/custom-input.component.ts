import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent {
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Output() valueChange = new EventEmitter<string>();

  value: string;

  constructor() {}

  ngOnInit() {}

  onInputChange() {
    this.valueChange.emit(this.value);
  }
}
