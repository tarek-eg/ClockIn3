import { Component, OnInit } from '@angular/core';
// import { UsersService, User } from '../shared/users.service';
import { UserService} from '../ServicesAPI/User.Service'
import { User } from '../ServicesAPI/User'
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Routes, Router, ActivatedRoute,ParamMap } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent  {
  sidebar3 = true;
  isUserSelected: boolean = true
  users:User[];
  user = new User();
  profileId : number ;
  selectedId: number;
  userSelected: string;
  closeResult: string;
  UserID: number;
  GroupID: number;
  LoginName: string;
  Password: string;
  UserColor: string;
  UserLogo: string;
  UserName: string;
  HourRate: number;
  IsAdmin: boolean;
  IsDeleted: boolean;
  private x;

  constructor(//private usersService: UsersService,
              private router: Router,
              private modalService: NgbModal,
              private userServ : UserService,
              private _http: Http
             ) {

    // this.user.UserID=2;
    // this.user.GroupID=1;
    // this.user.LoginName="Tarek";
    // this.user.Password="asd";
    // this.user.UserColor="red";
    // this.user.UserLogo="gg";
    // this.user.UserName="TarekMostafa";
    // this.user.HourRate;
    // this.user.IsAdmin;
    // this.user.IsDeleted;

    // this._http.get("http://cyclockapi.mbde3on.com/api/user/")
    // .map(res=>res.json())
    // .subscribe(data => {this.users = data;}
    //   );
}

// Tarek
ngOnInit(){
  this.userServ.getAllUsers()
    .subscribe(users => {this.users = users});
}

checkBoxChecked(i, e){
  if(e.target.checked){
  this.isUserSelected = true
  this.x = this.users[i].UserID
  console.log(this.x)
  }else{
    console.log('unchecked')
  }
}

deleteUser(){
  let userArray = this.users
  if(this.isUserSelected){
    console.log("hi" + this.x)
    this.userServ.DeleteUser(this.x)
    this.userServ.getAllUsers() // update the view after deleting the user
    .subscribe(users => {
      for(let i=0; i < userArray.length; i++)
      {
        if(userArray[i].UserID === this.x){
          userArray.splice(i,1)
        }
      } });
  }
}

onEdit() {  
    console.log("edit " + this.x)
    // let id = this.x
    setTimeout(()=> {
      this.router.navigate(['/users', this.x]);
    }, 1000);
  }

 // Get Users
//   ngOnInit() {
//     this.users = this.usersService.getUsers();
// };
// onChange(index){
//   for (let i of this.users){
//     i.isChecked = false
//   }
//   if (this.users[index].isChecked == true){
//     this.isUserSelected = true  
//     this.selectedId = null  
//   } else{
//     this.isUserSelected = false    
//     this.selectedId = index.id
//     console.log(this.selectedId)
//   }


// }




// isSelected(user: User) { 
//   return user.id === this.selectedId;
//  }



// generatePassword(){
//   // later on to dispatch email with username and password
// }

// isEmailDuplicate(){
//   // to check if the email is duplicate
// }

// deleteUser(){
// }

//   addUser(fname, lname, email){
//   console.log(fname + " " + lname + " " + email)
//   this.users.push(new Account(5, "Khaled J", fname, lname, "HR", "1231231" , email))
//   this.generatePassword()
// }

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


   setStyle3() {
  let styles = {
   'width.px': this.sidebar3 ? '0' : '300',
  };
return styles;
}

toggle3() {
   this.sidebar3 =!this.sidebar3;
 }


// }





// export  class Account {
//     public id: any
//     public name: any
//     public firstname: any
//     public lastname: any
//     public jobtitle: any
//     public password: any
//     public email: any
//     public constructor(id: any, name: any, firstname: any, lastname: any, jobtitle: any, password: any, email: any ){

//       this.id = id
//       this.name = name
//       this.firstname = firstname
//       this.lastname = lastname
//       this.jobtitle = jobtitle
//       this.password = password
//       this.email = email
//     }
}
