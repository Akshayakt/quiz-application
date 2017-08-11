import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Question } from '../../../../models/question';


@Component({
    selector: 'quiz-questions',
    templateUrl: 'questions.component.html',
    styleUrls: ['questions.component.scss'],
})

export class QuestionComponent {

    @Input() quiz:any;

    @Output() quizAnswered = new EventEmitter();

	private selectedItems = new Array();
	private questionCount = {
		index: 0,
		size: 1
	};
	private nextMessage: boolean;


    constructor() {
    	this.nextMessage = true;
    }

	filteredQuestions(questions: any) {
		return (questions) ?
			questions.slice(this.questionCount.index, this.questionCount.index + this.questionCount.size) : [];
	}

	private changeOnSelect(question:Question): void {
		this.nextMessage = false;
	}

	private checkBoxChange(event: any, option:object): void {
		event.target.checked ? (this.selectedItems.push(option), this.nextMessage = false) : (this.selectedItems = this.selectedItems.filter(item => item !== option));
		if (this.selectedItems.length == 0) {
			this.nextMessage = true;
		}
	}

	private checkAnswerEmpty(answerText: any): void {
		answerText ? (this.nextMessage = false) : (this.nextMessage = true);
	}

	private nextQuestion(): void {
		this.questionCount.index += 1;
		this.selectedItems = [];
		this.nextMessage = true;
	}

	private viewResult(): void {
		this.quizAnswered.emit(this.quiz);
	}

}
