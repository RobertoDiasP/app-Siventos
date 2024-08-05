import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
})
export class PessoasPage implements OnInit {
  pessoas: any
  nome: any
  cpf: any

  constructor(public Api: ApiService) { }

  ngOnInit() {
    
  }

  pesquisar() {
    const nomeUppercase = this.nome.toUpperCase(); // Converte o nome para uppercase
    this.Api.getPessoas(nomeUppercase).subscribe(response => {
      console.log(response);
    });
  }

  pesquisarCPF() {
    
    this.Api.getCPF(this.cpf).subscribe(response => {
      console.log(response);
    });
  }
}
