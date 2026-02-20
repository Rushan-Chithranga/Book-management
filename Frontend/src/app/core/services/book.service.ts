import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../../Models/book';

@Injectable({ providedIn: 'root' })
export class BookService {
  private API = `${environment.apiUrl}/Books`;
  private cache: Book[] | null = null;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    if (this.cache) {
      return of(this.cache);
    }
    return this.http.get<Book[]>(this.API).pipe(tap((books) => (this.cache = books)));
  }

  getById(id: number): Observable<Book> {
    const cached = this.cache?.find((b) => b.id === id);
    if (cached) {
      return of(cached);
    }
    return this.http.get<Book>(`${this.API}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<Book>(this.API, data).pipe(
      tap((newBook) => {
        if (this.cache) {
          this.cache = [...this.cache, newBook];
        }
      }),
    );
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.API}/${id}`, data).pipe(
      tap(() => {
        if (this.cache) {
          this.cache = this.cache.map((b) => (b.id === id ? { ...b, ...data, id } : b));
        }
      }),
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`).pipe(
      tap(() => {
        if (this.cache) {
          this.cache = this.cache.filter((b) => b.id !== id);
        }
      }),
    );
  }

  clearCache() {
    this.cache = null;
  }
  isCacheEmpty(): boolean {
    return this.cache === null;
  }
}
