import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { MatDialog } from "@angular/material/dialog";

import * as easing from "ol/easing";
import Map from "ol/Map";
import OpenLayers from "ol/Map";
import { toStringXY } from "ol/coordinate";
import * as interaction from "ol/interaction";
import View from "ol/View";
import { click, pointerMove, altKeyOnly } from "ol/events/condition";
import GeoJSON from "ol/format/GeoJSON";
import Select from "ol/interaction/Select";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import { fromLonLat } from "ol/proj";

import "ol/ol.css";
import { defaults, DragPan, MouseWheelZoom } from "ol/interaction";
import { platformModifierKeyOnly } from "ol/events/condition";
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsTooltip,
  monkeyPatchChartJsLegend,
} from "ng2-charts";
import { ChartType, ChartOptions } from "chart.js";

declare const firebase;
declare const ol;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
})
export class HomeComponent implements OnInit {
  email: string;

  public map;
  public stateSelected;
  public selectSingleClick = new Select();
  public selectClick = new Select({
    condition: click,
  });

  public lastScrollZoom;

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true
  };
  public pieChartLabels: Label[] = [
    ["Deaths"],
    ["Cases"]
  ];
  public pieChartData: SingleDataSet = [0, 0];
  public pieChartType: ChartType = "doughnut";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public porcentagemLeitos;
  public quantidadeTotal;
  public quantidadeOcupados;
  public quantidadeLivres;
  public quantidadeConstrucao;

  public textoQuantidadeTotal;
  public textoQuantidadeLivres;

  public dataUltimaAtualizacao;
  public dataUltimaAtualizacaoLeitos;

  public porcentagemCasos = "94.23";
  public quantidadeTotalCasos = "496612";
  public quantidadeObitos = "28665";

  public textoQuantidadeCasos =
    this.quantidadeTotalCasos + " Covid-19 cases";
  public textoQuantidadeObitos = this.quantidadeObitos + " Death by Covid-19";

  public estado = "Goiás";

  public categorias = [
    [
      {
        url:
          "https://g1.globo.com/politica/noticia/2020/05/30/tudo-aponta-para-uma-crise-diz-bolsonaro-ao-citar-reportagens-sobre-decisoes-do-judiciario-a-respeito-do-governo-e-seus-aliados.ghtml",
        imagem: "/assets/arquivos/politica1.jpeg",
        hashitag: "#politics",
      },
      {
        url: "https://www.youtube.com/watch?v=cWumyKjowsY",
        imagem: "/assets/arquivos/politica2.jpeg",
        hashitag: "#politics",
      },
      {
        url:
          "https://valorinveste.globo.com/mercados/brasil-e-politica/noticia/2020/05/30/brasil-ultrapassa-franca-e-e-quarto-pais-com-mais-mortes-por-covid-19.ghtml",
        imagem: "/assets/arquivos/politica3.jpeg",
        hashitag: "#politics",
      },
      {
        url:
          "https://veja.abril.com.br/politica/covid-pela-primeira-vez-eleicoes-podem-ser-realizadas-em-dois-dias/",
        imagem: "/assets/arquivos/politica4.jpeg",
        hashitag: "#politics",
      },
    ],
    [
      {
        url:
          "https://epocanegocios.globo.com/Tecnologia/noticia/2020/05/como-equipe-da-fiocruz-trabalha-na-vacina-brasileira-para-covid-19.html",
        imagem: "/assets/arquivos/vacina1.jpeg",
        hashitag: "#vaccine",
      },
      {
        url:
          "https://www.cnnbrasil.com.br/saude/2020/05/25/mais-uma-vacina-contra-a-covid-19-comeca-a-ser-testada-em-humanos",
        imagem: "/assets/arquivos/vacina2.jpeg",
        hashitag: "#vaccine",
      },
      {
        url:
          "https://www.cnnbrasil.com.br/saude/2020/05/27/quando-teremos-uma-vacina-para-a-covid-19",
        imagem: "/assets/arquivos/vacina3.jpeg",
        hashitag: "#vaccine",
      },
      {
        url:
          "https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/05/30/governador-da-bahia-descarta-carnaval-sem-vacina-contra-covid-19.htm",
        imagem: "/assets/arquivos/vacina4.jpeg",
        hashitag: "#vaccine",
      },
    ],
    [
      {
        url:
          "https://www.ladoaladopelavida.org.br/detalhe-noticia-ser-informacao/veja-as-dicas-da-oms-para-se-proteger-do-novo-coronavirus",
        imagem: "/assets/arquivos/dicas1.jpeg",
        hashitag: "#tips-and-info",
      },
      {
        url: "https://www.youtube.com/watch?v=MSsuOF3VRYY",
        imagem: "/assets/arquivos/dicas2.jpeg",
        hashitag: "#tips-and-info",
      },
      {
        url:
          "https://g1.globo.com/mundo/noticia/2020/04/19/coronavirus-precisou-sair-especialistas-dao-dicas-para-evitar-trazer-o-virus-para-dentro-de-casa.ghtml",
        imagem: "/assets/arquivos/dicas3.jpeg",
        hashitag: "#tips-and-info",
      },
      {
        url:
          "https://gauchazh.clicrbs.com.br/fique-bem/noticia/2020/05/pets-e-coronavirus-cuidados-com-passeios-e-dicas-para-evitar-o-estresse-do-seu-amigo-de-quatro-patas-ck9vl2ocx0086015nosi0u0km.html",
        imagem: "/assets/arquivos/dicas4.jpeg",
        hashitag: "#tips-and-info",
      },
    ],
    [
      {
        url:
          "https://revistacrescer.globo.com/Criancas/Saude/noticia/2020/03/coronavirus-como-entreter-criancas-em-casa-com-aulas-suspensas.html",
        imagem: "/assets/arquivos/filhos1.jpeg",
        hashitag: "#children",
      },
      {
        url:
          "https://diariodorio.com/crianca-de-2-anos-vence-a-covid-19-apos-12-dias-entubada-em-vila-isabel/",
        imagem: "/assets/arquivos/filhos2.jpeg",
        hashitag: "#children",
      },
      {
        url:
          "https://www.uol.com.br/vivabem/noticias/bbc/2020/04/05/por-que-as-criancas-sao-afetadas-de-maneira-diferente-pelo-coronavirus.htm",
        imagem: "/assets/arquivos/filhos3.jpeg",
        hashitag: "#children",
      },
      {
        url: "https://www.hospitalinfantilsabara.org.br/o-novo-coronavirus/",
        imagem: "/assets/arquivos/filhos4.jpeg",
        hashitag: "#children",
      },
    ],
    [
      {
        url: "https://www.youtube.com/watch?v=Ifuhboesum4",
        imagem: "/assets/arquivos/lives1.jpeg",
        hashitag: "#lives",
      },
      {
        url: "https://www.youtube.com/watch?v=a1kJciCakEY",
        imagem: "/assets/arquivos/lives2.jpeg",
        hashitag: "#lives",
      },
      {
        url: "https://www.youtube.com/watch?v=GHFpWr69kWc",
        imagem: "/assets/arquivos/lives3.jpeg",
        hashitag: "#lives",
      },
      {
        url: "https://www.youtube.com/watch?v=21X5lGlDOfg",
        imagem: "/assets/arquivos/lives4.jpeg",
        hashitag: "#lives",
      },
    ],
  ];

  public categoriasLocais = [
    this.categorias[0],
    this.categorias[1],
    this.categorias[2],
  ];

  constructor(
    private router: Router,
    private db: AngularFirestore,
    private dialog: MatDialog
  ) {
    this.iniciaDadosFirebase();
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {}

  _panAndZoom(map: any, zoom_in: any, coordinates: any) {
    var view = this.map.getView();
    var currentResolution = view.getResolution();
    var delta = zoom_in ? 1 : -1;
    var pan = ol.animation.pan({
      duration: 500,
      source: view.getCenter(),
      easing: easing.easeOut,
    });
    var zoom = ol.animation.zoom({
      resolution: currentResolution,
      duration: 500,
      easing: easing.easeOut,
    });
    map.beforeRender(pan, zoom);
    var newResolution = view.constrainResolution(currentResolution, delta);
    view.setResolution(newResolution);
    view.setCenter(coordinates);
  }

  iniciaDadosFirebase() {
    this.db
      .collection("leitos")
      .doc("quantitativoLeitos")
      .valueChanges()
      .subscribe((quantitativoLeitos: any) => {
        this.porcentagemLeitos = quantitativoLeitos.total.porcentagemOcupacao;
        this.quantidadeTotal = quantitativoLeitos.total.qtd;
        this.quantidadeOcupados = quantitativoLeitos.total.ocupados;
        this.quantidadeLivres = quantitativoLeitos.total.vagos;
        this.quantidadeConstrucao =
          quantitativoLeitos.leitosUtiImplantacao.qtd +
          quantitativoLeitos.leitosImplantacao.qtd +
          quantitativoLeitos.leitosEnfermariaImplantacao.qtd;

        this.textoQuantidadeTotal = this.quantidadeTotal + " Covid-19 beds";
        this.textoQuantidadeLivres =
          this.quantidadeLivres + " Covid-19 free beds";
        this.dataUltimaAtualizacao = quantitativoLeitos.ultimaAtualizacao.toDate().toString()
      });

    this.db
      .collection("casos_estados")
      .doc("goias")
      .valueChanges()
      .subscribe((quantidadeCasos: any) => {
        this.pieChartData = [
          quantidadeCasos.total.obitosConfirmados,
          quantidadeCasos.total.casosConfirmados,
        ];

        this.dataUltimaAtualizacaoLeitos = quantidadeCasos.ultimaAtualizacao.toDate().toString()
      });
  }

  atualizaNoticias(group) {
    if(group=== 2) {
      this.categoriasLocais = [
        this.categorias[0],
        this.categorias[3],
        this.categorias[4],
      ];
    }
  }

  selecionaEstado(infos) {
    this.pieChartData = [
      infos.estado.obitos,
      infos.estado.casos
    ];
    this.estado = infos.nome
  }
}
