import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile.component';
import { AddUserComponent } from './add-user.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule, UsersRoutingModule
  ],
  declarations: [UsersComponent, UserProfileComponent, AddUserComponent]
})
export class UsersModule { }
