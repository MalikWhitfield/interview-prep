import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-questions',
  standalone: true,
  imports: [],
  templateUrl: './interview-questions.component.html',
  styleUrl: './interview-questions.component.css',
})
export class InterviewQuestionsComponent {
  constructor() {}

  // Type Assertion
  getItem = (item: number | undefined) => {
    if (item) {
      return item.toString();
    } else {
      return undefined;
    }
  };
}
