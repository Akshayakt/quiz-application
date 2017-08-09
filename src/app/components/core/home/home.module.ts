import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { HomeComponent }     from './home.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        HomeComponent
    ],
    bootstrap: [HomeComponent]
})

export class HomeModule { }
