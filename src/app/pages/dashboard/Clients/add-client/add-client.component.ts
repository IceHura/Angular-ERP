import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientsService, Client } from '../../../../services/clients.service';


@Component({
  selector: 'app-add-client',
  imports: [FormsModule],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss'
})
export class AddClientComponent {
  client = { 
    name: '', 
    email: '',
    phone: '',
    address: '',
    orders: []};

  constructor(private clientsService: ClientsService, private router: Router) {}

  add(): void {
    this.clientsService.add(this.client).subscribe({
      next: (newclient) => {
        console.log('Client added successfully:', newclient);
        this.router.navigate(['/customers']);
      },
      error: (err) => {
        console.error('Error adding client:', err);
      }
    });
  }
}

