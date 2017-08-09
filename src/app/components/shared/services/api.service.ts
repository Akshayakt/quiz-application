import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    public get(url: string): Observable<any> {
        return this.http.get(url)
            // ...and calling .json() on the response to return data
            .map((res: Response) => { return res.json() })
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}
