import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() backgroundColor: string = '#fff';
  @Input() color: string = '#000';
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  closeModal(): void {
    this.onClose.emit();
  }
  preventClose(event: Event): void {
    event.stopPropagation();
  }
}
