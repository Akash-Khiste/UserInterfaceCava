import { Component, OnInit } from '@angular/core';
import {HttpClientService, CareerFair } from '../service/http-client.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careerfair',
  templateUrl: './careerfair.component.html',
  styleUrls: ['./careerfair.component.css']
})
export class CareerfairComponent implements OnInit {
  router: Router;
  careerFairs: CareerFair[]

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit() {


    var observable: Observable<CareerFair[]>;
    observable = this.httpClientService.getCareerFair();
    observable.subscribe(response => this.careerFairs = response);
  }

  public openCareerFair(careerFairId: string) {
    this.router.navigate(['/careerfairdetail', careerFairId]);
   }

}
