import { Component } from '@angular/core';
import {ProductRepresentation} from "../services/api/models/product-representation";
import {ProductService} from "../services/api/products/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {

  product: ProductRepresentation = {}

  constructor(private productService: ProductService, private router: Router) {
  }
  saveProduct() {
    this.productService.createProduct(this.product).subscribe({
      next: (value): void => {
        this.router.navigate(["products"])
      }
    })
  }
}
