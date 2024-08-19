import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {NgForOf} from "@angular/common";
import {Subscription} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-listing-page',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './product-listing-page.component.html',
  styleUrl: './product-listing-page.component.css'
})
export class ProductListingPageComponent implements OnInit, OnDestroy {
  products!: Product[];
  private productSubscription!: Subscription;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productSubscription = this.productService.getAllProducts().subscribe(data => {
      this.products = data.map(product => ({
        ...product,
        quantity: 1
      }));
    });
  }

  ngOnDestroy() {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }

  placeOrder(product: Product) {
    this.productService.addProductToCart(product.code, product.quantity).subscribe({
        next: value => {
          console.log("added");
        },
        error: (e) => console.error(e)
      }
    )
  }
}
