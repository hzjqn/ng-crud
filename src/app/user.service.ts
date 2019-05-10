import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from './user';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USERS: User[];
  
  /* [
      {
          "id": 1,
          "username": "adminUser",
          "role": 0,
          "email": "admin@localhost.com"
      },
      {
          "id": 2,
          "username": "testUser",
          "role": 1,
          "email": "at@dominio.com"
      },
      {
          "id": 3,
          "username": "carla232",
          "role": 1,
          "email": "nombre@empresa.com"
      },
      {
          "id": 4,
          "username": "peter323",
          "role": 1,
          "email": "emailfalso@a123e.com"
      },
      {
          "id": 5,
          "username": "john123",
          "role": 1,
          "email": "lorem@email.com"
      }
  ] */

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
