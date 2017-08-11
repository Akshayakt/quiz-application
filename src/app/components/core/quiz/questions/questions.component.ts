import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Question } from '../../../../models/question';

import { ApiService } from '../../../shared/services/api.service';

@Component({
    selector: 'quiz-questions',
    templateUrl: 'questions.component.html',
    styleUrls: ['questions.component.scss'],
    providers: [ApiService]
})

export class QuestionComponent {

    private jsonUrl: string;
    private qId: number;
    private currentTopic: any;

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
