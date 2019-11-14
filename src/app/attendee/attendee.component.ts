import { Component, OnInit } from '@angular/core';
import {HttpClientService, ProfileViewModel} from '../service/http-client.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.css']
})
export class AttendeeComponent implements OnInit {

  profileViewModel: ProfileViewModel;

  //setting up the form
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    major: new FormControl(''),
    minor: new FormControl(''),
    totalGPA: new FormControl(''),
    streetName: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    degree: new FormControl(''),
    certifications: new FormControl(''),
    languages: new FormControl(''),
    bio: new FormControl('')
  })

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {

    var observable: Observable<ProfileViewModel>;
    observable = this.httpClientService.getProfileViewModel();
    observable.subscribe(response => {
      this.profileViewModel = response;
      this.profileForm.get("firstName").setValue(this.profileViewModel.attendee.firstName);
      this.profileForm.get("lastName").setValue(this.profileViewModel.attendee.lastName);
      this.profileForm.get("email").setValue(this.profileViewModel.attendee.email);
      this.profileForm.get("streetName").setValue(this.profileViewModel.attendee.streetName);
      this.profileForm.get("city").setValue(this.profileViewModel.attendee.city);
      this.profileForm.get("state").setValue(this.profileViewModel.attendee.state);
      this.profileForm.get("zipCode").setValue(this.profileViewModel.attendee.zipCode);
      this.profileForm.get("major").setValue(this.profileViewModel.attendeeProfile.major);
      this.profileForm.get("minor").setValue(this.profileViewModel.attendeeProfile.minor);
      this.profileForm.get("totalGPA").setValue(this.profileViewModel.attendeeProfile.totalGPA);
      this.profileForm.get("degree").setValue(this.profileViewModel.attendeeProfile.degree);
      this.profileForm.get("bio").setValue(this.profileViewModel.attendeeProfile.bio);
      this.profileForm.get("certifications").setValue(this.profileViewModel.attendeeProfile.certifications);
      this.profileForm.get("languages").setValue(this.profileViewModel.attendeeProfile.languages);
    }
    );
  }

  callingFunction() {
    console.log(this.profileForm.value);
    this.httpClientService.addAttendeeProfile(this.profileForm).subscribe(result => { window.location.href = "/profile"; });

}
}