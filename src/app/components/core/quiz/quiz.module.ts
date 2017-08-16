import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { QuizComponent }     from './quiz.component';
import { QuestionComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

import { AutofocusDirective } from '../../shared/directives/autofocus.directive';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        QuizComponent,
        QuestionComponent,
        ResultComponent,
        AutofocusDirective
    ],
    bootstrap: [QuizComponent]
})

export class QuizModule { }
