import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { RightSidebarComponent } from '../shared/right-sidebar.component';
import { UsersService, TS } from '../shared/users.service';
import { EmitterService } from '../shared/emitter.service'
import { Shift } from '../ServicesAPI/Shift'
import { ShiftService } from '../ServicesAPI/Shift.Service'
var moment = require('moment');
require('moment-precise-range-plugin');
import { FlashMessagesService } from 'angular2-flash-messages'


@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styles: []
})
export class AddShiftComponent implements OnInit {
@Output()change = new EventEmitter()

  users
  selectedValue
  shiftIn: any
  shiftOut: any
  // shift: Shift[]
  
  constructor(private usersService:UsersService,
              private flashMessage:FlashMessagesService,
              private shiftService: ShiftService
              // private emitterService:EmitterService 
            ) {
   }

   AddShift(user, timein , timeout){
    let shift = new Shift(1,"Cyclers", 5, null ,user, timein, timein, timeout, "hour", false)
    // this.shift.push(new Shift(1,"Cyclers", 5, user, timein, timein, timeout, "hour", false))
    this.usersService.timeSheet.push(new TS(user, timein, timein, timeout, TotalDuration(timein,timeout)))
    // this.emitterService.closeSidebar()
    this.flashMessage.show("Shift has been successfuly added.", {cssClass: 'alert-success',  timeout: 3000})
    this.change.emit()
    console.log(shift)
    this.shiftService.AddShift(shift)
    
  }
  ngOnInit() {
    this.selectedValue = "Select Name"
    this.users = this.usersService.getUsers()  

  }

  ngAfterViewInit() {

  }
  

   // Obervable Source



      
}

function TotalDuration(timein, timeout) {
  return moment.preciseDiff(moment(timein).format('LLLL'), moment(timeout).format('LLLL'))
}