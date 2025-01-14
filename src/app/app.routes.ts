import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { LoginComponent } from './pages/dashboard/login/login.component';
import { ProductsComponent } from './pages/dashboard/Product/products/products.component';
import { AddProductComponent } from './pages/dashboard/Product/add-product/add-product.component';
import { EditProductComponent } from './pages/dashboard/Product/edit-product/edit-product.component';
import { OrdersComponent } from './pages/dashboard/Orders/orders/orders.component';
import { AddOrderComponent } from './pages/dashboard/Orders/add-order/add-order.component';
import { EditOrderComponent } from './pages/dashboard/Orders/edit-order/edit-order.component';
import { ClientsComponent } from './pages/dashboard/Clients/clients/clients.component';
import { AddClientComponent } from './pages/dashboard/Clients/add-client/add-client.component';
import { EditClientComponent } from './pages/dashboard/Clients/edit-client/edit-client.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/add', component: AddProductComponent },
    { path: 'products/edit/:id', component: EditProductComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'orders/add', component: AddOrderComponent },
    { path: 'orders/edit/:id', component: EditOrderComponent },
    { path: 'customers', component: ClientsComponent },
    { path: 'customers/add', component: AddClientComponent },
    { path: 'customers/edit/:id', component: EditClientComponent },
    { path: '**', redirectTo: '/home' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}