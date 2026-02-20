import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  private API = `${environment.apiUrl}/User`;
  private userCache: any = null;

  constructor(private http: HttpClient) {}

  getMe(): Observable<any> {
    if (this.userCache) {
      return of(this.userCache);
    }
    return this.http.get<any>(`${this.API}/me`).pipe(tap((user) => (this.userCache = user)));
  }
}
