import { Injectable } from '@angular/core';
import { User } from '../login/User';

@Injectable()


export class LoginService {

  constructor() { }

  loggedIn = false;

  login(user: User): boolean {

    if (user.userName == "atilla" && user.userPassword == "12345") {
      return true;
      this.loggedIn = true;
      localStorage.setItem("islogged", user.userName);
    }
    return false;
  }

  isloggedIn() {
    return this.loggedIn;
  }

  logOut(){
    
    localStorage.removeItem("islogged");

    this.loggedIn=false;


  }

}
