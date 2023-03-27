import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable,throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@service/models';
//import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private apiURL = "http://localhost:8000/api/userss/";
  private apiURLs = "http://localhost:8000/api/userss/authenticate/";
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
   }
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
      console.log(username);
        return this.http.get<User>(this.apiURLs+username)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
              /*  localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
                */
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/logins/login']);
    }

    register(user: User) {
        return this.http.post(this.apiURL, JSON.stringify(user), this.httpOptions);
    }

    getAll() {
        return this.http.get<User[]>(this.apiURL);
    }

    getById(id: string) {
        return this.http.get<User>(this.apiURL+id);
    }

    update(id: string, params: any) {
        return this.http.put(this.apiURL+id,JSON.stringify(params), this.httpOptions)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
              /*  if (id == this.userValue?.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
*/
              //  catchError(this.errorHandler)
            }));
    }

    delete(id: string) {
        return this.http.delete(this.apiURL+id,this.httpOptions)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
             /*   if (id == this.userValue?.id) {
                    this.logout();
                }
                return x;
                */
            }));
    }


}
