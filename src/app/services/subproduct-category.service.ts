import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { SubproductCategory } from '../common/subproduct-category';

const SUBPRODUCT_CATEGORY_API = `${environment.baseUrl}`

@Injectable({
  providedIn: 'root'
})
export class SubproductCategoryService {

  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  getAllSubcategories(): Observable<SubproductCategory[]> {
    return this.httpClient.get<SubproductCategory[]>(`${SUBPRODUCT_CATEGORY_API}/subcategories`);
  }
}
