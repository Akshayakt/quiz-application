import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Option } from '../../../../models/options';


@Component({
    selector: 'quiz-questions',
    templateUrl: 'questions.component.html',
    styleUrls: ['questions.component.scss'],
})

export class QuestionComponent {


    @Input() quiz: any;

    @Output() quizAnswered = new EventEmitter<any>();

    private selectedItems = new Array();
    private questionCount = {
        index: 0,
        size: 1
    };
    private nextMessage: boolean;
    private radioSelected: any;
    private completed: boolean = false;


    constructor() {
        this.nextMessage = true;
    }

    filteredQuestions(questions: any) {
        return (questions) ?
            questions.slice(this.questionCount.index, this.questionCount.index + this.questionCount.size) : [];
    }

    private changeOnSelect(option: Option): void {
        this.radioSelected = option;
        this.nextMessage = false;
    }

    private checkBoxChange(event: any, option: Option): void {
        event.target.checked ? (this.selectedItems.push(option), this.nextMessage = false) : (this.selectedItems = this.selectedItems.filter(item => item !== option));
        if (this.selectedItems.length == 0) {
            this.nextMessage = true;
        }
    }

    private checkAnswerEmpty(answerText: any): void {
        answerText ? (this.nextMessage = false) : (this.nextMessage = true);
    }

    private nextQuestion(): void {
        if (this.radioSelected) {
            this.radioSelected.isSelected = true;
        }
        this.questionCount.index += 1;
        this.selectedItems = [];
        this.nextMessage = true;
        this.radioSelected = "";
    }

    private viewResult(): void {
        if (this.radioSelected) {
            this.radioSelected.isSelected = true;
        }
        this.completed = true;
        this.quizAnswered.emit({ quiz: this.quiz[0], completed: this.completed });
    }

    private triggerButton(qNo: number, qLength: number): void {
        (qNo != qLength) ? this.nextQuestion() : this.viewResult();
    }
}
