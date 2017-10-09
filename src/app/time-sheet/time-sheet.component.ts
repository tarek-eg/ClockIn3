import { Component, ElementRef } from '@angular/core';
import { UsersService, TS } from '../shared/users.service';
import { Router } from '@angular/router'
import { ShiftService } from '../ServicesAPI/Shift.Service'
var moment = require('moment');
require('moment-precise-range-plugin');
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styles: [],
  providers: [ShiftService]
})
export class TimeSheetComponent  {
  
  
  some2 = true;

   closeResult: string;

 /// closeResult: string;

  xRow: number
  usersList 
  timeSheets
  xUser
  xDate
  isedittrue:boolean = false
  timeIn
  timeOut
  diffTimeSheet
  shifts
  constructor(
    private usersService:UsersService, 
    private router:Router, 
    private modalService: NgbModal,
    private shiftService: ShiftService

  ) { }

  ngOnInit() {
    //filling the toolbar controls
    this.xUser = "All"
    // this.usersList = this.usersService.getUsers()
    this.usersList = this.usersService.getUsers()
    setTimeout(() => this.shiftService.getAllShifts().subscribe(res => console.log(res)), 3000)
    //retrieve all shifts from the service
    this.shiftService.getAllShifts().subscribe(res => this.timeSheets = res.filter(res => res.IsDeleted == false))
    //changing the timesheet layout to fit the initial view
    setTimeout(() => this.diffTimeSheet =  separateDates(this.timeSheets, 'ShiftDate'),1000)
    
  }



activateUser(user){
  if(user !== "All"){
  // this.timeSheets = this.shiftService.getAllShifts().subscribe(res => this.timeSheets = res)
  // this.diffTimeSheet =  separateDates(this.usersService.timeSheet, 'ShiftDate')

  this.xDate = null
  this.timeSheets = this.shiftService.getAllShifts().subscribe(res => this.timeSheets = res.filter(res => res.userName == user))
  setTimeout(() => this.diffTimeSheet =  separateDates(this.timeSheets, 'ShiftDate'), 1000)

  } else
  { this.ngOnInit()}
}


activateDate(date){

    this.xUser = "All"
    this.timeSheets = this.usersService.timeSheet
    this.diffTimeSheet =  separateDates(this.usersService.timeSheet, 'ShiftDate')
    this.timeSheets = this.usersService.timeSheet.filter(res => moment(res.date).format() == moment(date).format()) 
    this.diffTimeSheet =  separateDates(this.timeSheets, 'ShiftDate')
    } 

calcDuration(timein, timeout){
  TotalDuration(timein, timeout)
}

clearAll(){
  this.xDate = null
  this.xUser = "All"
  this.ngOnInit()
}

addShift(){
  this.timeSheets = this.usersService.timeSheet
  this.diffTimeSheet =  separateDates(this.usersService.timeSheet, 'date')

}

endShiftNow(shift){
  let index = timesheetRef(shift, this.timeSheets)
  let exitTime = moment().format();
  this.usersService.timeSheet[index].timeout = exitTime;
  this.usersService.timeSheet[index].total = TotalDuration(shift.timein, exitTime)
  
}
EditRef(shift){
  this.timeIn = moment(shift.timein).format().substring(0,16)
  this.timeOut =  moment(shift.timeout).format().substring(0,16)
  this.xRow = timesheetRef(shift, this.timeSheets) 
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




  setStyle1() {
  let styles = {
   'width.px': this.some2 ? '0' : '300',
  };
return styles;
}

toggle1() {
   this.some2 =!this.some2;
 }
   

  
  deleteShift(shiftID){
    console.log(shiftID)
    this.shiftService.DeleteShift(shiftID)
  }


}


// function Calc(y, x){
//   //return moment.utc(moment(x,"DD/MM/YYYY hh:mm").diff(moment(y,"DD/MM/YYYY hh:mm"))).format("hh:mm")
//   return moment.duration(moment(x).diff(moment(y)));

// }


function TotalDuration(timein, timeout) {
  return moment.preciseDiff(moment(timein).format('LLLL'), moment(timeout).format('LLLL'))
}


function separateDates(array, propertyName) {
  let newTSV = []
  let xArr = array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i)
  for(let x of xArr){
    newTSV.push(new TimesheetView(x.ShiftDate, array.filter(res => res.ShiftDate == x.ShiftDate)))
  }
  return newTSV
  }

  function timesheetRef(obj, source){
    for(let shift of source){
      if(shift.username == obj.username && shift.date == obj.date && shift.timein == obj.timein){
        return source.indexOf(shift)
      }
    }
  }


  export class TimesheetView{
    public constructor( public date: any, public obj: TS[]) {}
  }