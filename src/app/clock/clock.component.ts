import { Component, OnInit } from '@angular/core';
import { DatePipeComponent } from '../shared/date.pipe';
import {Observable} from 'rxjs/Rx';
import { UsersService, xUser } from '../shared/users.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styles: []
})
export class ClockComponent  {
private timeSheet:Array<xUser> = []
 

    today: number = Date.now();
    _shiftStart:boolean = true
    lastUpdated
  constructor(private usersService:UsersService) { 
    this.lastUpdated = new Date()



  }

TogggleShift(){
  this._shiftStart = !this._shiftStart

  if (!this._shiftStart){
    //start shift
      this.timeSheet.push(new xUser(4, new Date, "Open"))
      // @Team - this creates a new timeSheet instance. Throw it into the DB.
  }else{
    //end shift
      updateTime(this.timeSheet, 4)
      // @Team - this function updates the timeSheet with the shift end date. Use it to update the service.   
  }
 
}

}



function Calc(y, x){
  return moment.utc(moment(x,"DD/MM/YYYY HH:mm:ss").diff(moment(y,"DD/MM/YYYY HH:mm"))).format("HH:mm")
}

function updateTime (array, x){
    for(var i in array) {
        if(array[i].id == x && array[i].endTime == "Open"){
          array[i].endTime = new Date
          break;
        }
    }
}