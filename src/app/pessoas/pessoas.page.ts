import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';


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
  dadosDetalhe: any
  isModalOpen = false;
  isDetail = false
  data: any;
  cadastro = {
    RAZAOSOCIAL: '',
    STATUS: 'A',
    TELEFONE1: '',
    CPF: '',
    EMAIL:''
  };
  constructor(public Api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  detailOpen(isOpen: boolean, id: any = null){
    this.isDetail = isOpen
    if(isOpen == true){
      this.Api.getPessoaId(id).subscribe(response => {
        this.dadosDetalhe = response
        this.data = this.dadosDetalhe[0][0]
        console.log(response)
      }, error => {
        // Lógica para tratar erros
      });
    }
    console.log(id)
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

  financeiro(id: any, razao: any){
    this.router.navigate(['/financeiro', id, razao]);
  }

  salvarCadastro() {
    this.cadastro.RAZAOSOCIAL = this.cadastro.RAZAOSOCIAL.toUpperCase();
    this.cadastro.CPF = this.cadastro.CPF.toUpperCase();
    this.cadastro.TELEFONE1 = this.cadastro.TELEFONE1.toUpperCase();
    this.cadastro.EMAIL = this.cadastro.EMAIL.toUpperCase();

    console.log('Dados do cadastro:', this.cadastro);
    this.Api.addPessoa(this.cadastro).subscribe(response => {
      console.log(response);
      // Adicione lógica adicional aqui, como notificação de sucesso
    });
  }

}
