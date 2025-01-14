import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ClientsService, Client } from '../../../../services/clients.service';

@Component({
  selector: 'app-clients',
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

  clients: Client[] = [];

  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.clientsService.getAll().subscribe({
      next: (clients) => {
        this.clients = clients;
      },
      error: (err) => {
        console.error('Error fetching clients:', err);
      }
    });
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientsService.delete(id).subscribe({
        next: () => {
          this.clients = this.clients.filter(client => client.id !== id);
          console.log('Client deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting client:', err);
        }
      });
    }
  }

  add() {
    this.navigateTo('customers/add');
  }

  edit(index: number): void {
    this.navigateTo('customers/edit/' + index);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route).then(() => {
      console.log(`Navigated to ${route}`);
    });
  }
}
