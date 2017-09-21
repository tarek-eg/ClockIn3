import { Component, ElementRef } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Router } from '@angular/router'
var moment = require('moment');
require('moment-precise-range-plugin');
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styles: [],
  

})
export class TimeSheetComponent  {
   closeResult: string;
  xRow: number
  timeSheet 
  xUser
  xDate
  index
  isedittrue:boolean = false
  timeIn
  timeOut

  constructor(private usersService:UsersService, private router:Router, private modalService: NgbModal) {
    
   }

  ngOnInit() {
    this.xUser = "All"
    if (this.usersService.timeSheet.length == 0){
      this.usersService.timeSheet = this.usersService.getTimesheets()
    }
    this.timeSheet = this.usersService.timeSheet
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

endShiftNow(index, timein){
  let exitTime = moment().format();
  this.usersService.timeSheet[index].timeout = exitTime;
  this.usersService.timeSheet[index].total = TotalDuration(timein, exitTime)
}
EditRef(index, timein, timeout){
  this.index = index
  this.timeIn = moment(timein).format().substring(0,16)
  this.timeOut =  moment(timeout).format().substring(0,16)
  this.xRow = index
  this.isedittrue = true
}


onSubmit(form){
  this.usersService.timeSheet[this.xRow].timein = moment(form.timein).format()
  this.usersService.timeSheet[this.xRow].timeout = moment(form.timeout).format()
  this.usersService.timeSheet[this.xRow].total = TotalDuration(form.timein, form.timeout)

  this.isedittrue = false

}
onEditCancel(){
  //this.index = null
 // this.timeIn = null
 // this.timeOut = null
  this.isedittrue = false
}
 open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}


function Calc(y, x){
  //return moment.utc(moment(x,"DD/MM/YYYY hh:mm").diff(moment(y,"DD/MM/YYYY hh:mm"))).format("hh:mm")
  return moment.duration(moment(x).diff(moment(y)));

}


function TotalDuration(timein, timeout) {
  return moment.preciseDiff(moment(timein).format('LLLL'), moment(timeout).format('LLLL'))
}
