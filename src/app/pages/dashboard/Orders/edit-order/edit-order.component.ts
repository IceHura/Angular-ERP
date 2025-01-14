import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrdersService, Order } from '../../../../services/orders.service';


@Component({
  selector: 'app-edit-order',
  imports: [FormsModule],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.scss'
})

export class EditOrderComponent implements OnInit {
  order: any = {
    id: 0,
    productId: 0,
    quantity: 0,
    userId: 0,
    createdAt: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    const orderId = Number(this.route.snapshot.paramMap.get('id'));
    if (orderId) {
      this.ordersService.getById(orderId).subscribe({
        next: (order) => (this.order = order),
        error: (err) => console.error('Error fetching order:', err),
      });
    }
  }

  update(): void {
    if (this.order.id) {
      this.ordersService.update(this.order.id, this.order).subscribe({
        next: () => {
          console.log('Order updated successfully');
          this.router.navigate(['/orders']);
        },
        error: (err) => console.error('Error updating order:', err),
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/orders']);
  }
}
