import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-noticia',
  templateUrl: './dialog-noticia.component.html',
  styleUrls: ['./dialog-noticia.component.less']
})
export class DialogNoticiasComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogNoticiasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  onNoClick(): void {
    
    this.dialogRef.close();
  }

}
