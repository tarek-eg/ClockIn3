import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { TimeSheetModule } from './time-sheet/time-sheet.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ClockComponent } from './clock/clock.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UsersService } from './shared/users.service';
import { DatePipeComponent } from './shared/date.pipe';
//import { MomentModule } from 'angular2-moment';
import { SharedModule } from './shared/shared.module';

import { FormsModule }    from '@angular/forms';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


// import { AlertComponent } from './_directives/index';
// import { AuthGuard } from './_guards/index';
// import { AlertService, AuthenticationService, //UserService 
// } from './_services/index';
// import { LoginComponent2 } from './_login/index';
// import { RegisterComponent } from './register/index';

import { UserService } from './ServicesAPI/User.Service'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';

import { MaterialModule } from './material.module' //AngularMaterial - KJ
  import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    NotFoundComponent,
    LoginComponent,
    DatePipeComponent,
    // AlertComponent,
    // LoginComponent2,
    // RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
      NgbModule.forRoot(), 
    NoopAnimationsModule,
    UsersModule,
    TimeSheetModule,
    AppRoutingModule,
   //MomentModule,
    HttpModule,
    FormsModule,
    SharedModule,
    MaterialModule 

  ],
  providers: [UsersService,
  // AuthGuard,
  //       AlertService,
  //       AuthenticationService,
        UserService,

        // providers used to create fake backend
        // fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
