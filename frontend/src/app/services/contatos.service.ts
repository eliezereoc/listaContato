import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contatos } from '../interfaces/contatos';

const urlBase = 'http://localhost:3001';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  

  constructor(private http: HttpClient) { }

  listaContatos() {
    return this.http.get<Contatos[]>(`${urlBase}/contatos?_sort=name`);
  }

  visualizaContato(id: number) {
    return this.http.get<Contatos>(`${urlBase}/contatos/${id}`)
  }

  novoContato(contato: Contatos) {
    return this.http.post<Contatos>(`${urlBase}/contatos`, contato);
  }

  atualizaContatos(contato: Contatos) {
    return this.http.put<Contatos>(`${urlBase}/contatos/${contato.id}`, contato);
  }

  deletaContato(id: number) {
    return this.http.delete(`${urlBase}/contatos/${id}`);
  }


}
