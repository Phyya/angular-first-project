import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

export interface TableColumn {
  header: string;
  field: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  datePipe: DatePipe = new DatePipe('en-US');
}
