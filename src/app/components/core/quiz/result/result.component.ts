import { Component, Input } from '@angular/core';

import { Question } from '../../../../models/question';
import { Option } from '../../../../models/options';


@Component({
    selector: 'quiz-result',
    templateUrl: 'result.component.html',
    styleUrls: ['result.component.scss'],
})


export class ResultComponent {
    @Input() answers: any;

    private correctAnswers: number = 0;
    constructor() {

    }

    ngOnInit() {
        this.calculateResult(this.answers.questions)
    }

    private calculateResult(question: any) {

        for (let q of question) {
            let result: boolean = false;
            (q.questionType == 3) ? result = this.checkUserInputAnswer(q, q.userAnswer) : result = this.isCorrectAnswer(q.options, q.questionType);

            if (result == true)
                this.correctAnswers++;
        }
        console.log(this.correctAnswers)

    }

    public checkUserInputAnswer(question: any, answer: string): boolean {
        let theAnswer = question.answer;
        return theAnswer.localeCompare(answer);
    }

    public isCorrectAnswer(option: any, type: number): boolean {
        let isCorrect: boolean = false;
        let selected: any;
        let correctOnes: any; //for multiple choice

        correctOnes = option.filter((o: any) => {
            return o.isAnswer
        })
        selected = option.filter((o: any) => {
            return o.isSelected
        });
        if (type == 1) {
            isCorrect = selected[0].isAnswer;
        } else if (type == 2) {
            for (let s of selected) {
                let count = 0;
                if (s.isAnswer == true)
                    count++;
                isCorrect = correctOnes.length == count
            }
        }
        return isCorrect;
    }
}
