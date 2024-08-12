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
      'Authorization': `Bearer ${token}`
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

  getPessoaId(id: string) {
    const headers = this.getHeaders();
    return this.http.get(`${this.url}/api/pessoaId`, {
       headers,
       params: { id: id }
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

  getFinPessoa(id: string) {
    const headers = this.getHeaders();
    return this.http.get(`${this.url}/api/pessoaFinId`, { 
      headers, 
      params: { id: id }
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

  getEvento(eventoAno:any, codigoEvento:any){
    const headers = this.getHeaders();
    if(codigoEvento =='vazio'){
      return this.http.get(`${this.url}/api/eventoBusca`, { 
        headers, 
        params: { eventoAno: eventoAno }
      });
    }else{
      return this.http.get(`${this.url}/api/eventoBusca`, { 
        headers, 
        params: { eventoCodigo: codigoEvento }
      });
    }
  }

  getPessoaEvento(evento:any){
    const headers = this.getHeaders();
    return this.http.get(`${this.url}/api/eventoPessoa`,{
      headers,
      params: { codigoevento:evento }
    })
  }
  getEventoFin(evento:any){
    const headers = this.getHeaders();
    return this.http.get(`${this.url}/api/eventoFin`,{
      headers,
      params: { codigoevento:evento }
    })
  }

  getAgendaEventos(datai: any, dataf:any){
    const headers = this.getHeaders();{
      return this.http.get(`${this.url}/api/agenda`,{
        headers,
        params: {dataInicio: datai, dataFim: dataf}
      })
    }
  }
}
