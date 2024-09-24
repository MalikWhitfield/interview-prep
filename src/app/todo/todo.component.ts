import { Component, Input } from '@angular/core';
import { Todo } from '../data/todo.interface';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() todo!: Todo;

  constructor() {}

  ngOnInit() {}
}
