import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private url: string = 'http://127.0.0.1:5000'
  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMjc5OTcxOSwianRpIjoiZjY0NWZhMzQtZWQzNi00MGFmLWFlZDAtMTJiMTE2NjI1NWI5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InVzZXJAZXhhbXBsZS5jb20iLCJuYmYiOjE3MjI3OTk3MTksImNzcmYiOiJmZGM3MWJhZi01YjQ0LTRjNmEtODdmMC1kMTRjZjI4N2JjNWUiLCJleHAiOjE3MjI4MDA2MTl9.lPdEjTe516HKm4j863kBXE2SnTaL53Udha7y16d7RNs`
    });
  }

  getFlashCards(id:any){
    return this.http.get(`${this.url}/flashcards/${id}`)
  }

  getTipoCards(){
    return this.http.get(`${this.url}/tipocard`)
  }

  //pestquisa por nome
  getPessoas(nome: string) {
    const headers = this.getHeaders();
    return this.http.get(`${this.url}/api/pessoas`, { 
      headers, 
      params: { nome: nome }
    });
  }

  addPessoa(pessoa: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${this.url}/api/pessoasCadastro`, pessoa, { headers });
  }

  getCPF(cpf: string) {
    const headers = this.getHeaders();
    return this.http.get(`${this.url}/api/cpf`, { 
      headers, 
      params: { cpf: cpf }
    });
  }

  login(email: string, password: string): Observable<{ token: string }> {
    const payload = { email, password }; // Ajuste o payload conforme necessário
    return this.http.post<{ token: string }>(`${this.url}/api/login`, payload).pipe(
      tap((response: { token: string }) => {
        localStorage.setItem('token', response.token); // Armazena o token no localStorage
      })
    );
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
