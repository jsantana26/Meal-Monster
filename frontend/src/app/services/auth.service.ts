import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  authenticateUser(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };
    return this.http.post<LoginResponse>('http://localhost:3000/auth/login', user, httpOptions).pipe(
      map(res => res)
    )
  }

  registerUser(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<LoginResponse>('http://localhost:3000/auth/register', user, httpOptions)
      .pipe(
        map(res => res)
      )
  }
}

interface LoginResponse {
  success: string,
  message: string,
  user: any
}
