import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  Card :any
  email: string = 'user@example.com';
  password: string = 'password123';
  constructor(
    private ApiService: ApiService
  ) { }

  ngOnInit() {
  }

  logar(){
    this.ApiService.login(this.email, this.password).subscribe({
      next: (response) => {
        // Processar a resposta do login
        console.log('Login successful:', response);
      },
      error: (error) => {
        // Lidar com erros
        console.error('Login failed:', error);
      }
    });
  }

}
