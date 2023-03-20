import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../Models/User.Model';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private user = new BehaviorSubject<UserModel>(null);
  currentUser = this.user.asObservable();

  constructor(private router: Router) {

  }

  public getUser(model: UserModel) {
    this.user.next(model);
    console.log(this.user);
    if (this.user == null)
      this.router.navigate(['']);
  }
}
