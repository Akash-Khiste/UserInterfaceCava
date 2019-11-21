import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LoginattendeeComponent } from './loginattendee/loginattendee.component';
import { LoginemployerComponent } from './loginemployer/loginemployer.component';
import { CareerfairComponent } from './careerfair/careerfair.component';
import { CareerfairdetailComponent } from './careerfairdetail/careerfairdetail.component';
import { AttendeeComponent } from './attendee/attendee.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AttendeecareerfairComponent } from './attendeecareerfair/attendeecareerfair.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AdmincareerfairComponent } from './admincareerfair/admincareerfair.component';




const routes: Routes = [
  { path: '', component: HomescreenComponent },
  { path: 'loginattendee', component: LoginattendeeComponent },
  { path: 'loginemployer', component: LoginemployerComponent },
  { path: 'loginadmin', component: LoginadminComponent },
  { path: 'careerfair', component: CareerfairComponent },
  { path: 'careerfairdetail', component: CareerfairdetailComponent },
  { path: 'attendee', component: AttendeeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'attendeecareerfair', component: AttendeecareerfairComponent },
  { path: 'admincareerfair', component: AdmincareerfairComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
