import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public titulo!: string;
  public texto!: string;
  public tituloDestaque!: string;
  public textoDestaque!: string;

  classtoDiv = {};

  constructor() { 

    this.classtoDiv = {
      'text-sucess': true
    };
  }

  ngOnInit() {
    this.titulo! = 'Lorem Ipsum é simplesmente';
    this.texto! = 'Lorem Ipsum é simplesmente uma simulação da indústria tipográfica e de impressos, e vem sendo utilizado há séculos.'
    this.tituloDestaque! = 'Que tal conhecer nossa loja?';
    this.textoDestaque! = 'Tudo embaralhado no estudo do Senai';
  }
  onSubmit(form: NgForm) {
    let dados = `
    Nome: $(form.value.nome)
    Email: $(form.value.email)
    Senha: $(form.value.senha)`;

    console.log(dados);
  }
}

