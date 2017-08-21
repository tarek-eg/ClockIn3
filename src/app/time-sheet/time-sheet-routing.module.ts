import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeSheetComponent } from './time-sheet.component';
import { AddShiftComponent } from './add-shift.component';
import { EditShiftComponent } from './edit-shift.component';
import { ClockActionComponent } from './clock-action.component'
import { TimeSheetHomeComponent } from './time-sheet-home.component';


const routes: Routes = [
    {path: '', component: TimeSheetHomeComponent,
    children:[
          {path: '', component: TimeSheetComponent},
          {path: 'clock-action', component: ClockActionComponent }
    ]
  }, 
    {path: 'time-sheet/:id', component: EditShiftComponent},
    {path: 'add-shift', component: AddShiftComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeSheetRoutingModule { }
