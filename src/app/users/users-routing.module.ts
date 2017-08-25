import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile.component';
import { AddUserComponent } from './add-user.component';

const routes: Routes = [
    { path:'users', component: UsersComponent,
     children:[
    {path: 'add-user', component:AddUserComponent},
    ]},
    {path: 'users/:id', component:UserProfileComponent},
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
