import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../../../../models/options';

@Component({
  selector: 'check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})

export class CheckBoxComponent {

  @Input() optionNum: number;
  @Input() option: Option;
  @Input() isLastQues: boolean;

  @Output() userSelection = new EventEmitter<any>();

  private optionsSelected(event: any, option: Option): void {
    this.userSelection.emit({ selectedOption : option, unChecked: !event.target.checked});
  }

  private triggerNextButton(): void {
    this.isLastQues ? this.userSelection.emit({ buttonToTrigger : "resultButton" }) : this.userSelection.emit({ buttonToTrigger : "nextButton" });
  }
}