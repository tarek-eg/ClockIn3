import { Component, ElementRef } from '@angular/core';
import { UsersService } from '../shared/users.service';
import * as moment from 'moment';



@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styles: [],
  

})
export class TimeSheetComponent  {
  timesheetsDB
  xUser
  xDate
  index
  isEditTrue = false
  timeIn
  timeOut

  constructor(private usersService:UsersService) {
    
   }

  ngOnInit() {
    this.xUser = "All"
    this.timesheetsDB = this.usersService.getTimesheets()  

  }

activateUser(){
  this.xDate = null
}

activateDate(){
    this.xUser = "All"
}

clearAll(){
  this.xDate = null
  this.xUser = "All"
}

endShiftNow(index){
  this.timeOut = new Date().toLocaleTimeString('en-US', { hour12: false, 
                                             hour: "numeric", 
                                             minute: "numeric"});

  
  this.timesheetsDB[2].timeout = this.timeOut
}
EditRef(index, timein, timeout){
  this.index = index
  this.timeIn = timein
  this.timeOut = timeout
  this.isEditTrue = true
}

onSubmit(form){
  console.log(form)
  this.isEditTrue = false
}
onEditCancel(){
  this.index = null
  this.timeIn = null
  this.timeOut = null
  this.isEditTrue = false
}

CalcTime(start, end){
 
  return Calc(start, end)
}
}


function Calc(y, x){
  //return moment.utc(moment(x,"DD/MM/YYYY hh:mm").diff(moment(y,"DD/MM/YYYY hh:mm"))).format("hh:mm")
  return moment.duration(moment(x).diff(moment(y)));

}

