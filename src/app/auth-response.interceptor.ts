import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from '../environments/environment';

const LOGIN_ROUTE: string = environment.loginRoute;

@Injectable()
export class AuthResponseInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) { }
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigateByUrl('/' + LOGIN_ROUTE);
          }
        }
        return of(null);
      })
    );
  }
}