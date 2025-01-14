import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrdersService, Order } from '../../../../services/orders.service';

@Component({
  selector: 'app-add-order',
  imports: [FormsModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss'
})
export class AddOrderComponent {
  order = {
    productId: 0,
    quantity: 0,
    userId: 0,
    createdAt: '',
  };

  constructor(private ordersService: OrdersService, private router: Router) {}

  add(): void {
    this.ordersService.add(this.order).subscribe({
      next: (newOrder) => {
        console.log('Order added successfully:', newOrder);
        this.router.navigate(['/orders']);
      },
      error: (err) => {
        console.error('Error adding order:', err);
      }
    });
  }
}
