import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeSheetRoutingModule } from './time-sheet-routing.module';
import { TimeSheetComponent } from './time-sheet.component';
import { AddShiftComponent } from './add-shift.component';
import { EditShiftComponent } from './edit-shift.component';
import { ClockActionComponent } from './clock-action.component';
import { EditShiftBottomComponent } from './edit-shift-bottom.component';
import { TimeSheetHomeComponent } from './time-sheet-home.component';
import { TimeFilterPipe } from './time-filter.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TimeSheetRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [TimeSheetComponent,
     AddShiftComponent,
      EditShiftComponent,
       ClockActionComponent,
        EditShiftBottomComponent,
         TimeSheetHomeComponent,
         TimeFilterPipe,
    
      ]
})
export class TimeSheetModule { }
