import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {Injector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../services/auth/auth.service';
import {environment} from '../../environments/environment';

export class AuthInterceptor implements HttpInterceptor {
    constructor(private inj: Injector) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.inj.get(AuthService);

        if ((req.url.startsWith(`${environment.apiUrl}/auth`)) && req.method === 'POST' || !req.url.startsWith(`${environment.apiUrl}`)) {
            return next.handle(req);
        }
        const authHeader = auth.token;
        const headers = new Headers({});
        const authReq = req.clone({headers: req.headers.set('Authorization', authHeader).set('Content-Type', 'application/json')});

        return next.handle(authReq).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    auth.logOut();
                }
            }
        });
    }
}
