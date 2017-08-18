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

  private singleOptionSelected(option: Option): void {
    this.selectedOption = option;
    this.enableNextButton = true;
  }

  private multipleOptionsSelected(event: any, option: Option): void {
    event.target.checked ? (this.selectedOptions.push(option), this.enableNextButton = true) : (this.selectedOptions = this.selectedOptions.filter(item => item !== option));
    if (this.selectedOptions.length == 0) {
      this.enableNextButton = false;
    }
  }

  private checkAnswerEmpty(userAnswer: string): void {
    userAnswer ? (this.enableNextButton = true) : (this.enableNextButton = false);
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

  private triggerNextButton(qNo:number, qLength:number, questionType:number, userAnswer:any): void {
    if (questionType === 3) {
      if (userAnswer) {
        (qNo !== qLength) ? this.nextQuestion() : this.viewResult();
      }
    }
    else if (questionType === 2) {
      if (this.selectedOptions.length > 0) {
        (qNo !== qLength) ? this.nextQuestion() : this.viewResult();
      }
    }
    else {
      (qNo !== qLength) ? this.nextQuestion() : this.viewResult();
    }
  }
}
