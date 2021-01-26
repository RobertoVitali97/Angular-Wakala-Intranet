import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, finalize, switchMap, tap } from 'rxjs/operators';
import { AuthenticationService } from '../auth/authentication.service';
import { SpinnerService } from '../core/spinner/spinner.service';
import { SnackBarService } from '../services/snackbar.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  refreshTokenInProgress = false;
  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
  constructor(private authService: AuthenticationService, private spinnerService: SpinnerService, private snackbarService: SnackBarService) { }
  private queue = 0;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!request.url.includes('.svg')) {
      this.showSpinner();
    }
    return next.handle(request).pipe(catchError(error => {
      if (error.url.includes('refreshtoken')) {
        console.log('errore in refresh-token');
        this.authService.logout();
        this.hideSpinner(true);
      }
      return this.handleResponseError(error, request, next);
    }), finalize(() => this.hideSpinner(false)));
  }
  handleResponseError(error: HttpErrorResponse, request?: HttpRequest<any>, next?: HttpHandler) {
    if (error.status === 403 && error.error.status.message === 'EXPIRED_TOKEN') {
      return this.refreshToken().pipe(switchMap(() => next.handle(request)));
    }
    else if (error.status === 403 && error.error.status.message === 'INVALID_TOKEN') {
      this.authService.logout();
    }
    else {
      console.log(error);
      this.snackbarService.showSnackBar({ title: 'DEV-ONLY: Errore sconosciuto, controlla la console', duration: 5000, class: 'error' });
    }
    return throwError(error);
  }
  refreshToken(): Observable<any> {
    if (this.refreshTokenInProgress) {
      return new Observable(observer => {
        this.tokenRefreshed$.subscribe(() => {
          observer.next();
          observer.complete();
        });
      });
    }
    else {
      this.refreshTokenInProgress = true;
      return this.authService.refreshToken().pipe(tap((res) => {
        const user = this.authService.getLocalUser();
        user.RefreshToken = res.refresh_token;
        this.authService.setLocalUser(user);
        this.refreshTokenInProgress = false;
        this.tokenRefreshedSource.next();
      }));
    }
  }

  private showSpinner(): void {
    setTimeout(() => {
      this.spinnerService.show();
      this.queue++;
    }, 0);
  }
  private hideSpinner(force: boolean): void {
    setTimeout(() => {
      this.queue--;
      if (this.queue === 0 || force) { this.spinnerService.hide(); }
      if (this.queue < 0 || force) { this.spinnerService.hide(); this.queue = 0; }
    }, 100);
  }
}
