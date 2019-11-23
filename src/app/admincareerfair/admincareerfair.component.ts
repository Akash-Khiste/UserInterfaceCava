import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CareerFair, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-admincareerfair',
  templateUrl: './admincareerfair.component.html',
  styleUrls: ['./admincareerfair.component.css']
})
export class AdmincareerfairComponent implements OnInit {

  careerFairs: CareerFair[]
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    var observable: Observable<CareerFair[]>;
    observable = this.httpClientService.getCareerFair();
    observable.subscribe(response => this.careerFairs = response);
  }

}
