import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Quiz } from '../../../models/quiz';

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    public get(url: string): Observable<any> {
        return this.http.get(url)
            .map((res: Response) => { return res.json() })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getQuestionsByTopicId(id: number, url: string): Observable<any> {
        return this.get(url)
            .map((result) => {
                return result.find((q: Quiz) => q.id === id)
            }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
