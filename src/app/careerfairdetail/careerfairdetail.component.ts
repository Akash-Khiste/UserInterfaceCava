import { Component, OnInit } from '@angular/core';
import {HttpClientService, Companies} from '../service/http-client.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-careerfairdetail',
  templateUrl: './careerfairdetail.component.html',
  styleUrls: ['./careerfairdetail.component.css']
})
export class CareerfairdetailComponent implements OnInit {
  
  companies: Companies[];
  id: string;
 
  constructor(private httpClientService: HttpClientService, private route: ActivatedRoute) { }
 
  ngOnInit() {
    // this pulls the career fair ID from the URL that was added in careerFair.html link..
    this.id = this.route.snapshot.paramMap.get('id');

    //TODO: This block is the one that needs updated...You'll need update the getCompanies() method below to get career fair companies by career fair id
    // which is the id in the line above. Just update the method in http-client.service.ts so it takes a parameter and calls the correct controller method in rest api
    var observable: Observable<Companies[]>;
    observable = this.httpClientService.getCompanies();
    observable.subscribe(response => this.companies = response);
    
  }

}