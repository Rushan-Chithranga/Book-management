import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TokenService {
  private KEY = 'CHANGE_THIS_TO_A_LONG_RANDOM_SECRET_KEY_32+CHARS';

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
