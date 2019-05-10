import { Component, OnInit } from '@angular/core';
import User from '../user';
import { UserService } from '../user.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})

export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User | null = this.users ? this.users[0] : null;

  constructor( private userService : UserService ) {
  }


  onUserClick(user){
    this.selectedUser = user;
    console.log(this.selectedUser)
  }

  saveUser(user){
    console.log(user)
  }

  getUsers(){
    return this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.getUsers().unsubscribe();
  }
}
