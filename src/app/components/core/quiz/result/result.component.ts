import { Component, Input } from '@angular/core';

import { Question } from '../../../../models/question';
import { Option } from '../../../../models/options';

import { chartConfig }  from "./chartConfig";


@Component({
    selector: 'quiz-result',
    templateUrl: 'result.component.html',
    styleUrls: ['result.component.scss'],
})


export class ResultComponent {

    @Input() quiz: any; //

    private options: any; //chart configuration options

    private correctAnswers: number = 0;
    private questionLength: number;

    constructor() {
    }

    ngOnInit() {
        this.options = chartConfig;
        this.calculateResult(this.quiz.questions)
    }

    private calculateResult(question: Question[]) {

        this.questionLength = question.length;
        let result: boolean;
        for (let q of question) {
            result = false;
            (q.questionType == 3) ? result = this.checkUserInputAnswer(q, q.userAnswer) : result = this.isCorrectAnswer(q.options, q.questionType);
            if (result == true)
                this.correctAnswers++;
        }
        this.options.series[0].data[0][1] = this.correctAnswers;
        this.options.series[0].data[1][1] = this.questionLength - this.correctAnswers;
    }

    public checkUserInputAnswer(question: any, answer: string): boolean {
        let theAnswer = question.answer;
        return !(theAnswer.toLowerCase().localeCompare(answer.toLowerCase()));
    }

    public isCorrectAnswer(option: any, type: number): boolean {
        let isCorrect: boolean = false;
        let selected: Option[];

        selected = option.filter((o: Option) => {
            return o.isSelected
        });
        if (type == 1)
            isCorrect = selected[0].isAnswer;
        else if (type == 2) {
            let correctOnes: Option[]; //for multiple choice
            correctOnes = option.filter((o: Option) => {
                return o.isAnswer
            })
            let count = 0;
            for (let s of selected) {
                if (s.isAnswer == true)
                    count++;
            }
            isCorrect = (correctOnes.length == count)
        }
        return isCorrect;
    }
}
