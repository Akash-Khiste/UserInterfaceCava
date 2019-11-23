import { Component, OnInit } from '@angular/core';
import { HttpClientService, RegisteredAttendeesViewModel } from '../service/http-client.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registeredattendees',
  templateUrl: './registeredattendees.component.html',
  styleUrls: ['./registeredattendees.component.css']
})
export class RegisteredattendeesComponent implements OnInit {
  
  id: string;
  registeredAttendees: RegisteredAttendeesViewModel[];

  constructor(private httpClientService: HttpClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this pulls the career fair ID from the URL that was added in careerFair.html link..
    this.id = this.route.snapshot.paramMap.get('id');

    //TODO: This block is the one that needs updated...You'll need update the getCompanies() method below to get career fair companies by career fair id
    // which is the id in the line above. Just update the method in http-client.service.ts so it takes a parameter and calls the correct controller method in rest api
    var observable: Observable<RegisteredAttendeesViewModel[]>;
    observable = this.httpClientService.getRegisteredAttendeeViewModel(this.id);
    observable.subscribe(response => this.registeredAttendees = response);
  }

}
