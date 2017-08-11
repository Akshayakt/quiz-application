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
    providers: [ApiService],
})

export class QuizComponent {

    private jsonUrl: string;
    private qId: number;
    private currentTopic: any;
    private completed: boolean = false;

    constructor(private apiService: ApiService, private route: ActivatedRoute) {
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
    }

}
