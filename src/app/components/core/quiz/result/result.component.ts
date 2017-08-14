import { Component, Input } from '@angular/core';

import { Question } from '../../../../models/question';
import { Option } from '../../../../models/options';


@Component({
    selector: 'quiz-result',
    templateUrl: 'result.component.html',
    styleUrls: ['result.component.scss'],
})


export class ResultComponent {
	@Input() answers:any;

	private correctAnswers: number = 0;
    constructor() {
    	
    }

    ngOnInit(){
    	this.calculateResult(this.answers.questions)
    }

    private calculateResult(question: any){

    	for(let q of question){
    		let result = this.isCorrectAnswer(q.options, q.questionType)
    		if(result==true)
    			this.correctAnswers++;
    	}
	console.log(this.correctAnswers)

    }

    isCorrectAnswer(option: any, type:number){
    	let isCorrect: boolean = false;
    	let selected : any;
    	selected = option.filter((o: any)=>{
    		return o.isSelected 
    	});
    	if (type==1) {
    		isCorrect = selected[0].isAnswer;
    	} else if(type==3){

    	}

    	return isCorrect;
    }
}
