import { Component, OnInit } from '@angular/core';
import User from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})

export class UsersComponent implements OnInit {

  users: User[] = [
    {
      id:0,
      name: 'Miguel',
      email: 'miguel@mail.com',
      role: 0
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
