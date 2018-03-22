import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NetworkService {
    private serviceUrl: string;
    constructor(private http: HttpClient){
        this.serviceUrl = "/api/network";
    }

    get() : Observable<{}[]> {
        return this.http.get<{}[]>(this.serviceUrl);
    }
}