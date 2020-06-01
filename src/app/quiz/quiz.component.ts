import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogNoticiasComponent } from "../dialog-noticia/dialog-noticia.component";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.less"],
})
export class QuizComponent implements OnInit {
  public perguntas = [
    {
      pergunta:
        "O coronavírus não sobrevive em locais quentes, portanto, países de clima tropical não apresentam epidemia da Covid-19",
      resposta: "Falso",
      descricao:
        "Embora alguns estudos tenham evidenciado uma redução nos casos de COVID-19 em climas quentes, outros fatores podem influenciar mais significativamente a taxa de contágio. Dessa forma, não há evidências de ambientes que sejam imunes à presença do vírus.",
      fonte:
        "Estudo feito pelo Massachusetts Institute of Technology (MIT), nos Estados Unidos",
      imagem: "assets/quiz/qst1.png",
    },
    {
      pergunta:
        "O compartilhamento de objetos (como celulares) apresenta um baixo risco de contágio",
      resposta: "Falso, muito falso",
      descricao:
        "Os celulares, atualmente, são um dos maiores meios de disseminação de doenças infectocontagiosas. Dessa forma, além da prevenção de contato e da higiene com a pele e roupas, o celular deve ser higienizado com o uso de álcool 70%.",
      fonte: "Estudo feito pela Dscout Research",
      imagem: "assets/quiz/qst2.png",
    },
    {
      pergunta:
        "Ao ter contato com ambientes externos, o ideal é o uso de da máscara facial, independente do tempo e grau de exposição.",
      resposta: "Verdadeiro, mas não se esqueça de lavar as mãos",
      descricao:
        "A recomendação é de que as máscaras descartáveis sejam substituídas a cada 4 horas, seguindo as medidas de higiene e prevenção de contágio. Entretanto, a máscara não torna impossível a contaminação pela doença.",
      fonte:
        "USO DE MÁSCARA FACIAL PARA LIMITAR A TRANSMISSÃO DA COVID-19. Leila Posenato Garcia",
      imagem: "assets/quiz/qst3.png",
    },
    {
      pergunta: "Animais como cães e gatos podem transmitir a doença?",
      resposta: "Incerto",
      descricao:
        "De acordo com o CDC (Center for Disease Control and Prevention), não há evidência científica de que animais tenham um papel significativo na disseminação do vírus, embora a origem do vírus seja de animais.",
      fonte: "CDC (Center for Disease Control and Prevention)",
      imagem: "assets/quiz/qst4.png",
    },
    {
      pergunta:
        "Animais como cães e gatos podem testar positivo para a Covid-19?",
      resposta: "Verdadeiro, mas com ressalvas",
      descricao:
        "Há poucos registros de casos destes animais que foram confirmadamente infectados pelo vírus. Entretanto, estes animais não apresentam, até o momento, papel significativo na disseminação do vírus. Porém, a recomendação é de que estes animais também devem ter o contato evitado com casos suspeitos e confirmados da doença.",
      fonte:
        "Centro Pan-Americano de Febre Aftosa e Saúde Pública Veterinária da Organização Pan-Americana da Saúde/Organização Mundial da Saúde (PANAFTOSA-OPAS/OMS) e a Proteção Animal Mundial ",
      imagem: "assets/quiz/qst5.png",
    },
    {
      pergunta:
        "Acordei com mal estar, tosse, febre, porém, sem qualquer dificuldade respiratória. Devo procurar o atendimento médico?",
      resposta: "Depende",
      descricao:
        "A SBI (Sociedade Brasileira de Infectologia) recomenda que somente casos com sintomas mais graves, como dificuldade para respirar e febre alta (a partir de 39ºC). Entretanto, o Disk Saúde (136) está preparado para orientações específicas sem a necessidade de comparecer ao ambiente hospitalar.",
      fonte:
        "Organização Mundial de Saúde (OMS), Ministério da Saúde (MS), Sociedade Brasileira de Infectologia (SBI)",
      imagem: "assets/quiz/qst6.png",
    },
    {
      pergunta:
        "Há 1 mês tive tosse, febre e dor no corpo. É possível saber se esse quadro foi causado pelo Sars-CoV-2?",
      resposta: "Verdadeiro",
      descricao:
        "Inicialmente, apenas testes moleculares eram realizados. Porém, já há a possibilidade da dosagem de substâncias imunológicas que indicam a infecção nova ou antiga pelo vírus. Dessa forma, é possível realizar um exame que pode evidenciar ou não o contato com a doença. Atualmente, existem testes com alta sensibilidade e especificidade, que tornam seu resultado mais fidedigno. Porém, resultados positivos e/ou negativos não excluem a necessidade do isolamento e das medidas de precaução.",
      fonte: "Organização Mundial de Saúde (OMS), Ministério da Saúde (MS)",
      imagem: "assets/quiz/qst7.png",
    },
    {
      pergunta: "Existe vacina contra a Covid-19?",
      resposta: "Infelizmente, ainda é falso",
      descricao:
        "Não. Atualmente, diversos testes estão sendo feitas pelo mundo. Porém, ainda não há alguma destas que tenha evidências científicas e seja homologada pelos órgãos de vigilância para a prevenção da doença em humanos. ",
      fonte: "Organização Mundial de Saúde (OMS), Ministério da Saúde (MS)",
      imagem: "assets/quiz/qst8.png",
    },
    {
      pergunta:
        "As vacinas para pneumonia, que já existem, não apresentam qualquer benefício para um possível contato com o Sars-CoV-2",
      resposta: "Falso, mas não é por benefício direto",
      descricao:
        "Embora a vacina não tenha efeito direto contra o vírus, ela protege contra outros microorganismos causadores de infecções pulmonares. Caso se encaixe no grupo para recebimento dessas vacina, pode haver benefício, tendo em vista a possibilidade de desenvolvimento de infecções secundárias à Covid-19.  ",
      fonte: "Organização Mundial de Saúde (OMS)",
      imagem: "assets/quiz/qst9.png",
    },
    {
      pergunta:
        "As crianças apresentam menor risco de desenvolvimento da doença?",
      resposta: "Verdadeiro, até o momento",
      descricao:
        "Ainda não se existe um consenso sobre o risco das crianças desenvolverem a doença. Entretanto, o que se observa é uma menor taxa de infecção causada por COVID-19 relacionada a essa faixa etária em comparação com o número total de casos na população em geral. Além disso, ao que se refere à transmissão vertical, ou seja, capacidade da mãe passar a doença para o feto durante a gestação, observa-se que não há evidência científica que demonstre a sua existência. ",
      fonte:
        "O NOVO CORONAVÍRUS E O RISCO PARA A SAÚDE DAS CRIANÇAS, José Manuel da Silva Vilelas",
      imagem: "assets/quiz/qst10.png",
    },
    {
      pergunta: "Grávidas estão no grupo de risco da Covid-19?",
      resposta: `Pelo fato da gestação ser um período com diversas alterações fisiológicas, e estar relacionada a complicações diversas em infecções anteriores como SARS-CoV, influenza H1N1 e MERSCoV, e então, devido ao elevado risco de morbimortalidade, a Organização Mundial da Saúde (OMS) classificou as gestantes como grupo de risco para Covid-19. Entretanto, ainda não se tem evidências de que a doença nessa parcela populacional seja realmente mais grave. Mas as gestantes devem ser orientadas quanto ao isolamento social, uso de máscaras, sinais e sintomas assim como as medidas de prevenção, para que além de controlar a doença, também diminui a carga de ansiedade que envolve gerar e dar a luz nesse contexto. Para tanto, deve-se ressaltar que os pré-natais de baixo risco devem ficar com intervalos maiores, e as consultas devem ser marcadas com antecedência  bem como a telemedicina deve ser instituída como um mecanismo nessa pandemia.Quanto à amamentação, pode-se destacar que o COVID-19 não foi detectado em leite materno e, portanto, não está contraindicada durante esse período. Contudo, mesmo assim devem ser tomadas algumas precauções para evitar a disseminação por outros meios para o recém-nascido como lavagem das mãos, uso de álcool em gel e máscaras, além de em casos de extração do leite materno devem-se seguir as medidas de recomendação de limpeza das bombas depois de cada uso.`,
      descricao: "Verdadeiro, mas por que?",
      fonte: `COVID-19: MANEJO DE GESTANTES, Mohamed Kassen Saidah GESTANTES NO CONTEXTO DA PANDEMIA DA COVID-19: REFLEXÕES E DESAFIOS Fernanda Matheus Estrela, Keile Kemyly Assis da Silva, Moniky Araújo da Cruz, Nadirlene Pereira Gomes`,
      imagem: "assets/quiz/qst11.png",
    },
    {
      pergunta:
        "O uso de máscaras e/ou luvas representam a melhor forma de proteção contra a contaminação pelo vírus",
      resposta: "Falso",
      descricao:
        "A melhor forma de proteção contra o contágio é a lavagem com água e sabão das mãos, seguida de distanciamento social. Entretanto, quando necessário furar o isolamento o uso de máscaras e é altamente recomendável, visto que são efetivas como barreiras físicas capazes de limitar a transmissão em curtas distâncias. E quanto as luvas a recomendação é que fiquem restritas aos profissionais de saúde dedicados ao manejo dos pacientes portadores da doença.",
      fonte: `USO DE MÁSCARA FACIAL PARA LIMITAR A TRANSMISSÃO DA COVID-19. Leila Posenato Garcia MANUAL COVID-19 - PREVENÇÃO E TRATAMENTO. Zhejiang University School of Medicine ESTRATÉGIAS DE PREVENÇÃO FRENTE À PANDEMIA POR COVID-19. Aline de Oliveira Ramalho, Talita dos Santos Rosa, Carol Viviana Serna González, Paula de Souza Silva Freitas e Paula Cristina Nogueira`,
      imagem: "assets/quiz/qst12.png",
    },
    {
      pergunta:
        "A taxa de mortalidade da doença está diretamente relacionada com o nível socioeconômico",
      resposta: "Falso",
      descricao:
        "Sabe-se que todas as classes sociais e regiões do mundo tem a capacidade de desenvolver doenças respiratórias e elevar os riscos de morbimortalidade. Entretanto, o menor poder aquisitivo, associado às maiores taxas de aglomeração, às exposições ambientais e ainda às más condições de moradia, tornam esses indivíduos ainda mais susceptíveis a doença. Apesar disso, ainda não existem evidencias da relação do nível socioeconômico com a taxa de mortalidade no Brasil e no mundo.",
      fonte:
        "REGIÃO NORTE DO BRASIL E A PANDEMIA DE COVID-19: ANÁLISE SOCIOECONÔMICA E EPIDEMIOLÓGICA. Flávia Daspett Mendonça, Santiago Soares Rocha, Daniel Lucas Pimenta Pinheiro, Stefan Vilges de Oliveira",
      imagem: "assets/quiz/qst13.png",
    },
    {
      pergunta:
        "Não é possível ser contaminado mais de uma vez pelo Sars-CoV-2",
      resposta: "Ainda não sabemos",
      descricao:
        "Mesmo com a produção diária de conteúdo e com as crescentes pesquisas sobre o assunto ainda não se pode afirmar que existe a possibilidade de reinfecção nem que não exista, pois não se chegou a um consenso. Maria Van Kerkhove, líder técnica da OMS para covid-19, afirma que Não são vírus ativos, não é reinfecção, não é reativação. É, na verdade, parte do processo de cura que tem sido capturado pelo PCR, enquanto outros pesquisadores defendem que Precisamos ver qual é a dimensão da reinfecção e se é suficiente para produzir um volume grande de casos. Aparentemente, é encontrada em algumas situações, quando não se tem certeza se os testes feitos foram adequados ou não como José Cássio de Moraes, professor da Faculdade de Ciências Médicas da Santa Casa de São Paulo.",
      fonte:
        "Organização Mundial de Saúde (OMS) Dra. Maria Van Kerkhov e José Cássio de Moraes.",
      imagem: "assets/quiz/qst14.png",
    },
    {
      pergunta:
        "Qual a origem do vírus? Há indícios de que o vírus tenha sido feito em laboratório? ",
      resposta: "Não há um consenso",
      descricao:
        "Para essas respostas antes é preciso entender que o jeito mais fácil de produzir um novo vírus é a partir de um já existente. Então, isso é o que o ganhador do prêmio Nobel de medicina Luc Montagnier e alguns outros cientistas acreditam que tenha acontecido nesse caso. Entretanto, outros pesquisadores como o da Nature através do estudo dos diversos tipos de Corona Vírus, compreendem esse novo como uma evolução por meio de seleção natural de outros vírus de animais até o atual de humanos.",
      fonte:
        "THE PROXIMAL ORIGIN OF SARS-CoV-2. Kristian G. Andersen, Andrew Rambaut, W. Ian Lipkin, Edward C. Holmes e Robert F. Garry Revista Isto é. Novo coronavírus foi fabricado acidentalmente em laboratório chinês, diz descobridor do HIV",
      imagem: "assets/quiz/qst15.png",
    },
    {
      pergunta:
        "Alguns remédios usados por portador de Diabetes Mellitus e Hipertensão Arterial podem agravar a Covid-19",
      resposta: "É uma incógnita, mas acredita-se que não",
      descricao:
        "As recomendações tanto da Sociedade Brasileira de Diabetes quanto da de Cardiologia são avaliar caso a caso para que o risco do descontrole da doença de base (diabetes/hipetensão) não seja superior aos de desenvolver COVID. Paratanto, a suspensão destes medicamentos não está indicada.",
      fonte: "Sociedades Brasileiras de Diabetes e de Cardiologia (SBD e SBC)",
      imagem: "assets/quiz/qst16.png",
    },
    {
      pergunta: "A cloroquina é a única medicação eficaz contra o coronavírus",
      resposta: "Falso",
      descricao:
        "Apesar de a OMS informar que ainda não existem medicamentos ou vacinas para a atual epidemia, muitos fármacos foram destaque para o combate da doença. Entre eles a Cloroquina; a Hidroxicloroquina; a Azitromicina; o Remdesivir; os Corticoides. Mas nenhum deles com eficácia comprovada nem uso autorizado pela OMS, por diversos fatores, desde maiores riscos que benefícios até piora dos quadros.",
      fonte:
        "Organização Mundial de Saúde (OMS), OS PRINCIPAIS REMÉDIOS E TRATAMENTOS EM TESTES CONTRA A COVID-19. Giulia granchi",
      imagem: "assets/quiz/qst17.png",
    },
    {
      pergunta:
        "A suplementação de vitamina C é eficaz na prevenção e tratamento da Covid-19",
      resposta: "Falso, mas há benefícios",
      descricao:
        "A Sociedade Brasileira de Nutrologia afirma que não só a vitamina C como também outros nutrientes podem compor um papel importante no aumento da imunidade, mas que de forma alguma atuam como tratamento da SARS-CoV 2. Portanto, a recomendação é de uma dieta balanceada e não exclusiva.",
      fonte: "Sociedade Brasileira de Nutrologia (SBRAN)",
      imagem: "assets/quiz/qst18.png",
    },
  ];
  public indexPergunta = 0;
  public perguntaAtual;
  public esconderResposta: boolean = true;
  public respostas = [];
  public finalizou: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogNoticiasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.perguntaAtual = this.perguntas[this.indexPergunta];
  }

  mostraResposta(resposta) {
    this.respostas[this.indexPergunta] = resposta;
    this.esconderResposta = false;
  }

  proxima() {
    this.finalizou = this.indexPergunta === this.perguntas.length - 1;
    if (this.finalizou) return;
    this.esconderResposta = true;
    this.indexPergunta++;
    this.perguntaAtual = this.perguntas[this.indexPergunta];
  }

  onNoClick(): void {
    this.dialogRef.close(this.respostas);
  }
}
