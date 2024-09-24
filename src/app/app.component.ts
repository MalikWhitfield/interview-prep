import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions/interview-questions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListComponent,
    TodoFormComponent,
    InterviewQuestionsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'interview-prep';
}
