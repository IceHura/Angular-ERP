import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../../../services/products.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.productsService.getAll().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productsService.delete(id).subscribe({
        next: () => {
          this.products = this.products.filter(product => product.id !== id);
          console.log('Product deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting product:', err);
        }
      });
    }
  }

  add() {
    this.navigateTo('products/add');
  }

  edit(index: number): void {
    this.navigateTo('products/edit/' + index);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route).then(() => {
      console.log(`Navigated to ${route}`);
    });
  }
}
