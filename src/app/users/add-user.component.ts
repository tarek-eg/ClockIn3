import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { EmitterService } from '../shared/emitter.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { User } from '../ServicesAPI/User'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent {
 
  
  constructor(private flashMessage:FlashMessagesService,
    // private emitterService:EmitterService
  ){}
  
    
    addUser(fname, lname, email){
      // this.emitterService.closeSidebar()
      console.log(new User(1, 1, fname +" " +lname, fname + lname, "123", 'red', "Egypt", 1, true, true ))
      this.flashMessage.show("User has been created.", {cssClass: 'alert-success',  timeout: 3000})
  
  }
}
