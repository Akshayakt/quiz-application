import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';

import { Topic } from '../../../models/topic';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    providers: [ApiService]
})

export class HomeComponent {

    private jsonUrl: string;
    private topicList: any;
    constructor(private apiService: ApiService, private router: Router) {
        this.jsonUrl = "assets/json/topics.json";
        this.getAllTopics();
    }

    private getAllTopics(): void {
        this.apiService.get(this.jsonUrl).subscribe((result: Topic[]) => {
            this.topicList = result;
        });
    }

    public goToQuiz(id: number): void {
        this.router.navigate(['/quiz/', id]);
    }
}
