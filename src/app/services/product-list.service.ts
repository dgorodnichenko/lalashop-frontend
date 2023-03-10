import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../common/product';

const PRODUCT_API = `${environment.baseUrl}`

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${PRODUCT_API}/products`);
  }

  getProductsByCategory(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${PRODUCT_API}/category/${id}`);
  }

  getProductsByName(name: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${PRODUCT_API}/search?keyword=${name}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${PRODUCT_API}/product/${id}`);
  }
}
