import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service'

@Component({
    selector: 'quiz-questions',
    templateUrl: 'questions.component.html',
    styleUrls: ['questions.component.scss'],
    providers: [ApiService]
})

export class QuestionComponent {
	private jsonUrl: string;
	private questionsList: any;
	private selectedItems = new Array();
	answerText: string = '';
	private questionCount = {
		index: 0,
		size: 1
	};
	private nextMessage: boolean;

    constructor(private apiService: ApiService, private router: Router) {
		this.nextMessage = true;
		this.jsonUrl = "/src/app/assets/json/question.json";
		this.getAllQuestions();
    }

    private getAllQuestions(): void {
	    this.apiService.get(this.jsonUrl).subscribe((result) => {
			this.questionsList = result;
	    });
	}

	get filteredQuestions() {
		return (this.questionsList) ?
			this.questionsList[0].questions.slice(this.questionCount.index, this.questionCount.index + this.questionCount.size) : [];
	}

	private onSelect(): void {
		this.nextMessage = false;
	}

	private checkBoxChange(event: any, option:object): void {
		event.target.checked ? (this.selectedItems.push(option), this.nextMessage = false) : (this.selectedItems = this.selectedItems.filter(item => item !== option));

		if (this.selectedItems.length == 0) {
			this.nextMessage = true;
		}
	}

	private checkAnswerEmpty(): void {
		this.answerText ? (this.nextMessage = false) : (this.nextMessage = true);
	}

	private nextQuestion(): void {
		this.questionCount.index += 1;
		this.selectedItems = [];
		this.nextMessage = true;
		this.answerText = "";
	}

	private viewResult(): void {
		this.router.navigate(['/quiz/result']);
	}
}
