import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { QuestionComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

import { Question } from '../../../models/question';

import { ApiService } from '../../shared/services/api.service';


@Component({
    selector: 'quiz',
    templateUrl: 'quiz.component.html',
    styleUrls: ['quiz.component.scss'],
    providers: [ApiService]
})

export class QuizComponent {

    private jsonUrl: string;
    private qId: number;
    private currentTopic = new Array();
    private completed: boolean = false;
    private userAnswers: any;

    constructor(private apiService: ApiService, private route: ActivatedRoute) {
        this.jsonUrl = "/src/app/assets/json/quiz.json";
        this.getQuestionsByTopicId();
    }
    private getQuestionsByTopicId(): void {
        this.route.params.subscribe(params => {
            this.qId = +params['id'];
            this.apiService.get(this.jsonUrl).subscribe((result) => {
                this.currentTopic.push(result.find((q: Question) => q.id === this.qId));
            });
        });
    }

    handleQuizAnswered(results:any): void {
        this.completed = results.completed;
        this.userAnswers = results.quiz;
    }

}
