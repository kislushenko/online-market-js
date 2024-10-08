import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environment.config";
import {Product} from "../models/product.model";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) {
  }

  getAllProducts() {
    const url = `${environment.apiUrl}/products`;
    return this.http.get<Product[]>(url);
  }

  addProductToCart(productCode: string, quantity: number) {
    const url = `${environment.apiUrl}/cart/add`;
    const jwtToken = this.tokenService.getToken();
    const headers = new HttpHeaders();
    if (jwtToken) {
      headers.set( 'Authorization', jwtToken)
    }
    const body = {
      productCode: productCode,
      quantity: quantity
    };
    return this.http.post(url, body,{ headers });
  }
}
