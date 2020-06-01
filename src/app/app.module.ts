import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { DialogNoticiasComponent } from './dialog-noticia/dialog-noticia.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule, MatIconModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ChartsModule } from 'ng2-charts';
import { NoticiasComponent } from './noticias/noticias.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { QuizComponent } from './quiz/quiz.component';
import { BotoesFixoComponent } from './botoes-fixo/botoes-fixo.component';
import { RecebaNoticiasComponent } from './receba-noticias/receba-noticias.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogNoticiasComponent,
    NoticiasComponent,
    CategoriasComponent,
    QuizComponent,
    BotoesFixoComponent,
    RecebaNoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatExpansionModule,
    NgxPageScrollModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    AngularFireModule.initializeApp(),
    AngularFirestoreModule,
    ChartsModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogNoticiasComponent,
    QuizComponent,
    RecebaNoticiasComponent
  ],
})
export class AppModule { }
