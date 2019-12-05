import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CareerFair, HttpClientService } from '../service/http-client.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admincareerfair',
  templateUrl: './admincareerfair.component.html',
  styleUrls: ['./admincareerfair.component.css']
})
export class AdmincareerfairComponent implements OnInit {
  private cookieValue: string;
  careerFairs: CareerFair[]
  constructor(private httpClientService: HttpClientService, private cookieService: CookieService) { }

  ngOnInit() {
    // get the cookie for user ID 
    this.cookieValue = this.cookieService.get('userID');

    if (!this.cookieValue) {
      window.location.href = "/";
    }

    var observable: Observable<CareerFair[]>;
    observable = this.httpClientService.getCareerFairs();
    observable.subscribe(response => this.careerFairs = response);
  }

}
