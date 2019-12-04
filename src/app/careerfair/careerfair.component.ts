import { Component, OnInit } from '@angular/core';
import { HttpClientService, CareerFair } from '../service/http-client.service';
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
  
  private cookieValue: string;

  constructor(private httpClientService: HttpClientService,
    public dialog: MatDialog, private cookieService: CookieService) { }

  ngOnInit() {
    // get the cookie for user ID 
    this.cookieValue = this.cookieService.get('userID');

    if (!this.cookieValue) {
      window.location.href = "/";
    }

    var observable: Observable<CareerFair[]>;
    observable = this.httpClientService.getCareerFairs();
    observable.subscribe(response => this.careerFairs = response);


  }
  RegisterdId: string;
  openDialog(): string {
    // code to send userid
    console.log("clicked the button")
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {

    });
    this.RegisterdId = this.cookieService.get('userID');
    return this.RegisterdId;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

}
