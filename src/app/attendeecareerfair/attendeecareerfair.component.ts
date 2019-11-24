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


  constructor(private httpClientService:HttpClientService,
    public dialog: MatDialog,cookieService: CookieService) { }

  ngOnInit() {    
    var observable: Observable<CareerFair[]>;
    observable = this.httpClientService.getCareerFair();
    observable.subscribe(response => this.careerFairs = response);
    observable = this.httpClientService.RegisterdIdViewModel( this.RegisterdId);
  }
  RegisterdId : string;
  openDialog(): string {
    // code to send userid
    this.RegisterdId = this.cookieService.get('userID');
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    
    });
    
    return this.RegisterdId;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    }); 
   
  }

}