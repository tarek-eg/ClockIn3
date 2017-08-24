import { Component, OnInit } from '@angular/core';
import { DatePipeComponent } from '../shared/date.pipe';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styles: []
})
export class ClockComponent  {


    today: number = Date.now();
    _shiftStart:boolean = true
    lastUpdated
  constructor() { 
    this.lastUpdated = new Date()

  }

TogggleShift(){
  this._shiftStart = !this._shiftStart
  console.log(this._shiftStart)
}
}
