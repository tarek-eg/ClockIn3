import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styles: []
})
export class AddShiftComponent implements OnInit {
users
selectedValue
  constructor(private usersService:UsersService) {
    
   }

   AddShift(x, y , z){
     console.log(x + " " + y + " " + z)
   }
  ngOnInit() {
    this.selectedValue = "Select Name"
    this.users = this.usersService.getUsers()  

  }

}
