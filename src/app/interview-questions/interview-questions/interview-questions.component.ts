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

  // Void Type. A function that doesn't return anything
  doSomething(): void {
    console.log('do something');
  }

  // Generics in TypeScript
  addItem = <T>(obj: T) => {
    const id = Math.random().toString();
    return { ...obj, id };
  };

  user = { name: 'Jack' };

  result = this.addItem(this.user);

  ngOnInit() {
    console.log(this.result);
  }
}
