import { Component, OnInit, Input, ViewChild, ElementRef  } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { EmitterService } from '../shared/emitter.service'

@Component({
  selector: 'app-right-sidebar',
  template: `


<md-toolbar style="background-color:#dddddd">

<ng-content></ng-content>
<span style="flex: 1 1 auto"></span>
<button *ngIf="bugerBox" md-icon-button (click)="start.open()">
        <md-icon >menu</md-icon>
        </button>

</md-toolbar>
<md-sidenav align="end" #start mode="over" style="width:300px">
 
<hr>
<button md-button (click)="start.close()"><md-icon >clear</md-icon></button>
<md-nav-list>
<ng-content select="[card-body]"></ng-content>
</md-nav-list> 
</md-sidenav>

  `,
  styles: [],

})
export class RightSidebarComponent implements OnInit {
  @ViewChild('start') public myNav: MdSidenav;
  @Input('bugerBox')bugerBox:boolean
 

  constructor(private emitterService:EmitterService ) { }

  ngOnInit() {
    this.emitterService.closeSidebar$.subscribe(() =>this.myNav.close())
   }


  doHide(i){ 
    console.log(i)
    // this.myNav.close()
  }

}


