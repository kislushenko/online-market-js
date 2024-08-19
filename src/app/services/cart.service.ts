import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environment.config";
import {Cart} from "../models/cart.model";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) {
  }

  getCart() {
    const url = `${environment.apiUrl}/cart`;
    const jwtToken = this.tokenService.getToken();
    const headers = new HttpHeaders();
    if (jwtToken) {
      headers.set( 'Authorization', jwtToken)
    }
    return this.http.get<Cart>(url, { headers });
  }

  placeOrder() {
    const url = `${environment.apiUrl}/cart/place`;
    const jwtToken = this.tokenService.getToken();
    const headers = new HttpHeaders();
    if (jwtToken) {
      headers.set( 'Authorization', jwtToken)
    }
    return this.http.post(url, { headers });
  }
}
