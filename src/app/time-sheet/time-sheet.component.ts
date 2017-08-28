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

EditRef(index){
  this.index = index
}

onSubmit(){
  
}
}

