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
import { MomentModule } from 'angular2-moment';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    NotFoundComponent,
    LoginComponent,
    DatePipeComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    UsersModule,
    TimeSheetModule,
    AppRoutingModule,
    MomentModule,
    HttpModule,
    

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
