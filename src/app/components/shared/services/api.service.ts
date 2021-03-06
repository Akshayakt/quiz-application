import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Question } from '../../../models/question';

@Injectable()
export class ApiService {

    private resultData: any;
    constructor(private http: Http) { }

    public get(url: string): Observable<any> {
        return this.http.get(url)
            .map((res: Response) => { return res.json() })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getQuestionsByTopicId(id: number, url: string): Observable<any> {
        return this.get(url)
            .map((result) => {
                return result.find((q: Question) => q.id === id)
            }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
