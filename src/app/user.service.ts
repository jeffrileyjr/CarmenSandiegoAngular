import { Injectable } from '@angular/core';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string = null;
  constructor(private router: Router) { }

  getUserName(form) {
    this.userName = form.value.userName;
    this.router.navigate(['/home']);
    // return this.userName;  
  }

  returnUserName() {
    return this.userName;
  }
}