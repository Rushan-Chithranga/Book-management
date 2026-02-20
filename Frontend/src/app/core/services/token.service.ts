import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TokenService {
  private KEY = '9Xk@2Lm!Pq7RsTu8Vw%Yz4AbCdEfGhIjKlMnOpQrStUvWx@';

  set(token: string) {
    localStorage.setItem(this.KEY, token);
  }

  get() {
    return localStorage.getItem(this.KEY);
  }

  clear() {
    localStorage.removeItem(this.KEY);
  }

  isLoggedIn() {
    return !!this.get();
  }
}
