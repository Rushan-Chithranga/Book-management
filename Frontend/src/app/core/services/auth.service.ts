import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API = `${environment.apiUrl}/Auth`;
  private userCache: any = null;

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http
      .post<any>(`${this.API}/login`, data)
      .pipe(tap((res) => localStorage.setItem('token', res.token)));
  }

  register(data: any) {
    return this.http
      .post<any>(`${this.API}/register`, data)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.userCache = null;
  }
}
