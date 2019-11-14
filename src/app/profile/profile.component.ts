import { Component, OnInit } from '@angular/core';
import {HttpClientService, ProfileViewModel} from '../service/http-client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileViewModel: ProfileViewModel

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {

    var observable: Observable<ProfileViewModel>;
    observable = this.httpClientService.getProfileViewModel();
    observable.subscribe(response => this.profileViewModel = response);
  }

}
