import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile.component';
import { AddUserComponent } from './add-user.component';
import { UsersHomeComponent } from './users-home.component';


const routes: Routes = [
    { path:'users', component: UsersHomeComponent,
     children:[
       {path: '', component:UsersComponent },
       {path: ':id', component:UserProfileComponent},    
    ]},
    
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
