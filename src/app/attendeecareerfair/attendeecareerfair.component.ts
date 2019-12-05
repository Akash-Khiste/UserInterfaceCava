import { Component, OnInit } from '@angular/core';
import { HttpClientService, CareerFair } from '../service/http-client.service';
import { Observable } from 'rxjs';
//imports for dialog box
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-attendeecareerfair',
  templateUrl: './attendeecareerfair.component.html',
  styleUrls: ['./attendeecareerfair.component.css']
})
export class AttendeecareerfairComponent implements OnInit {
  private cookieValue: string;
  careerFairs: CareerFair[]


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
    // call method used in https service class at backend

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {

    });
    this.RegisterdId = this.cookieService.get('userID');
    return this.RegisterdId;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

}