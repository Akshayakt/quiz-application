import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuestionComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

import { Question } from '../../../models/question';

@Component({
    selector: 'quiz',
    templateUrl: 'quiz.component.html',
    styleUrls: ['quiz.component.scss'],
})

export class QuizComponent implements OnInit {

    private currentQuizData = new Array();
    private completed: boolean = false;
    private userAnswers: any;
    private topicName: string;

    constructor(private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.currentQuizData.push(this.route.snapshot.data['quizData']);
        this.topicName = this.currentQuizData[0].name;
    }

    public handleAnsweredQuiz(results: any): void {
        this.completed = results.completed;
        this.userAnswers = results.currentQuizData;
    }

}
