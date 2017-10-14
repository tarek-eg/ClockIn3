import { Component, OnInit , OnDestroy} from '@angular/core';
import { Routes, Router, ActivatedRoute,ParamMap } from '@angular/router';
import { UsersService } from '../shared/users.service';
import 'rxjs/add/operator/switchMap';
import { UserService} from '../ServicesAPI/User.Service'
import { User } from '../ServicesAPI/User'



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit, OnDestroy {

  userId: number;
  private sub: any;
  user: User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsersService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.userId = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });

// this.route.paramMap
//     .switchMap((params: ParamMap) =>
//       this.service.getUser(params.get('id')))
//     .subscribe((user: User) => this.user = user);

    // Khaled J --> Start
    // Khaled J --> commented out the paraMap
    // Khaled J --> retrieve all users and filter a single user according the current user id
    this.userService.getAllUsers().subscribe(user => this.user = user.filter(user => user.UserID === this.userId))
    
    // Khaled J --> Showing the result after 5 seconds as loading up 'this.user' take some time
    setTimeout(() => console.log(this.user),5000)
    // Khaled J --> End
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onCancel(){
    setTimeout(()=> {
      this.router.navigate(['/users']);
    }, 1000);
  }

  saveUser(){
    
  }
  }


