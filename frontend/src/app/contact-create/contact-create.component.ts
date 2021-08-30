import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContatosService } from '../services/contatos.service';


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contatosForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(private contatosService: ContatosService, private router: Router) { }

  ngOnInit(): void {
  }

  criaNovoContato() {
    this.contatosService.novoContato(this.contatosForm.value).subscribe(contatos => {
      
      this.router.navigate(['/contatos']);
    })
  }

}
