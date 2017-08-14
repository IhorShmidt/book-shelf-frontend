

import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';


@Injectable()
export class AuthService {
    public token: string;
    public apiUrl: string;

    constructor(private http: HttpClient, private router: Router) {
        if (localStorage.getItem('token')) {
        this.token = localStorage.getItem('token');
            this.token = localStorage.getItem('token');
        }
    }

    logIn(email: string, password: string) {
        return this.http.post(this.apiUrl, {email: password})
            .flatMap(
                res => {
                    this.token = res['accessToken'];
                    this.router.navigate(['../content']);
                    return Observable.of(true);
                }
            );
    }

    checkToken(token?: string) {
        this.token = localStorage.getItem('token') || token;
        if (!this.token) {
            this.router.navigate(['auth']);
            return !!this.token;
        }
        return this.http.get(this.apiUrl).map(res => !!this.token);
    }

    logOut() {
        localStorage.clear();
        return this.router.navigate(['/auth/login']).then(() => this.token = undefined);
    }
}
