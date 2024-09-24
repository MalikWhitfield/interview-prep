import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Todo } from '../../data/todo.interface';
import { TodoComponent } from '../../todo/todo.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: string[] = ['Bottle', 'Can', 'Glass'];
  todos: Todo[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.todos = res;
    });
  }
}
