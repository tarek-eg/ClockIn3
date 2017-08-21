import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-sheet-home',
  template: `
        <p>Time sheet home component</p>
        <router-outlet></router-outlet>

  `
})
export class TimeSheetHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
