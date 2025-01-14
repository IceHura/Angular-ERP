import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  orders: number[];
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private readonly apiUrl = 'http://localhost:3000/api/customers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  add(product: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  update(id: number, product: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${id}`, product);
  }
}
