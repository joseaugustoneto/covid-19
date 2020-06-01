import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogNoticiasComponent } from "../dialog-noticia/dialog-noticia.component";

@Component({
  selector: "app-receba-noticias",
  templateUrl: "./receba-noticias.component.html",
  styleUrls: ["./receba-noticias.component.less"],
})
export class RecebaNoticiasComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogNoticiasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
