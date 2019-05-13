import User from '../user';
import { SessionService } from '../session.service'
import { Component } from '@angular/core';

export default class Session
{
    id: number
    user: User;

    getUser(): User | void {
        return this.user
    }

    constructor(user: User) {
        this.id = user.id
        this.user = user
    }
}