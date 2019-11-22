import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LoginattendeeComponent } from './loginattendee/loginattendee.component';
import { LoginemployerComponent } from './loginemployer/loginemployer.component';
import { CareerfairComponent } from './careerfair/careerfair.component';
import { CareerfairdetailComponent } from './careerfairdetail/careerfairdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { AttendeeComponent } from './attendee/attendee.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AttendeecareerfairComponent } from './attendeecareerfair/attendeecareerfair.component';
import { AdmincareerfairComponent } from './admincareerfair/admincareerfair.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { RegisteredattendeesComponent } from './registeredattendees/registeredattendees.component';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    LoginattendeeComponent,
    LoginemployerComponent,
    CareerfairComponent,
    CareerfairdetailComponent,
    AttendeeComponent,
    ProfileComponent,
    AttendeecareerfairComponent,
    AdmincareerfairComponent,
    LoginadminComponent,
    RegisteredattendeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
