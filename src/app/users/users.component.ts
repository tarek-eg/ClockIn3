import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../users.service';
import { Routes, Router, ActivatedRoute,ParamMap } from '@angular/router';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  private users = [];
  user: User;
  private selectedId: number;

  constructor(private _userservice: UsersService,
              private router: Router ) {}

              

  ngOnInit() {
    this.users = this._userservice.getUsers();    
  

}

onSelect(user) {
  this.router.navigate(['/users', user.id]);
  
}
isSelected(user: User) { return user.id === this.selectedId; }



}

