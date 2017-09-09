import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Message } from './message';


@Injectable()
export class MessageService {
    private _url = '/email';

    constructor(private _http: HttpClient) { }

    postMessage(message: Message) {
        this._http.post(this._url, message)
            .subscribe(
                data => { console.log(data); },
                (error: HttpErrorResponse) => { console.log(error.message); }
            );
    }
}
