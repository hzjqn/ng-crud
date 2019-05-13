import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from './user';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  usersUrl: string = 'https://my-json-server.typicode.com/hzjqn/ng-crud/users'

  constructor( private http: HttpClient ){

  }

  handleError(users){
    return users;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    
    .pipe(
      catchError(this.handleError('getUsers'))
    );
  }
}
