import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { QuizComponent }     from './quiz.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        QuizComponent
    ],
    bootstrap: [QuizComponent]
})

export class QuizModule { }
