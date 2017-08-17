import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { QuestionComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

import { Question } from '../../../models/question';

@Component({
    selector: 'quiz',
    templateUrl: 'quiz.component.html',
    styleUrls: ['quiz.component.scss'],
})

export class QuizComponent implements OnInit {

    private currentTopic = new Array();
    private completed: boolean = false;
    private userAnswers: any;
    private topicName: string;

    constructor(private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.currentTopic.push(this.route.snapshot.data['topic']);
        this.topicName = this.currentTopic[0].name;
    }

    public handleQuizAnswered(results: any): void {
        this.completed = results.completed;
        this.userAnswers = results.quiz;
    }

}
