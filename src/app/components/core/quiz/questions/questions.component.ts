import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Question } from '../../../../models/question';

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
	private selectedItems = new Array();
	answerText: string = '';
	private questionCount = {
		index: 0,
		size: 1
	};
	private nextMessage: boolean;
	private qId: number;
    private currentTopic: any;

    constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    	this.nextMessage = true;
        this.jsonUrl = "/src/app/assets/json/quiz.json";
        this.getQuestionsByTopicId();
    }

    private getQuestionsByTopicId(): void {
        this.route.params.subscribe(params => {
            this.qId = +params['id'];
            this.apiService.get(this.jsonUrl).subscribe((result) => {
                this.currentTopic = result.find((q: Question) => q.id === this.qId);
            });
        });
        console.log(this.currentTopic);
    }

	get filteredQuestions() {
		return (this.currentTopic) ?
			this.currentTopic.questions.slice(this.questionCount.index, this.questionCount.index + this.questionCount.size) : [];
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
