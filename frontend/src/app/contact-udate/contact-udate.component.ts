import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contatos } from '../interfaces/contatos';
import { ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-contact-udate',
  templateUrl: './contact-udate.component.html',
  styleUrls: ['./contact-udate.component.css']
})
export class ContactUdateComponent implements OnInit {

  contatosForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });
  id: number | any;

  constructor(private contatosServices: ContatosService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id') ; 
      this.contatosServices.visualizaContato(this.id).subscribe(contato => {
        this.contatosForm.reset(contato);
      })
    })
  }

  editaContato() {
    this.contatosServices.atualizaContatos({id: this.id, ...this.contatosForm.value})
    .subscribe(contato => {
      this.contatosForm.reset(contato);
    });
  }

}
