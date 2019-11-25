import { Component, OnInit } from '@angular/core';
import {HttpClientService, CareerFair } from '../service/http-client.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-careerfair',
  templateUrl: './careerfair.component.html',
  styleUrls: ['./careerfair.component.css']
})
export class CareerfairComponent implements OnInit {
  router: Router;
  careerFairs: CareerFair[]
  cookieService: any;

  constructor(private httpClientService:HttpClientService, 
    public dialog: MatDialog,cookieService: CookieService) { }

  ngOnInit() {
    var observable: Observable<CareerFair[]>;
    observable = this.httpClientService.getCareerFair();
    observable.subscribe(response => this.careerFairs = response);
    observable = this.httpClientService.RegisterdIdEmployeeViewModel( this.RegisterdId);    

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
