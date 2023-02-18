import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { OrderHistory } from '../common/order-history';

const ORDERS_API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private httpClient: HttpClient) { }

  getOrderHistory(email: string): Observable<OrderHistory[]> {
    return this.httpClient.get<OrderHistory[]>(`${ORDERS_API}/orders?email=${email}`);
  }
}
