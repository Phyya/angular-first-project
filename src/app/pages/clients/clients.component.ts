import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})

// export class ClientsComponent {
//   displayedColumns: string[] = ['id', 'name', 'username', 'email'];
//   dataSource = ELEMENT_DATA;
// }
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['S/N', 'Name', 'Phone No', 'Address'];
  dataSource!: Clients;

  constructor(private clientService: ClientService) {}
  ngOnInit(): void {
    this.onGetClient();
  }

  onGetClient() {
    this.clientService.getClients().subscribe(
      (data) => {
        this.dataSource = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    ),
      () => {
        'complete';
      };
  }
}
