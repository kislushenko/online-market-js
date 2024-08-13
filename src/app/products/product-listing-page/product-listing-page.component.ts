import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product-listing-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './product-listing-page.component.html',
  styleUrl: './product-listing-page.component.css'
})
export class ProductListingPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

}
