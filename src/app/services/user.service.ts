import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const USER_API = `${environment.baseUrl}/user`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserById(id: number): Observable<any> {
    return this.httpClient.get(`${USER_API}/${id}`);
  }

  getCurrentUser(): Observable<any> {
    return this.httpClient.get(USER_API);
  }
}
