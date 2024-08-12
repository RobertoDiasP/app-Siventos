import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login:any
  senha:any
  spiner:any
  CNPJ:any
  rawCNPJ: string = '';
  formattedCNPJ: string = '';

  constructor(private auth: ApiService,
              private router: Router,
              private toastController: ToastController
  ) { }

  ngOnInit() {

  }
  async presentToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 5000, // Tempo em milissegundos
      color,
      position: 'bottom'
    });
    toast.present();
  }

  async logar() {
    this.spiner = true;
    try {
      const response = await this.auth.login(this.login, this.senha).toPromise();
      await this.presentToast('Login realizado com sucesso!', 'success');
      await this.router.navigate(['/home']);
    } catch (error: any) {
      await this.presentToast('Erro ao fazer login: ' + (error.error.msg || 'Erro desconhecido'), 'danger');
    } finally {
      this.spiner = false;
    }
  }

  applyMask(event: any) {
    const input = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    this.rawCNPJ = input;
    this.formattedCNPJ = this.formatCNPJ(input);
  }

  formatCNPJ(cnpj: string): string {
    if (cnpj.length <= 2) return cnpj;
    if (cnpj.length <= 5) return `${cnpj.slice(0, 2)}.${cnpj.slice(2)}`;
    if (cnpj.length <= 8) return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5)}`;
    if (cnpj.length <= 12) return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8)}`;
    return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12, 14)}`;
  }

  validateCNPJ() {
    const cnpj = this.rawCNPJ;

    if (cnpj.length !== 14 || !this.isValidCNPJ(cnpj)) {
      console.error('CNPJ inválido');
      // Exibir mensagem de erro ou tomar outra ação
    } else {
      console.log('CNPJ válido');
    }
  }

  isValidCNPJ(cnpj: string): boolean {
    if (/^(\d)\1{13}$/.test(cnpj)) return false; // CNPJ composto por números iguais é inválido
    let sum = 0;
    let weight = 5;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj[i]) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    let remainder = sum % 11;
    let firstDigit = remainder < 2 ? 0 : 11 - remainder;
    if (parseInt(cnpj[12]) !== firstDigit) return false;
    sum = 0;
    weight = 6;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj[i]) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    remainder = sum % 11;
    let secondDigit = remainder < 2 ? 0 : 11 - remainder;
    return parseInt(cnpj[13]) === secondDigit;
  }


}
