import { Component, OnInit } from '@angular/core';
import { DatePipeComponent } from '../shared/date.pipe';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styles: []
})
export class ClockComponent implements OnInit {

    today: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
