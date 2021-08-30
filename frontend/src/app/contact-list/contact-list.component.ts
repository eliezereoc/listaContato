import { Component, OnInit } from '@angular/core';
import { Contatos } from '../interfaces/contatos';
import { ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contatos: Contatos[] = [];

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {
    this.contatosService.listaContatos().subscribe(contatos => {
      this.contatos = contatos; 
    })
  }

  deletaContato(contato: Contatos){
    this.contatosService.deletaContato(contato.id).subscribe(() =>{
      const index = this.contatos.indexOf(contato);
      this.contatos.splice(index, 1);
    })
  }

}
