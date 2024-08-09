import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  selectedOption:any = [];
  evento:any;
  dadosEvento:any;
  isDetail: any;
  isFinanceiro: any;
  pessoaEvento:any;
  totalParticipantes:any
  showInfiniteScroll:any
  showInfiniteScrollPagar: any;
  resultadoPesq: any = [];
  dataQ: any;
  data: any;
  totalQ: any;
  dataR: any;
  totalR: any;
  totalS: any;


  constructor(
    public Api: ApiService
  ) { };

  ngOnInit() {
  }

  pesquisar(){
    if (this.selectedOption =='ano'){
      const anoNumeric = parseInt(this.evento); // Converte o nome para uppercase
      this.Api.getEvento(anoNumeric,'vazio').subscribe(response => {
        this.dadosEvento = response
        console.log(response)
      });
    }else{
      this.Api.getEvento('',this.evento).subscribe(response => {
        this.dadosEvento = response
        console.log(response)
      });
    }
    
  }

  detailOpen(isOpen: boolean, codEvento: any){
    this.isDetail = isOpen
    if(isOpen == true){
      console.log(codEvento)
     this.Api.getPessoaEvento(codEvento).subscribe(response => {
        this.pessoaEvento = response
        this.totalParticipantes = this.pessoaEvento.length;
        console.log(this.pessoaEvento)
     })
     
    }
  }
  
  formatNumber(value: string): string {
    // Converte a string para número e remove os dígitos após o ponto decimal
    const number = parseInt(value.split('.')[0], 10);
    return number.toString();
  }

  finanOpen(isOpen: boolean, codEvento: any) {
    this.isFinanceiro = isOpen;
    if (isOpen) {
      this.Api.getEventoFin(codEvento).subscribe(response => {
        this.resultadoPesq = [];
        this.resultadoPesq = response;
  
        this.dataQ = []; // Inicializa como array vazio
        this.dataR = []; // Inicializa como array vazio
  
        this.data = this.resultadoPesq;
  
        this.resultadoPesq.forEach((lancamento: any) => {
          if (lancamento.ABERTO_QUITADO === 'QUITADO') {
            this.dataQ.push(lancamento);
          } else if (lancamento.ABERTO_QUITADO === 'ABERTO') {
            this.dataR.push(lancamento);
          }
        });
  
        this.totalQ = 0;
        this.dataQ.forEach((soma: any) => {
          const valorFormatado = parseFloat(parseFloat(soma.VLR_TOTAL).toFixed(2));
          this.totalQ += valorFormatado;
        });
  
        this.totalR = 0; // Inicializa a variável de soma
        this.dataR.forEach((soma: any) => {
          const valorFormatado = parseFloat(parseFloat(soma.VLR_TOTAL).toFixed(2));
          this.totalR += valorFormatado;
        });
  
        this.totalS = this.totalQ + this.totalR; // Soma os totais de Q e R
        this.createChart(); // Cria o gráfico com os dados atualizados
  
        console.log(this.dataQ, 'DATAQ', this.dataR, 'DATAR', 'aqui está os dados financeiros');
      }, error => {
        // Lógica para tratar erros
        console.error('Erro ao buscar dados financeiros:', error);
      });
    }
  }

  private generateItems() {

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

  }

  toggleInfiniteScrollPagar() {
    console.log(this.dataR)
    this.showInfiniteScrollPagar = !this.showInfiniteScrollPagar;

  }

  createChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    new (window as any)['Chart'](ctx, {
      type: 'pie', // Altere o tipo do gráfico para 'pie'
      data: {
        labels: ['Aberto', 'Quitado'],
        datasets: [{
          label: 'My Dataset',
          data: [this.totalR, this.totalQ], // Dados para cada segmento
          backgroundColor: [        // Cores diferentes para cada segmento
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [            // Cores da borda para cada segmento
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
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
              label: function (context: any) {
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
