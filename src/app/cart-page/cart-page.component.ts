import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Subscription} from "rxjs";
import {Cart} from "../models/cart.model";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit, OnDestroy{
  private cartSubscription!: Subscription;
  cart!: Cart;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartSubscription = this.cartService.getCart().subscribe(res => {
      this.cart = res;
      console.log(this.cart);
    })
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  placeOrder() {
    this.cartService.placeOrder().subscribe({
      next: (response) => {
        console.log('placed');
      },
      error: (e) => console.error(e)
    });
  }
}
