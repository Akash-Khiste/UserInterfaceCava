import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-employerregistered',
  templateUrl: './employerregistered.component.html',
  styleUrls: ['./employerregistered.component.css']
})
export class EmployerregisteredComponent implements OnInit {
  private cookieValue: string;
  id: string;
  message: string;
  Attendee: any;

  constructor(private httpClientService: HttpClientService, private route: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit() {
    // get the cookie for user ID 
    this.cookieValue = this.cookieService.get('userID');

    if (!this.cookieValue) {
      window.location.href = "/";
    }
    // this pulls the career fair ID from the URL that was added in careerFair.html link..
    this.id = this.route.snapshot.paramMap.get('id');

    // var observable: Observable<RegisteredAttendeesViewModel>;
    this.httpClientService.registerAttendee(this.id, this.cookieValue).subscribe(response => {
      this.Attendee = response;

    });
  }
}


