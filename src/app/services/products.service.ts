import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../data/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
