import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientService, Attendee } from '../service/http-client.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-loginattendee',
  templateUrl: './loginattendee.component.html',
  styleUrls: ['./loginattendee.component.css']
})
export class LoginattendeeComponent implements OnInit {
  attendeeLoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  attendee: Attendee;
  message: string;

  constructor(private httpClientService: HttpClientService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  callingFunction() {
    console.log(this.attendeeLoginForm.value);
    this.httpClientService.attendeeLogin(this.attendeeLoginForm).subscribe(response => {

      this.attendee = response;

      if (this.attendee == null) {
        this.message = 'Invalid username or password. Please try logging in again';


      } else {
        this.cookieService.set('userType', 'attendee');
        this.cookieService.set('userID', this.attendee.id);
        window.location.href = "/attendeecareerfair";
      }

    });

  }

}
