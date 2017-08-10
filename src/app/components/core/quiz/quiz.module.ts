import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { QuizComponent }     from './quiz.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        QuizComponent
    ],
    bootstrap: [QuizComponent]
})

export class QuizModule { }
