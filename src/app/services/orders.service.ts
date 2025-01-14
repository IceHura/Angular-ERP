import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  id?: number; 
  productId: number; 
  quantity: number; 
  userId: number;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly apiUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  add(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  update(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/${id}`, order);
  }
}
