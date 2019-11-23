import { Component, OnInit, Inject } from '@angular/core';
//imports for dialogbox
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})


export class ConfirmationDialogComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any) {
    }
  
    ngOnInit() {
    }
    closeDialog(){
      // TODO: here data is going back to the attendent career fair
      this.dialogRef.close();
      //save at the backend
    
    }

}
