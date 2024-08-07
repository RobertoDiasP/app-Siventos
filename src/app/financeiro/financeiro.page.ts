import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {

  chart: any;
  id: any
  razao:any
  resultadoPesq: any
  items = [{
    "CODIGOPESSOA": "00108",
    "EMAIL": "",
    "RAZAOSOCIAL": "ROBERTO",
    "TELEFONE1": "19992192096"
  },
  {
    "CODIGOPESSOA": "02916",
    "EMAIL": "",
    "RAZAOSOCIAL": "CARLOS ROBERTO LAURINDO",
    "TELEFONE1": "16999923505"
  },
  {
    "CODIGOPESSOA": "05607",
    "EMAIL": "MP5103126@GMAIL.COM",
    "RAZAOSOCIAL": "MARCOS ROBERTO PINHEIRO",
    "TELEFONE1": "19 99120-9820"
  },
  {
    "CODIGOPESSOA": "05638",
    "EMAIL": "",
    "RAZAOSOCIAL": "CLAUDINEI ROBERTO LEME",
    "TELEFONE1": "(19)993135701"
  },
  {
    "CODIGOPESSOA": "05800",
    "EMAIL": "",
    "RAZAOSOCIAL": "BRENO ROBERTO DE LIMA",
    "TELEFONE1": "(19)35855309"
  },
  {
    "CODIGOPESSOA": "05809",
    "EMAIL": "",
    "RAZAOSOCIAL": "LUIZ ROBERTO ALVES",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "19610",
    "EMAIL": "",
    "RAZAOSOCIAL": "LUIZ ROBERTO BARRETO LUCENTE",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "05885",
    "EMAIL": "MURILO-MR@HOTMAIL.COM",
    "RAZAOSOCIAL": "ROBERTO MURILO MOREIRA DE FREITAS",
    "TELEFONE1": "(16)993249779"
  },
  {
    "CODIGOPESSOA": "06068",
    "EMAIL": "",
    "RAZAOSOCIAL": "ROBERTO LIMA NEVES NETO",
    "TELEFONE1": "16 98168-0898"
  },
  {
    "CODIGOPESSOA": "06828",
    "EMAIL": "",
    "RAZAOSOCIAL": "MURILO ROBERTO DE BARROS ",
    "TELEFONE1": "16 3346 1712 "
  },
  {
    "CODIGOPESSOA": "07044",
    "EMAIL": "",
    "RAZAOSOCIAL": "VITOR ROBERTO DE CASTRO CARNEIRO ",
    "TELEFONE1": "16 98167 0431 "
  },
  {
    "CODIGOPESSOA": "07127",
    "EMAIL": "",
    "RAZAOSOCIAL": "MURILO ROBERTO TRENTIM  ",
    "TELEFONE1": "(19)991297074 "
  },
  {
    "CODIGOPESSOA": "08136",
    "EMAIL": "",
    "RAZAOSOCIAL": "MICHAEL ROBERTO PEDROZO DA SELVA",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "08091",
    "EMAIL": "",
    "RAZAOSOCIAL": "CHRISTIAN ROBERTO MINARI",
    "TELEFONE1": "(19)988389515"
  },
  {
    "CODIGOPESSOA": "08454",
    "EMAIL": "",
    "RAZAOSOCIAL": "ROBERTO HENRIQUE",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "08928",
    "EMAIL": "LUCAS.REALMADRUGA@HOTMAIL.COM",
    "RAZAOSOCIAL": "LUCAS ROBERTO DE SOUZA PEREIRA",
    "TELEFONE1": "(16)991959592"
  },
  {
    "CODIGOPESSOA": "09006",
    "EMAIL": "CARLOSRSALLES@OUTLOOK.COM",
    "RAZAOSOCIAL": "CARLOS ROBERTO SALLES",
    "TELEFONE1": "(19)981293505"
  },
  {
    "CODIGOPESSOA": "09443",
    "EMAIL": "",
    "RAZAOSOCIAL": "CELSO ROBERTO ALVES",
    "TELEFONE1": "(19)994690668"
  },
  {
    "CODIGOPESSOA": "09543",
    "EMAIL": "",
    "RAZAOSOCIAL": "ROBERTO DA CONCEI\u00c7AO MAXIMO",
    "TELEFONE1": "(19)996606438"
  },
  {
    "CODIGOPESSOA": "10750",
    "EMAIL": "",
    "RAZAOSOCIAL": "FABIO ROBERTO BRANDAO",
    "TELEFONE1": "(19)997581550"
  },
  {
    "CODIGOPESSOA": "11186",
    "EMAIL": "",
    "RAZAOSOCIAL": "RICHARD ROBERTO DA SILVA",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "11208",
    "EMAIL": "",
    "RAZAOSOCIAL": "MATHEUS ROBERTO CANTIDIO DE PAULO",
    "TELEFONE1": "(16)33225929"
  },
  {
    "CODIGOPESSOA": "11320",
    "EMAIL": "",
    "RAZAOSOCIAL": "CARLOS ROBERTO MARTINS JUNIOR",
    "TELEFONE1": "(16)997125066"
  },
  {
    "CODIGOPESSOA": "11579",
    "EMAIL": "CARLOS.MARTNIS2002@HOTMAIL.COM",
    "RAZAOSOCIAL": "CARLOS ROBERTO MARTINS JUNIOR",
    "TELEFONE1": "(16)996060024"
  },
  {
    "CODIGOPESSOA": "11612",
    "EMAIL": "",
    "RAZAOSOCIAL": "ROBERTO DE JESUS ALMEIDA",
    "TELEFONE1": "(16)39842577"
  },
  {
    "CODIGOPESSOA": "12269",
    "EMAIL": "EVERTONRSIERRA@GMAIL.COM",
    "RAZAOSOCIAL": "EVERTON ROBERTO SIERRA",
    "TELEFONE1": "(16)981636767"
  },
  {
    "CODIGOPESSOA": "12378",
    "EMAIL": "RYANSILVEIRA_02@ICLOUD.COM",
    "RAZAOSOCIAL": "RYAN ROBERTO URSOLI DA SILVEIRA",
    "TELEFONE1": "(16)994508049"
  },
  {
    "CODIGOPESSOA": "12767",
    "EMAIL": "BEBETOPOSOVOLET@GMAIL.COM",
    "RAZAOSOCIAL": "JOSE ROBERTO POSO VOLET",
    "TELEFONE1": "(16)996375153"
  },
  {
    "CODIGOPESSOA": "13427",
    "EMAIL": "",
    "RAZAOSOCIAL": "ROBERTO GUSTAVO FERREIRA MACHADO",
    "TELEFONE1": "(19)991084940"
  },
  {
    "CODIGOPESSOA": "13666",
    "EMAIL": "CARLOS4743781@GMAIL.COM",
    "RAZAOSOCIAL": "CARLOS ROBERTO VALERA JUNIOR",
    "TELEFONE1": "(16)988771946"
  },
  {
    "CODIGOPESSOA": "13799",
    "EMAIL": "BRENOSSCHINEIDER@GMAIL.COM",
    "RAZAOSOCIAL": "BRENO ROBERTO SCHNEIDER SILVA",
    "TELEFONE1": "(19)35721090"
  },
  {
    "CODIGOPESSOA": "14002",
    "EMAIL": "JOSIENEEROBERTO18@GMAIL.COM",
    "RAZAOSOCIAL": "JOSIENE AP DIAS ROBERTO",
    "TELEFONE1": "(19)998369059"
  },
  {
    "CODIGOPESSOA": "14043",
    "EMAIL": "CARLOSROBERTOCAMARGOCAMARGOC@GMAIL.COM",
    "RAZAOSOCIAL": "CARLOS ROBERTO CAMARGO",
    "TELEFONE1": "(19)987640212"
  },
  {
    "CODIGOPESSOA": "14687",
    "EMAIL": "",
    "RAZAOSOCIAL": "LUCAS ROBERTO DA SILVA TOME",
    "TELEFONE1": "(16)991499841"
  },
  {
    "CODIGOPESSOA": "15495",
    "EMAIL": "THIAGOROBERTO123@GMAIL.COM",
    "RAZAOSOCIAL": "THIAGO ROBERTO DA SILVA SANTOS",
    "TELEFONE1": "(16)99089809"
  },
  {
    "CODIGOPESSOA": "15528",
    "EMAIL": "RUANRBORGHESI@GMAIL.COM",
    "RAZAOSOCIAL": "RUAN ROBERTO BORGHESI DE LACERDA OLIVEIRA",
    "TELEFONE1": "(16)991600422"
  },
  {
    "CODIGOPESSOA": "15929",
    "EMAIL": "",
    "RAZAOSOCIAL": "GABRIEL ROBERTO PEREIRA DA SILVA ",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "16015",
    "EMAIL": "",
    "RAZAOSOCIAL": "ROBERTO HENRIQUE ",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "16205",
    "EMAIL": "",
    "RAZAOSOCIAL": "PAULO ROBERTO LIBERALI ",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "16230",
    "EMAIL": "",
    "RAZAOSOCIAL": "CHRISTIAN ISRAEL FARIAS ROBERTO ",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "17165",
    "EMAIL": "",
    "RAZAOSOCIAL": "LUCAS ROBERTO ROSADO",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "17723",
    "EMAIL": "",
    "RAZAOSOCIAL": "MARCOS ROBERTO PEREIRA BEZERRA JUNIOR",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "18123",
    "EMAIL": "",
    "RAZAOSOCIAL": "ROBERTO PEREIRA TANGERINO FILHO",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "18269",
    "EMAIL": "",
    "RAZAOSOCIAL": "JOSE ROBERTO AMBROZINI JUNIOR",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "18624",
    "EMAIL": "",
    "RAZAOSOCIAL": "GLEDSON ROBERTO MARCELINO COELHO",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "18705",
    "EMAIL": "",
    "RAZAOSOCIAL": "LUIGI ROBERTO BONARDO",
    "TELEFONE1": ""
  },
  {
    "CODIGOPESSOA": "19137",
    "EMAIL": "",
    "RAZAOSOCIAL": "CLEITON ROBERTO CECHINATTO",
    "TELEFONE1": ""
  }
];
  showInfiniteScroll: any;
  showInfiniteScrollPagar: any;
  data: any;
  dataR:any;

  constructor(private route: ActivatedRoute,
    public Api: ApiService,
   
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.razao = this.route.snapshot.paramMap.get('razao');
    this.createChart();
  }

  private generateItems() {
    
  }

  getDados(status:string){
    this.Api.getFinPessoa(this.id, status).subscribe(response => {
      this.resultadoPesq = response
      if(status == 'QUITADO'){
        this.data = this.resultadoPesq[0]
      }else{
        this.dataR =this.resultadoPesq[0]
      }

      console.log(this.data,'aqui esta os dados financeiros')
    }, error => {
      // Lógica para tratar erros
    });
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  toggleInfiniteScroll() {
    console.log(this.data)
    this.showInfiniteScroll = !this.showInfiniteScroll;
    if(!this.data){
      this.getDados('QUITADO')
    }

  }

  toggleInfiniteScrollPagar() {
    console.log(this.dataR)
    this.showInfiniteScrollPagar = !this.showInfiniteScrollPagar;
    if(!this.dataR){
      this.getDados('ABERTO')
    }
  }

  formatNumber(value: string): string {
    // Converte a string para número e remove os dígitos após o ponto decimal
    const number = parseInt(value.split('.')[0], 10);
    return number.toString();
  }

  createChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    new (window as any)['Chart'](ctx, {
      type: 'pie', // Altere o tipo do gráfico para 'pie'
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'My Dataset',
          data: [12, 19, 3, 5, 2, 3], // Dados para cada segmento
          backgroundColor: [        // Cores diferentes para cada segmento
            'rgba(255, 99, 132, 0.2)', 
            'rgba(54, 162, 235, 0.2)', 
            'rgba(255, 206, 86, 0.2)', 
            'rgba(75, 192, 192, 0.2)', 
            'rgba(153, 102, 255, 0.2)', 
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [            // Cores da borda para cada segmento
            'rgba(255, 99, 132, 1)', 
            'rgba(54, 162, 235, 1)', 
            'rgba(255, 206, 86, 1)', 
            'rgba(75, 192, 192, 1)', 
            'rgba(153, 102, 255, 1)', 
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,         // Faz o gráfico responder ao tamanho da tela
        plugins: {
          legend: {
            position: 'top',       // Posiciona a legenda no topo
          },
          tooltip: {
            callbacks: {
              label: function(context: any) {
                let label = context.label || '';
                if (context.parsed) {
                  label += `: ${context.parsed} units`;
                }
                return label;
              }
            }
          }
        }
      }
    });
  }
}
