import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login:any
  senha:any
  spiner:any

  constructor(private auth: ApiService,
              private router: Router
  ) { }

  ngOnInit() {

  }

  async logar() {
    this.spiner = true;
    try {
      const response = await this.auth.login(this.login, this.senha).toPromise();
      console.log(response);
      await this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // Aqui você pode adicionar lógica para lidar com erros, se necessário
    } finally {
      this.spiner = false;
    }
  }


}
