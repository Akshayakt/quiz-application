import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent }     from './home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [HomeComponent]
})

export class HomeModule { }
