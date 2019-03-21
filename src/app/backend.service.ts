import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const BACKEND_URL: string = environment.backendUrl;
const API_PATH: string = environment.apiPath;

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(private http: HttpClient) { }
    ping() {
        console.log("sending ping to backend");
        return this.http.get(BACKEND_URL + API_PATH + 'ping');
    }
    protected() {
        console.log("send protected to backend");
        return this.http.get(BACKEND_URL + API_PATH + 'protected');
    }

}