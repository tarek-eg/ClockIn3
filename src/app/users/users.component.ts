import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../shared/users.service';
import { Routes, Router, ActivatedRoute,ParamMap } from '@angular/router';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  userSelected: boolean = true
  users
  user: User;
  private selectedId: number;

  constructor(private usersService: UsersService,
              private router: Router ) {}

              

  ngOnInit() {
    this.users = this.usersService.getUsers();    
    

}

onChange(index){
  if (this.users[index].isChecked == true){
    this.userSelected = true
  } else{
    this.userSelected = false
  }
}


onSelect(user) {
  this.router.navigate(['/users', user.id]);
  
}
isSelected(user: User) { return user.id === this.selectedId; }



generatePassword(){
  // later on to dispatch email with username and password
}

isEmailDuplicate(){
  // to check if the email is duplicate
}

deleteUser(){
  
}

  addUser(fname, lname, email){
  console.log(fname + " " + lname + " " + email)
  this.users.push(new Account(5, "Khaled J", fname, lname, "HR", "1231231" , email))
  this.generatePassword()
}

}






export  class Account {
    public id: any
    public name: any
    public firstname: any
    public lastname: any
    public jobtitle: any
    public password: any
    public email: any
    public constructor(id: any, name: any, firstname: any, lastname: any, jobtitle: any, password: any, email: any ){

      this.id = id
      this.name = name
      this.firstname = firstname
      this.lastname = lastname
      this.jobtitle = jobtitle
      this.password = password
      this.email = email
    }
}

