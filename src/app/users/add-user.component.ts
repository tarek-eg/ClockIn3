import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../shared/emitter.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { UserService} from '../ServicesAPI/User.Service'
import { User } from '../ServicesAPI/User'
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent {
 
  users:User[];
  user = new User();
  
  constructor(private flashMessage:FlashMessagesService,
    private userServ: UserService
  ){}
  
    
    addUser(){
      // this.emitterService.closeSidebar()
      console.log("Adding User")
      this.userServ.AddUser(this.user)
      this.flashMessage.show("User has been created.", {cssClass: 'alert-success',  timeout: 3000})
  
  }
}
