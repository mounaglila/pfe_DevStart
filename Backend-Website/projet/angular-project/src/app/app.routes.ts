//app.routes 
import { Routes } from '@angular/router'; 
import { AdminComponent } from './admin/admin.component'; 
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { UpdateComponent } from './update/update.component'; 
import { inventoryComponent } from './inventory/inventory.component'; 
import { shipmentsComponent } from './shipments/shipments.component'; 
import { reviewsComponent } from './reviews/reviews.component'; 
import { employeesComponent } from './employees/employees.component'; 
import { paymentsComponent } from './payments/payments.component'; 
import { ordersComponent } from './orders/orders.component'; 
import { categoriesComponent } from './categories/categories.component'; 
export const routes: Routes = [ 
  { path: 'inventory', component: inventoryComponent }, 
  { path: 'shipments', component: shipmentsComponent }, 
  { path: 'reviews', component: reviewsComponent }, 
  { path: 'employees', component: employeesComponent }, 
  { path: 'payments', component: paymentsComponent }, 
  { path: 'orders', component: ordersComponent }, 
  { path: 'categories', component: categoriesComponent }, 
{ path: 'admin', component: AdminComponent }, 
{ path: 'sidebar', component: SidebarComponent}, 
{ path: 'update/:table/:id', component: UpdateComponent }, 
{ path: '', redirectTo: '/admin', pathMatch: 'full' } 
]; 
