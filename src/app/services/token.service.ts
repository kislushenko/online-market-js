import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'accessToken';
  private authorized = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  get isAuthorized() {
    this.getToken() != null ? this.authorized.next(true) : this.authorized.next(false);
    return this.authorized.asObservable();
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.authorized.next(true);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
    this.authorized.next(false);
  }
}
