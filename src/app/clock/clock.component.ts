import { Component, OnInit } from '@angular/core';
import { DatePipeComponent } from '../shared/date.pipe';
import { Observable } from 'rxjs/Rx';
import { UsersService, xUser, TS } from '../shared/users.service';
//import { UserService } from '../ServicesAPI/User.Service';
var moment = require('moment');
require('moment-precise-range-plugin');


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styles: [`
  .ff{
     height: 100vh;
      position: fixed;
      z-index: 1;
      top: 63;
      right: 0;
       background-color: rgba(250,252,254,.94);
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 13px;
      margin-top: 19px;

}

  `]
})


export class ClockComponent {
   some = true;
  some2 = true;

  today 
  Wawa = setInterval(()=> this.today = new Date, 1000) //'2017-08-31 01:00 PM'
  xDuration
  xd
  user: string = localStorage.getItem('currentUser')
  
  _shiftStart= true
  lastUpdated
  timerInterval
  
  constructor(private usersService: UsersService) {
    this.lastUpdated = new Date()
  }

  TogggleShift() {
    
  this._shiftStart = !this._shiftStart
  if (!this._shiftStart) {
    //start shift
    this.usersService.timeSheet.push(new TS(localStorage.getItem('currentUser'), new Date, new Date, "", ""))
    let xRow = OpenShift(this.usersService.timeSheet, 'Khaled Jamal')
    this.xDuration = "less than a minute"
    this.timerInterval = setInterval(()=>this.xDuration = Timer(this.usersService.timeSheet[xRow].timein), 1000)
    
  
  } else {
    //end shift
    let x = updateTime(this.usersService.timeSheet, 'Khaled Jamal')

    clearInterval(this.timerInterval)
  }
  }

ngOnInit() {
  // localStorage.clear()
  // localStorage.setItem('currentUser', 'Khaled Jamal')
  this.today = new Date
  // retrieve timesheet to check if the user is online

  if (this.usersService.timeSheet.length == 0) {
     this.usersService.timeSheet = this.usersService.getTimesheets()
  }

  

  // rettrieve if user is online
  // if (isUserOnline(this.usersService.timeSheet, "Khaled Jamal")) {
  //   this._shiftStart = !this._shiftStart
  //   let xRow = OpenShift(this.usersService.timeSheet, 'Khaled Jamal')
  //   this.xDuration = Timer(this.usersService.timeSheet[xRow].timein)
  //   this.timerInterval = setInterval(()=>this.xDuration = Timer(this.usersService.timeSheet[xRow].timein), 1000)
  //   }
  }

  ngOnDestroy(){
    console.log("I'm goner!")
    clearInterval(this.timerInterval)
  }

   setStyle2() {

  let styles = {
   'width.px': this.some ? '0' : '300',


  };

return styles;
}





toggle() {

   this.some =!this.some;

 }




}

function Calc(y, x) {
  return moment.utc(moment(x, "DD/MM/YYYY HH:mm:ss").diff(moment(y, "DD/MM/YYYY HH:mm"))).format("HH:mm")
}


function updateTime(array, x) {
  for (var i in array) {
    if (array[i].username == x && array[i].timeout == "") {
      array[i].timeout = new Date
      return i
      //break;
    }
  }
}


function Timer(timein) {
  if (moment.preciseDiff(moment(timein).format("LLL"), moment().format("LLL"))=="") {
    return "less than a minute"
  } else{
  return moment.preciseDiff(moment(timein).format("LLL"), moment().format("LLL"))
  }
}


function isUserOnline(array, username): boolean {
  for (var i in array) {
    if (array[i].username == username && array[i].timeout == "") {
      return true
    }
  }
}

function OpenShift(array, username) {
  for (var i in array) {
    if (array[i].username == username && array[i].timeout == "") {
      console.log("yes")
      return i
    }
  }
}





    //private timeSheet: Array<xUser> = []
    //setInterval(() => this.xDuration = Timer(this.today), 1000)
    //this.xDuration = setInterval(() => console.log(this.xDuration = Timer(this.today)), 1000)
    //setInterval(() => console.log(this.xDuration = this.wow()), 1000)
    // @Team - this creates a new timeSheet instance. Throw it into the DB.
