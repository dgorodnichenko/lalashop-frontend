import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MainProductCategory } from '../common/main-product-category';

const MAIN_CATEGORY_API = `${environment.baseUrl}`

@Injectable({
  providedIn: 'root'
})
export class MainProductCategoryService {

  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  getAllMainCategories(): Observable<MainProductCategory[]> {
    return this.httpClient.get<MainProductCategory[]>(`${MAIN_CATEGORY_API}/main_categories`);
  }
}
