import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService, Product } from '../../../../services/products.service';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  product: any = { id: 0, name: '', stock: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (productId) {
      this.productsService.getById(productId).subscribe({
        next: (product) => (this.product = product),
        error: (err) => console.error('Error fetching product:', err),
      });
    }
  }

  update(): void {
    if (this.product.id) {
      this.productsService.update(this.product.id, this.product).subscribe({
        next: () => {
          console.log('Product updated successfully');
          this.router.navigate(['/products']);
        },
        error: (err) => console.error('Error updating product:', err),
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
