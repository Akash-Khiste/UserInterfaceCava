import { Component, OnInit } from '@angular/core';
import { HttpClientService, RegisteredAttendeesViewModel } from '../service/http-client.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registeredattendees',
  templateUrl: './registeredattendees.component.html',
  styleUrls: ['./registeredattendees.component.css']
})
export class RegisteredattendeesComponent implements OnInit {
  private cookieValue: String;
  id: string;
  registeredAttendeesViewModel: RegisteredAttendeesViewModel;
  message: string;

  constructor(private httpClientService: HttpClientService, private route: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit() {
// get the cookie for user ID 
this.cookieValue = this.cookieService.get('userID');

if (!this.cookieValue){
 window.location.href = "/";
}

    // this pulls the career fair ID from the URL that was added in careerFair.html link..
    this.id = this.route.snapshot.paramMap.get('id');

    
    var observable: Observable<RegisteredAttendeesViewModel>;
    observable = this.httpClientService.getRegisteredAttendeeViewModel(this.id);
    observable.subscribe(response => {
      this.registeredAttendeesViewModel = response;       

    });
  }

}
