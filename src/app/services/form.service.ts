import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { City } from '../common/city';
import { Country } from '../common/country';

const COUNTRIES_API = `${environment.baseUrl}/countries`;
const CITIES_API = `${environment.baseUrl}/city`;

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  getAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(COUNTRIES_API);
  }

  getCitiesByCountryCode(code: string): Observable<City[]> {
    return this.httpClient.get<City[]>(`${CITIES_API}/${code}`)
  }

  getCreditCardMonth(startMonth: number): Observable<number[]> {
    let data: number[] = [];
    for(let month = startMonth; month <= 12; month++) {
      data.push(month);
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {
    let data: number[] = [];

    const startYear = new Date().getFullYear();
    const endYear = startYear + 10;

    for (let year = startYear; year <= endYear; year++) {
      data.push(year);
    }

    return of(data);
  }
}
