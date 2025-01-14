import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService, Product } from '../../../../services/products.service';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  product = { name: '', stock: 0 };

  constructor(private productsService: ProductsService, private router: Router) {}

  add(): void {
    this.productsService.add(this.product).subscribe({
      next: (newProduct) => {
        console.log('Product added successfully:', newProduct);
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Error adding product:', err);
      }
    });
  }
}
