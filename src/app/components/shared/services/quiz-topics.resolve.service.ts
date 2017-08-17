import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';

@Injectable()

export class QuizTopicsResolve implements Resolve<any> {

    private jsonUrl: string;

    constructor(private apiService: ApiService) {
        this.jsonUrl = "/src/app/assets/json/quiz.json";
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.apiService.getQuestionsByTopicId(+route.params['id'], this.jsonUrl);
    }
}
