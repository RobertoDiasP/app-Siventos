import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-flash',
  templateUrl: './item-flash.page.html',
  styleUrls: ['./item-flash.page.scss'],
})
export class ItemFlashPage implements OnInit {
  @ViewChild('meuCard') meuCard: ElementRef | undefined;
  Card: any = []
  itemId:any
  constructor(private ApiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.ApiService.getFlashCards(this.itemId).subscribe(data => this.Card = data)
    this.Card
  }

  ocultarCard(index: number, numero: any) {
    this.Card[index].visivel = true;
    if (numero === 1) {
      setTimeout(() => {
        this.Card[index].visivel = false; // Altera o valor da variável após 3 segundos

      }, 30000);
    }
    if (numero === 2) {
      setTimeout(() => {
        this.Card[index].visivel = false; // Altera o valor da variável após 3 segundos

      }, 120000);
    }
    console.log('aq')
  }


  embaralharItens() {
    // Embaralha aleatoriamente os itens do array
    this.Card.sort(() => Math.random() - 0.5);
  }
}
