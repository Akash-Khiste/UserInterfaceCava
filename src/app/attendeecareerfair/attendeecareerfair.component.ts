import { Component, OnInit } from '@angular/core';
import {HttpClientService, CareerFair } from '../service/http-client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attendeecareerfair',
  templateUrl: './attendeecareerfair.component.html',
  styleUrls: ['./attendeecareerfair.component.css']
})
export class AttendeecareerfairComponent implements OnInit {

  careerFairs: CareerFair[]


  constructor(private httpClientService:HttpClientService) { }

  ngOnInit() {

    
    var observable: Observable<CareerFair[]>;
    observable = this.httpClientService.getCareerFair();
    observable.subscribe(response => this.careerFairs = response);
  }

}
