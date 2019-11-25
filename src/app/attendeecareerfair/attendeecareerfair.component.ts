import { Component, OnInit } from '@angular/core';
import {HttpClientService, CareerFair } from '../service/http-client.service';
import { Observable } from 'rxjs';
//imports for dialog box
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginattendeeComponent } from '../loginattendee/loginattendee.component';


@Component({
  selector: 'app-attendeecareerfair',
  templateUrl: './attendeecareerfair.component.html',
  styleUrls: ['./attendeecareerfair.component.css']
})
export class AttendeecareerfairComponent implements OnInit {

  careerFairs: CareerFair[]
  cookieService: any;
  private cookieValue: string;


  constructor(private httpClientService:HttpClientService,
    public dialog: MatDialog,cookieService: CookieService) { }

  ngOnInit() {  
    
    this.cookieValue = this.cookieService.get('userID');

    var observable: Observable<CareerFair[]>;
    observable = this.httpClientService.getCareerFair();
    observable.subscribe(response => this.careerFairs = response);
   // observable = this.httpClientService.RegisterdIdAttendeeViewModel( this.RegisterdId);
    observable = this.httpClientService.RegisterdIdAttendeeViewModel(this.cookieValue);
  }
  RegisterdId : string;   
  openDialog(): string {
    // code to send userid
    // call method used in https service class at backend

    this.RegisterdId = this.cookieService.get('userID');
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    
    });
    
    return this.RegisterdId;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    }); 
   
  }

}