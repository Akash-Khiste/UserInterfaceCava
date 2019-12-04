import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
     // get the cookie for user ID 
     var cookieValue: String;
     cookieValue = this.cookieService.get('userID');

     if (cookieValue){
      this.cookieService.deleteAll();
     }
  }

}
