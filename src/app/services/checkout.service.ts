import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Purchase } from '../common/purchase';

const CHECKOUT_API = `${environment.baseUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  saveOrder(purchase: Purchase) : Observable<any> {
    return this.httpClient.post<Purchase>(`${CHECKOUT_API}/purchase`, purchase);
  }
}
