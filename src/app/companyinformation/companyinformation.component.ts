import { Component, OnInit } from '@angular/core';
import {HttpClientService, CompanyInformation } from '../service/http-client.service';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companyinformation',
  templateUrl: './companyinformation.component.html',
  styleUrls: ['./companyinformation.component.css']
})
export class CompanyinformationComponent implements OnInit {

  router: Router;
  companyInformations : CompanyInformation[];

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit() {

    // var observable: Observable<CompanyInformation[]>;
    // observable = this.httpClientService.getCompanyInformation();
    // observable.subscribe(response => this.companyInformations = response);

    var observable : Observable<CompanyInformation[]>;
    observable = this.httpClientService.getCompanyInformation();
    observable.subscribe(Response => this.companyInformations = Response);

  }

}
