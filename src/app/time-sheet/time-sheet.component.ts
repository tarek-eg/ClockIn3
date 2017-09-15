import { Component, ElementRef } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Router } from '@angular/router'
var moment = require('moment');
require('moment-precise-range-plugin');




@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styles: [],
  

})
export class TimeSheetComponent  {
  xRow: number
  timeSheet
  xUser
  xDate
  index
  isedittrue:boolean = false
  timeIn
  timeOut

  constructor(private usersService:UsersService, private router:Router) {
    
   }

  ngOnInit() {
    this.xUser = "All"
    this.timeSheet = this.usersService.getTimesheets()  

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

  
  this.usersService.timeSheet[2].timeout = this.timeOut
}
EditRef(index, timein, timeout){
  this.index = index
  this.timeIn = moment(timein).format().substring(0,16)
  this.timeOut =  moment(timeout).format().substring(0,16)
  this.xRow = index
  this.isedittrue = true
}


onSubmit(form){
  this.timeSheet[this.xRow].timein = moment(form.timein).format()
  this.timeSheet[this.xRow].timeout = moment(form.timeout).format()
  this.timeSheet[this.xRow].total = TotalDuration(form.timein, form.timeout)

  this.isedittrue = false

}
onEditCancel(){
  //this.index = null
 // this.timeIn = null
 // this.timeOut = null
  this.isedittrue = false
}

CalcTime(start, end){
 
  return Calc(start, end)
}
}


function Calc(y, x){
  //return moment.utc(moment(x,"DD/MM/YYYY hh:mm").diff(moment(y,"DD/MM/YYYY hh:mm"))).format("hh:mm")
  return moment.duration(moment(x).diff(moment(y)));

}


function TotalDuration(timein, timeout) {
  return moment.preciseDiff(moment(timein), moment(timeout))
}
