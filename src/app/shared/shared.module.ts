import { NgModule } from '@angular/core';
import { RightSidebarComponent } from './right-sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module'

@NgModule({
  imports: [RouterModule, MaterialModule
  ],
  declarations: [RightSidebarComponent],
  exports: [ RightSidebarComponent]
})
export class SharedModule { }
