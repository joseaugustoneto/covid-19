import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AngularFirestore } from "@angular/fire/firestore";
import { QuizComponent } from "../quiz/quiz.component";
import { RecebaNoticiasComponent } from "../receba-noticias/receba-noticias.component";

@Component({
  selector: "app-botoes-fixo",
  templateUrl: "./botoes-fixo.component.html",
  styleUrls: ["./botoes-fixo.component.less"],
})
export class BotoesFixoComponent implements OnInit {
  @Output() atualizaNoticias: EventEmitter<any> = new EventEmitter();

  public questions = ["Have children?", "Like music?"];
  public questionIndex = 0;
  public question = this.questions[this.questionIndex];
  public toggleVariavel = false;
  setTimeOut;

  constructor(private dialog: MatDialog, private db: AngularFirestore) {}

  ngOnInit() {}
  abrirFatoOuFake() {
    window.open(
      "https://www.saude.gov.br/component/tags/tag/novo-coronavirus-fake-news?limitstart=0",
      "_blank"
    );
  }

  voceTemCovid() {
    window.open("http://bit.ly/sauderesponde", "_blank");
  }

  responder(response) {
    this.questionIndex++;
    this.question = this.questions[this.questionIndex];

    if (response === true) {
      this.atualizaNoticias.emit(2);
    }
  }

  async abrirQuiz() {
    const dialogRef = this.dialog.open(QuizComponent);

    dialogRef.afterClosed().subscribe(async (result) => {
      this.db.collection("quiz").add({ ...result, dataInclusao: new Date() });
    });
  }

  async abrirReceberNoticias() {
    const dialogRef = this.dialog.open(RecebaNoticiasComponent);
  }

  toggle() {
    this.toggleVariavel = !this.toggleVariavel;

    if (this.toggleVariavel) {
      if (this.setTimeOut) {
        clearTimeout(this.setTimeOut);
        document.querySelector(".botoesFixos").classList.remove("aparecer");
        document.querySelector(".botoesFixos").classList.remove("sumir");
      }

      document.querySelector(".botoesFixos").classList.add("aparecer");
      document.querySelector(".blackout").classList.add("aparecer");
    } else {
      document.querySelector(".botoesFixos").classList.add("sumir");
      if (this.setTimeOut) {
        clearTimeout(this.setTimeOut);
      }
      this.setTimeOut = setTimeout(() => {
        document.querySelector(".botoesFixos").classList.remove("aparecer");
        document.querySelector(".botoesFixos").classList.remove("sumir");
      }, 3000);
      document.querySelector(".blackout").classList.remove("aparecer");
    }
  }
}
