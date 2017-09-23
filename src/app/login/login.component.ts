import { Component } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
errMessage:string = null

constructor(private _userservice: UsersService,
            private router: Router) {}


login(form){
  this.errMessage = null
  let users = this._userservice.getUsers()
  let user = users.find(user => user.name === form.value.username)

  if(user == null){
    this.errMessage = "User name is incorrect or not registered"
  } else{
    if (user.password === form.value.password){
      localStorage.clear()
      localStorage.setItem('currentUser', form.value.username)
      this.router.navigate(['/'])  
    } else{
        this.errMessage = 'password is incorrect'
    }
  }
}

}
