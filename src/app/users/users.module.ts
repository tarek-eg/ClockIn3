import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile.component';
import { AddUserComponent } from './add-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './users-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule, UsersRoutingModule,SharedModule
  ],
  declarations: [
    UsersComponent, 
    UserProfileComponent, 
    AddUserComponent, 
    UsersHomeComponent]
})
export class UsersModule { }
