import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { SubproductCategory } from '../common/subproduct-category';

const SUBPRODUCT_CATEGORY_API = `${environment.baseUrl}`

@Injectable({
  providedIn: 'root'
})
export class SubproductCategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllSubcategories(): Observable<SubproductCategory[]> {
    return this.httpClient.get<SubproductCategory[]>(`${SUBPRODUCT_CATEGORY_API}/subcategories`);
  }
}
