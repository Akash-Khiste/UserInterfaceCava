import { Component, OnInit } from '@angular/core';
import { HttpClientService, Companies } from '../service/http-client.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-careerfairdetail',
  templateUrl: './careerfairdetail.component.html',
  styleUrls: ['./careerfairdetail.component.css']
})
export class CareerfairdetailComponent implements OnInit {
  private cookieValue: string;
  companies: Companies[];
  id: string;

  constructor(private httpClientService: HttpClientService, private route: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit() {
    // get the cookie for user ID 
    this.cookieValue = this.cookieService.get('userID');

    if (!this.cookieValue) {
      window.location.href = "/";
    }

    // this pulls the career fair ID from the URL that was added in careerFair.html link..
    this.id = this.route.snapshot.paramMap.get('id');


    var observable: Observable<Companies[]>;
    observable = this.httpClientService.getCompanies(this.id);
    observable.subscribe(response => this.companies = response);

  }

}
