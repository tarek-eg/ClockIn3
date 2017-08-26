import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSheetRoutingModule } from './time-sheet-routing.module';
import { TimeSheetComponent } from './time-sheet.component';
import { AddShiftComponent } from './add-shift.component';
import { EditShiftComponent } from './edit-shift.component';
import { ClockActionComponent } from './clock-action.component';
import { EditShiftBottomComponent } from './edit-shift-bottom.component';
import { TimeSheetHomeComponent } from './time-sheet-home.component';

@NgModule({
  imports: [
    CommonModule,
    TimeSheetRoutingModule
  ],
  declarations: [TimeSheetComponent,
     AddShiftComponent,
      EditShiftComponent,
       ClockActionComponent,
        EditShiftBottomComponent,
         TimeSheetHomeComponent]
})
export class TimeSheetModule { }
