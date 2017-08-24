import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styles: []
})
export class TimeSheetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tmpTimeSheetDB = [
    {username: "Tarek Goda", timein: "9:29", timeout: "11:35", total: "2 hours, 6 mins" },
    {username: "Amani Harb", timein: "8:11", timeout: "12:01", total: "4 hours, 22 mins" },
    {username: "Khaled Jamal", timein: "9:03", timeout: "15:33", total: "1 hours, 9 mins" },
    {username: "Osama Nour", timein: "7:12", timeout: "19:01", total: "0 hours, 33 mins" },
    {username: "Mahmoud Slouma", timein: "11:11", timeout: "13:00", total: "8 hours, 1 mins" },
  
  ]
}

