import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

    private resultData: any;
    constructor(private http: Http) { }

    public get(url: string): Observable<any> {
        return this.http.get(url)
            .map((res: Response) => { return res.json() })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

}
