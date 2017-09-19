import { Component, OnInit , OnDestroy} from '@angular/core';
import { Routes, Router, ActivatedRoute,ParamMap } from '@angular/router';
import { UsersService, User } from '../shared/users.service';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit, OnDestroy {

  userId: number;
  private sub: any;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsersService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.userId = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });

this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.service.getUser(params.get('id')))
    .subscribe((user: User) => this.user = user);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  }


