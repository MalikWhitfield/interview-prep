import { Routes } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';

export const routes: Routes = [
  { path: 'todo', component: TodoFormComponent },
  { path: 'products', component: ProductListComponent },
];
