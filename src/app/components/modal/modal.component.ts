import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() backgroundColor: string = '#fff';
  @Input() color: string = '#000';
  @Input() showClose: boolean = true;
  @Output() onClose?: EventEmitter<any> = new EventEmitter<any>();

  closeModal(): void {
    this.onClose.emit();
  }
  preventClose(event: Event): void {
    event.stopPropagation();
  }
  ngOnInit(): void {
    console.log(this.backgroundColor, 'the bg');
  }
}
