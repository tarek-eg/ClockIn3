import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  users = [];

  constructor(private _userservice: UsersService) {}

  ngOnInit() {
    this.users = this._userservice.getUsers();
    
    

}
}