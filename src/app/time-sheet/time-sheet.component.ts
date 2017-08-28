import { Component, ElementRef } from '@angular/core';
import { UsersService } from '../shared/users.service';


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

}

