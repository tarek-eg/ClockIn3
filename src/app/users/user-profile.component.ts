import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute,ParamMap } from '@angular/router';
import { UsersService, User } from '../shared/users.service';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit {

  user: User;
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsersService
  ) { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.service.getUsers()
    // .then((user: User) => this.user = user);

  

  }

}
