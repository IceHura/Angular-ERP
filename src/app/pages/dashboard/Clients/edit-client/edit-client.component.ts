import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientsService, Client } from '../../../../services/clients.service';


@Component({
  selector: 'app-edit-client',
  imports: [FormsModule],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss'
})

export class EditClientComponent implements OnInit {

  client: any = { 
    id: 0,
    name: '', 
    email: '',
    phone: '',
    address: '',
    orders: []};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService
  ) {}

  ngOnInit(): void {
    const clienttId = Number(this.route.snapshot.paramMap.get('id'));
    if (clienttId) {
      this.clientsService.getById(clienttId).subscribe({
        next: (client) => (this.client = client),
        error: (err) => console.error('Error fetching product:', err),
      });
    }
  }

  update(): void {
    if (this.client.id) {
      this.clientsService.update(this.client.id, this.client).subscribe({
        next: () => {
          console.log('Client updated successfully');
          this.router.navigate(['/customers']);
        },
        error: (err) => console.error('Error updating client:', err),
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/customers']);
  }
}
