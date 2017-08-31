import { NgModule } from '@angular/core';
import { TopNavbarComponent } from './top-navbar.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule
  ],
  declarations: [TopNavbarComponent],
  exports: [ TopNavbarComponent]
})
export class SharedModule { }
