import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../../../../models/options';
import { Question } from '../../../../../models/question';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})

export class TextBoxComponent {

  @Input() question: Question;
  @Input() isLastQues: boolean;

  @Output() userSelection = new EventEmitter<any>();

  private checkAnswerEmpty(userAnswer: string): void {
    this.userSelection.emit({ userAnswer : userAnswer});
  }

  private triggerNextButton(userAnswer: string): void {
    if (userAnswer) {
      this.isLastQues ? this.userSelection.emit({ buttonToTrigger : "resultButton" }) : this.userSelection.emit({ buttonToTrigger : "nextButton" });
    }
  }
}