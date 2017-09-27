import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { RightSidebarComponent } from '../shared/right-sidebar.component';
import { UsersService, TS } from '../shared/users.service';
import { EmitterService } from '../shared/emitter.service'
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
  
  constructor(private usersService:UsersService,
              private flashMessage:FlashMessagesService,
              // private emitterService:EmitterService 
            ) {
   }

   AddShift(user, timein , timeout){
     console.log()
    this.usersService.timeSheet.push(new TS(user, timein, timein, timeout, TotalDuration(timein,timeout)))
    // this.emitterService.closeSidebar()
    this.flashMessage.show("Shift has been successfuly added.", {cssClass: 'alert-success',  timeout: 3000})
    this.change.emit()
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