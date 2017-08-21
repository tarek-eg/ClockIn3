import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TimeSheetModule } from './time-sheet/time-sheet.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ClockComponent } from './clock/clock.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    TimeSheetModule,
    AppRoutingModule,

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
