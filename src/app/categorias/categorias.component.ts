import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogNoticiasComponent } from "../dialog-noticia/dialog-noticia.component";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.less"],
})
export class CategoriasComponent implements OnInit {
  @Input() noticia: any;

  public cor = this.sorteiaCor();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  sorteiaCor() {
    const index = 0 + Math.floor((10 - 0) * Math.random());

    const cor = [
      "#0000ff",
      "#ffa500",
      "#176f07",
      "#076f65",
      "#6f074a",
      "#de127a",
      "#c5a403",
      "#5b9dff",
      "#8e49fd",
      "#fd4949",
    ][index];
    if (!cor) return "#fd4949";
    return cor;
  }

  abrirCategoria() {
    this.dialog.open(DialogNoticiasComponent, {
      data: this.noticia,
    });
  }
}
