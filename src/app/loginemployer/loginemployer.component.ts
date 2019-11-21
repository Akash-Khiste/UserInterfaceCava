import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Employer, HttpClientService } from '../service/http-client.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loginemployer',
  templateUrl: './loginemployer.component.html',
  styleUrls: ['./loginemployer.component.css']
})
export class LoginemployerComponent implements OnInit {
  employerForm = new FormGroup({
    companyID: new FormControl(''),
    password: new FormControl('')
  })

  employer: Employer;
  message: string;

  constructor(private httpClientService: HttpClientService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  callingFunction() {
    console.log(this.employerForm.value);
    this.httpClientService.employerLogin(this.employerForm).subscribe(response => {

      this.employer = response;

      if (this.employer == null) {
        this.message = 'Invalid username or password. Please try logging in again';


      } else {
        this.cookieService.set('userType', 'employer');
        this.cookieService.set('userID', this.employer.id);
        window.location.href = "/careerfair";
      }

    });

  }
}


