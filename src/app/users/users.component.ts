import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../shared/users.service';
import { Routes, Router, ActivatedRoute,ParamMap } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  isUserSelected: boolean = true
  users;
  user: User[];
  selectedId: number;
  userSelected: string;
  closeResult: string;

  constructor(private usersService: UsersService,
              private router: Router,
              private modalService: NgbModal
             ) {}

              

  ngOnInit() {
    this.users = this.usersService.getUsers();
}

onChange(index){
  for (let i of this.users){
    i.isChecked = false
  }
  if (this.users[index].isChecked == true){
    this.isUserSelected = true  
    this.selectedId = null  
  } else{
    this.isUserSelected = false    
    this.selectedId = index.id
    console.log(this.selectedId)
  }
}

// isUserChecked(user){
//   for(let i of this.users){
//     if(!i.ischecked){
//       console.log(`user ${i.firstname} checked`)
//      return this.usersService.getUsers().slice(user)
//     }else{
//       console.log('hi')
//     }
//   }
// }

onEdit() {  
  console.log(this.selectedId)
  let id = this.selectedId
  setTimeout(()=> {
    this.router.navigate(['/users', '1']);
  }, 1000);
}

isSelected(user: User) { 
  return user.id === this.selectedId;
 }



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

// This function opens the modal dialog 'Tarek'
onDeleteUserDialog(content) {
  this.modalService.open(content).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
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

