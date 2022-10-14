import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {


  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("id_token") || sessionStorage.getItem("id_token");
    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + idToken)
      });
      return next.handle(cloned)
        .pipe(
          retry(2),
          catchError((error: HttpErrorResponse) => {
            if (error.status === 403 || error.status === 401) {
              sessionStorage.clear();
              localStorage.clear();
              window.location.href = "/login";
            }
            return throwError(() => error);
          }),
        )

    } else {
      return next.handle(req);
    }
  }


}
