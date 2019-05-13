import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import Session from './session';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  session : Session;
  sessionUrl : 'https://my-json-server.typicode.com/hzjqn/ng-crud/session'

  getSessionData(): Observable<Session>{
    return this.http.get<Session>(this.sessionUrl)
  }

  constructor(private http: HttpClient) {

  }

}
