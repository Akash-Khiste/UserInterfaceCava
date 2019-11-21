import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientService, Administrator } from '../service/http-client.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  adminLoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  administrator: Administrator;
  message: string;

  constructor(private httpClientService: HttpClientService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  callingFunction() {
    console.log(this.adminLoginForm.value);
    this.httpClientService.adminLogin(this.adminLoginForm).subscribe(response => {

      this.administrator = response;

      if (this.administrator == null) {
        this.message = 'Invalid username or password. Please try logging in again';
      } else {
        this.cookieService.set('userType', 'admin');
        this.cookieService.set('userID', this.administrator.id);
        window.location.href = "/admincareerfair";
      }

    })
  }

}
