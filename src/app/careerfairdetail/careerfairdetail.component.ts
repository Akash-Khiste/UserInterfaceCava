import { Component, OnInit } from '@angular/core';
import {HttpClientService, Companies} from '../service/http-client.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-careerfairdetail',
  templateUrl: './careerfairdetail.component.html',
  styleUrls: ['./careerfairdetail.component.css']
})
export class CareerfairdetailComponent implements OnInit {
  
  companies: Companies[];

  constructor(private httpClientService: HttpClientService) { }
 
  ngOnInit() {
  
    var observable: Observable<Companies[]>;
    observable = this.httpClientService.getCompanies();
    observable.subscribe(response => this.companies = response);
    
  }

}
