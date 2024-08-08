import { Component, OnInit } from '@angular/core';
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
  razao: any
  resultadoPesq: any
 
  showInfiniteScroll: any;
  showInfiniteScrollPagar: any;
  data: any;
  dataR: any = [];
  dataQ: any = [];
  totalR: any;
  totalQ: any;
  totalS: any;

  constructor(private route: ActivatedRoute,
    public Api: ApiService,

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.razao = this.route.snapshot.paramMap.get('razao');
    
    this.getDados(this.id);
  }

  private generateItems() {

  }

  async getDados(status: string) {
    await this.Api.getFinPessoa(this.id).subscribe(response => {
      this.resultadoPesq = response
      this.dataQ = []; // Inicializa como array vazio
      this.dataR = []; // Inicializa como array vazio

      this.data = this.resultadoPesq[0]

      this.resultadoPesq[0].forEach((lancamento: any) => {
        if (lancamento.ABERTO_QUITADO === 'QUITADO') {
          this.dataQ.push(lancamento);
        } else if (lancamento.ABERTO_QUITADO === 'ABERTO') {
          this.dataR.push(lancamento);
        }
      });
      this.totalQ = 0
      this.dataQ.forEach((soma: any) => {
        const valorFormatado = parseFloat(parseFloat(soma.VLR_TOTAL).toFixed(2));
        this.totalQ += valorFormatado;
      });

      this.totalR = 0; // Inicializa a variável de soma
      this.dataR.forEach((soma: any) => {
        const valorFormatado = parseFloat(parseFloat(soma.VLR_TOTAL).toFixed(2));
        this.totalR += valorFormatado;
      });

      this.totalS = 0
      this.totalS = this.totalQ + this.totalR
      this.createChart();
      console.log(this.dataQ, 'DATAQ', this.dataR, 'DATAR', 'aqui esta os dados financeiros')
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

  }

  toggleInfiniteScrollPagar() {
    console.log(this.dataR)
    this.showInfiniteScrollPagar = !this.showInfiniteScrollPagar;

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
