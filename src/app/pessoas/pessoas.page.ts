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
  consulta: any
  cpf: any
  selectedOption: string = 'nome';
  dadopesquisa: any
  isModalOpen = false;
  cadastro = {
    RAZAOSOCIAL: '',
    STATUS: 'A',
    TELEFONE1: '',
    CPF: ''
  };
  constructor(public Api: ApiService,
    
  ) { }

  ngOnInit() {
    
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  pesquisar() {
    if (this.selectedOption == 'nome'){
      const nomeUppercase = this.nome.toUpperCase(); // Converte o nome para uppercase
      this.Api.getPessoas(nomeUppercase).subscribe(response => {
        this.dadopesquisa = response
      });
    }
    if (this.selectedOption == 'cpf'){
      this.cpf = this.nome
      console.log(this.cpf)
      this.Api.getCPF(this.cpf).subscribe(response => {
        console.log(response);
        this.dadopesquisa = response
      });
    }
  }

  salvarCadastro() {
    console.log('Dados do cadastro:', this.cadastro);
    this.Api.addPessoa(this.cadastro).subscribe(response => {
      console.log(response);
      // Adicione lógica adicional aqui, como notificação de sucesso
    });
  }

}
