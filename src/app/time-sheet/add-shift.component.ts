import { Component, OnInit } from '@angular/core';
import { UsersService, TS } from '../shared/users.service';
var moment = require('moment');
require('moment-precise-range-plugin');


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

   AddShift(user, timein , timeout){
    this.usersService.timeSheet.push(new TS(user, timein, timein, timeout, TotalDuration(timein,timeout)))
   }
  ngOnInit() {
    this.selectedValue = "Select Name"
    this.users = this.usersService.getUsers()  

  }

  
}

function TotalDuration(timein, timeout) {
  return moment.preciseDiff(moment(timein).format('LLLL'), moment(timeout).format('LLLL'))
}