import { Component, OnInit } from '@angular/core';
import { DatePipeComponent } from '../shared/date.pipe';
import { Observable } from 'rxjs/Rx';
import { UsersService, xUser } from '../shared/users.service';
var moment = require('moment');
require('moment-precise-range-plugin');


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styles: []
})


export class ClockComponent {
  private timeSheet: Array<xUser> = []
  today = '2017-08-31 01:00 PM'
  xDuration
  ds
  _shiftStart: boolean = true
  lastUpdated

  
  constructor(private usersService: UsersService) {
    this.lastUpdated = new Date()
  }

  TogggleShift() {
    this._shiftStart = !this._shiftStart
    if (!this._shiftStart) {
      //start shift
      this.timeSheet.push(new xUser(4, new Date, "Open"))
      this.xDuration = Timer(this.today)
      setInterval(() => this.xDuration = Timer(this.today), 1000)
      // @Team - this creates a new timeSheet instance. Throw it into the DB.
    } else {
      //end shift
      updateTime(this.timeSheet, 4)
      // @Team - this function updates the timeSheet with the shift end date. Use it to update the service.   
    }

  }
  ngOnInit() {
    //pull timesheets to ds
    this.ds = this.usersService.getTimesheets()


    // rettrieve if user is online
    if (isUserOnline(this.ds, "Khaled Jamal")) {
      this._shiftStart = !this._shiftStart
      this.xDuration = Timer(this.today)
      setInterval(() => this.xDuration = Timer(this.today), 1000)
    }
  }
}

function Calc(y, x) {
  return moment.utc(moment(x, "DD/MM/YYYY HH:mm:ss").diff(moment(y, "DD/MM/YYYY HH:mm"))).format("HH:mm")
}


function updateTime(array, x) {
  for (var i in array) {
    if (array[i].id == x && array[i].endTime == "Open") {
      array[i].endTime = new Date
      break;
    }
  }
}


function Timer(today) {
  return moment.preciseDiff(today, moment().format("LLL"))
}


function isUserOnline(array, username): boolean {
  for (var i in array) {
    if (array[i].username == username && array[i].timeout == "Open") {
      return true
    }
  }
}
