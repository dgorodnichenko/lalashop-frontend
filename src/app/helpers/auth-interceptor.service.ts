import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';
const TOKEN_PREFIX = "Bearer "

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private tokenStorageService: TokenStorageService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = req;
    const token = TOKEN_PREFIX + this.tokenStorageService.getToken();

    if (token != null) {
      authRequest = authRequest.clone({headers: req.headers.set(TOKEN_HEADER_KEY, token)})
    }

    return next.handle(authRequest);
  }
}

export const authInterceptorProvider = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
]
