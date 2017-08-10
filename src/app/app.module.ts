import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeModule } from './components/core/home/home.module';
import { QuizModule } from './components/core/quiz/quiz.module';

import { AppComponent } from './app.component';


import { AppRouting } from './app.routes';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HomeModule,
        QuizModule,
        AppRouting
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
