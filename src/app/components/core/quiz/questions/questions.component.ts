import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Option } from '../../../../models/options';

@Component({
  selector: 'quiz-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.scss'],
})

export class QuestionComponent {

  @Input() currentQuizData: any;

  @Output() answeredQuizData = new EventEmitter<any>();

  private questionNum:number;
  private enableNextButton: boolean;
  private selectedOption: Option;
  private selectedOptions = new Array();
  private quizCompleted: boolean = false;

  constructor() {
    this.enableNextButton = false;
    this.questionNum = 0;
  }

  private handleSingleSelection(results: any): void {
    if (results.selectedOption) {
      this.selectedOption = results.selectedOption;
      this.enableNextButton = true;
    }
    if (results.buttonToTrigger) {
      this.triggerButton(results.buttonToTrigger);
    }
  }

  private handleMultipleSelection(results: any): void {
    if (results.selectedOption) {
      results.unChecked ? (this.selectedOptions = this.selectedOptions.filter(item => item !== results.selectedOption)) : (this.selectedOptions.push(results.selectedOption), this.enableNextButton = true);
    }

    if (this.selectedOptions.length > 0) {
      if (results.buttonToTrigger) {
        this.triggerButton(results.buttonToTrigger);
      }
    }
    else {
      this.enableNextButton = false;
    }
  }

  private handleUserInput(results: any): void {
    results.userAnswer ? this.enableNextButton = true : this.enableNextButton = false;
    if (results.buttonToTrigger) {
      this.triggerButton(results.buttonToTrigger);
    }
  }

  private triggerButton(buttonToTrigger:string): void {
    if (buttonToTrigger === "nextButton") {
      this.nextQuestion();
    }
    else if (buttonToTrigger === "resultButton") {
      this.viewResult();
    }
  }

  private nextQuestion(): void {
    if (this.selectedOption) {
      this.selectedOption.isSelected = true;
    }
    this.questionNum += 1;
    this.enableNextButton = false;
    this.selectedOptions = [];
    this.selectedOption = null;
  }

  private viewResult(): void {
    if (this.selectedOption) {
      this.selectedOption.isSelected = true;
    }
    this.quizCompleted = true;
    this.answeredQuizData.emit({ currentQuizData : this.currentQuizData[0], completed : this.quizCompleted });
  }
}
