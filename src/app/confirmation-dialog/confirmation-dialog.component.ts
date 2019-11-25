import { Component, OnInit, Inject } from '@angular/core';
//imports for dialogbox
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
//import { Companies } from '../service/http-client.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})


export class ConfirmationDialogComponent implements OnInit {
  //companies: Companies[];
  
  id: string;

  constructor(public dialogRef : MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,private route: ActivatedRoute) {
    }
  
    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
    }
    closeDialog(){
      // TODO: here data is going back to the attendent career fair
      
      this.dialogRef.close();
      //save at the backend
    
    }

}
