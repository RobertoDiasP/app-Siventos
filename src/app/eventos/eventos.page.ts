import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

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

  detailOpen(isOpen: boolean){
    this.isDetail = isOpen
    if(isOpen == true){
     
  
    }
  }
    
  

}
