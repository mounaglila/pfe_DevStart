import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router'; 
import { AdminComponent } from './admin/admin.component'; 
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { inventoryComponent } from './inventory/inventory.component'; 
import { shipmentsComponent } from './shipments/shipments.component'; 
import { reviewsComponent } from './reviews/reviews.component'; 
import { employeesComponent } from './employees/employees.component'; 
import { paymentsComponent } from './payments/payments.component'; 
import { ordersComponent } from './orders/orders.component'; 
import { categoriesComponent } from './categories/categories.component'; 
@Component({ 
    selector: 'app-root', 
    standalone: true, 
    imports:[ 
    inventoryComponent, 
    shipmentsComponent, 
    reviewsComponent, 
    employeesComponent, 
    paymentsComponent, 
    ordersComponent, 
    categoriesComponent, 
    AdminComponent, 
    SidebarComponent, 
    RouterOutlet 
  ], 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss'] 
 }) 
export class AppComponent { 
  title = 'user-test'; 
} 
