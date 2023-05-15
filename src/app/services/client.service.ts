import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients, IClient } from '../interfaces/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<Clients> {
    return this.httpClient.get<Clients>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
