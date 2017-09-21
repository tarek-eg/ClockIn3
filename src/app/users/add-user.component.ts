import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../shared/users.service';
import { EmitterService } from '../shared/emitter.service'
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent {
 
  constructor(private flashMessage:FlashMessagesService,
    private emitterService:EmitterService){}
  
    addUser(){
      this.emitterService.closeSidebar()
      this.flashMessage.show("User has been created.", {cssClass: 'alert-success',  timeout: 3000})
  
  }
}
