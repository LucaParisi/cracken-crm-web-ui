import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthUrl} from './auth.url';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {AccessToken} from '@interfaces';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  private isAuthenticated$ = new BehaviorSubject<boolean>(this.hasValidToken());
  private token?: string = 'ASDRUBALE';

  private hasValidToken() {
    // optionally check expiry via jwt-decode
    return !!this.token;
  }

  login(username: string, password: string): Observable<AccessToken> {
    return this.http.post<AccessToken>(AuthUrl.LOGIN_URL, {username, password}).pipe(
      tap(({ token }) => {
        this.token = token;
        this.isAuthenticated$.next(true);
      })
    );
  }

  logout() {
    window.localStorage.removeItem('token');
    this.isAuthenticated$.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn() { return this.isAuthenticated$.asObservable(); }

  getToken()   { return this.token }


}
