import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../../../../models/options';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})

export class RadioButtonComponent {

  @Input() optionNum: number;
  @Input() option: Option;
  @Input() isLastQues: boolean;

  @Output() userSelection = new EventEmitter<any>();

  private optionSelected(option: Option): void {
    this.userSelection.emit({ selectedOption : option});
  }
  private triggerNextButton(): void {
    this.isLastQues ? this.userSelection.emit({ buttonToTrigger : "resultButton" }) : this.userSelection.emit({ buttonToTrigger : "nextButton" });
  }
}