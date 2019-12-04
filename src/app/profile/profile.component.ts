import { Component, OnInit } from '@angular/core';
import {HttpClientService, ProfileViewModel} from '../service/http-client.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private cookieValue: string;
  profileViewModel: ProfileViewModel

  constructor(private httpClientService: HttpClientService, private cookieService: CookieService) { }

  ngOnInit() {

     // get the cookie for user ID 
     this.cookieValue = this.cookieService.get('userID');

     if (!this.cookieValue){
      window.location.href = "/";
     }

    var observable: Observable<ProfileViewModel>;
    observable = this.httpClientService.getProfileViewModel(this.cookieValue);
    observable.subscribe(response => this.profileViewModel = response);
    //
  }

}
