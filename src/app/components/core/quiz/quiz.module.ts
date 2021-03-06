import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ChartModule }  from 'angular2-highcharts';

import { QuizComponent }     from './quiz.component';
import { QuestionComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

// import { QuizRouting }  from "./quiz.routes";
//
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ChartModule
    ],
    declarations: [
        QuizComponent,
        QuestionComponent,
        ResultComponent
    ],
    bootstrap: [QuizComponent]
})

export class QuizModule { }
