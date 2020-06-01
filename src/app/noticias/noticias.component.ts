import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.less']
})
export class NoticiasComponent implements OnInit {

  @Input() imagem: string;
  @Input() url: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickNoticia() {
    window.open(this.url, '_blank')
  }

}