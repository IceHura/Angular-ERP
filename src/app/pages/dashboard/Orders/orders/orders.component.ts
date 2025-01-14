import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersService, Order} from '../../../../services/orders.service';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})

export class OrdersComponent {
  orders: Order[] = [];

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.ordersService.getAll().subscribe({
      next: (orders) => {
        this.orders = orders;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.ordersService.delete(id).subscribe({
        next: () => {
          this.orders = this.orders.filter(orders => orders.id !== id);
          console.log('Order deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting order:', err);
        }
      });
    }
  }

  add() {
    this.navigateTo('orders/add');
  }

  edit(index: number): void {
    this.navigateTo('orders/edit/' + index);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route).then(() => {
      console.log(`Navigated to ${route}`);
    });
  }
}

