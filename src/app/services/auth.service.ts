import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const AUTH_API = `${environment.baseUrl}/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  login(user): Observable<any> {
    return this.httpClient.post(`${AUTH_API}/signin`, {
      email: user.email,
      password: user.password
    })
  }

  register(user): Observable<any> {
    return this.httpClient.post(`${AUTH_API}/signup`, {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      confirmPassword: user.confirmPassword
    })
  }
}
