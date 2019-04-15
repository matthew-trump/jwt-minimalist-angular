import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const BACKEND_URL: string = environment.backendUrl;
const LOGIN_PATH: string = environment.loginPath;
const UNPROTECTED_PATH: string = environment.unprotectedPath;
const PROTECTED_PATH: string = environment.protectedPath;

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        console.log("logging in to backend");
        return this.http.post<any>(BACKEND_URL + LOGIN_PATH, { username, password })
    }
    unprotectedPing() {
        console.log("sending ping to backend");
        return this.http.get(BACKEND_URL + UNPROTECTED_PATH + 'ping-unprotected');
    }
    protectedPing() {
        console.log("send protected to backend");
        return this.http.get(BACKEND_URL + PROTECTED_PATH + 'ping-protected');
    }

}