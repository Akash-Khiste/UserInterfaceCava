import { Component, OnInit } from '@angular/core';
import { HttpClientService, CompanyInformation } from '../service/http-client.service';
import { Observable, observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-companyinformation',
  templateUrl: './companyinformation.component.html',
  styleUrls: ['./companyinformation.component.css']
})
export class CompanyinformationComponent implements OnInit {
  private cookieValue: String;
  router: Router;
  companyInformations : CompanyInformation[];
  id: string;
  

  constructor(private httpClientService:HttpClientService,private route: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit() {
    // get the cookie for user ID 
    this.cookieValue = this.cookieService.get('userID');

    // this pulls the career fair ID from the URL that was added in careerFair.html link..
    this.id = this.route.snapshot.paramMap.get('id');


    var observable : Observable<CompanyInformation[]>;
    observable = this.httpClientService.getCompanyInformation(this.id);
    observable.subscribe(response => this.companyInformations = response);


  }

    }

